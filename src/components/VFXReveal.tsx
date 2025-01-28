import { useEffect, useRef } from 'react'
import { VFX } from '@vfx-js/core'

const shader = `
precision highp float;
uniform sampler2D src;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform float enterTime;
uniform float leaveTime;

uniform int mode;
uniform float layers;
uniform float speed;
uniform float delay;
uniform float width;

#define W width
#define LAYERS layers

vec4 readTex(vec2 uv) {
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) {
    return vec4(0);
  }
  return texture(src, uv);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(4859., 3985.))) * 3984.);
}

float toRangeT(vec2 p, float scale) {
  float d = length(p) / scale; // Radial mode
  return d;
}

vec4 cell(vec2 p, vec2 pi, float scale, float t, float edge) {
  vec2 pc = pi + .5;
  vec2 uvc = pc / scale;
  uvc.y /= resolution.y / resolution.x;
  uvc = uvc * 0.5 + 0.5;
  
  if (uvc.x < 0. || uvc.x > 1. || uvc.y < 0. || uvc.y > 1.) {
    return vec4(0);
  }
  
  float alpha = smoothstep(.0, .1, texture2D(src, uvc, 3.).a);
  vec4 color = texture2D(src, uvc);
  
  float x = toRangeT(pi, scale);
  float n = hash(pi);
  float anim = smoothstep(W * 2., .0, abs(x + n * W - t));
  color *= anim;
  
  color *= mix(1., clamp(.3 / abs(length(p - pc) - .5), 0., 10.), edge * pow(anim, 10.));
  
  return color * alpha;
}

vec4 cellsColor(vec2 p, float scale, float t) {
  vec2 pi = floor(p);
  vec2 pf = fract(p);
  
  float l = 0.;
  vec2 pc;
  vec2 d = vec2(0, 1);

  vec4 cc = vec4(0);
  
  // Center cell - Bright Pink
  vec4 centerCell = cell(p, pi, scale, t, .2);
  cc += centerCell * vec4(1.0, 0.2, 0.8, 1.0);
  
  // Top cell - Electric Blue
  vec4 topCell = cell(p, pi + d.xy, scale, t, .9);
  cc += topCell * vec4(0.2, 0.8, 1.0, 1.0);
  
  // Bottom cell - Neon Green
  vec4 bottomCell = cell(p, pi - d.xy, scale, t, .9);
  cc += bottomCell * vec4(0.4, 1.0, 0.2, 1.0);
  
  // Right cell - Bright Purple
  vec4 rightCell = cell(p, pi + d.yx, scale, t, .9);
  cc += rightCell * vec4(0.8, 0.2, 1.0, 1.0);
  
  // Left cell - Neon Yellow
  vec4 leftCell = cell(p, pi - d.yx, scale, t, .9);
  cc += leftCell * vec4(1.0, 1.0, 0.2, 1.0);
   
  return cc / 4.0; // Adjusted division for better color visibility
}

vec4 draw(vec2 uv, vec2 p, float t, float scale) {
  vec4 c = readTex(uv);
  vec2 pi = floor(p * scale);
  vec2 pf = fract(p * scale);
  float n = hash(pi);
  t = t * (1. + W * 4.) - W * 2.;
  float x = toRangeT(pi, scale);
  float a1 = smoothstep(t, t - W, x + n * W);
  c *= a1;
  c += cellsColor(p * scale, scale, t) * 2.0; // Increased multiplier for more vibrant colors
  return c;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - offset) / resolution;
  vec2 p = uv * 2. - 1.;
  p.y *= resolution.y / resolution.x;

  float t = clamp((enterTime - delay) * speed, 0., 1.);
  
  for (float i = 0.; i < LAYERS; i++) {
    float s = cos(i) * 7.3 + 10.;
    gl_FragColor += draw(uv, p, t, abs(s));
  }
  gl_FragColor /= LAYERS;
  
  gl_FragColor *= smoothstep(0., 0.01, t);
}
`

interface VFXRevealProps {
  children: React.ReactNode
  className?: string
  speed?: number
  delay?: number
}

export default function VFXReveal({ children, className = '', speed = 1.5, delay = 0.1 }: VFXRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const vfx = new VFX()
    vfx.add(elementRef.current, {
      shader,
      overflow: 30,
      intersection: { threshold: 0.1 },
      uniforms: {
        mode: 2,
        width: 0.4,
        layers: 5,
        speed,
        delay,
      }
    })
    
    console.log('VFX initialized:', vfx)

    return () => {
      vfx.destroy()
    }
  }, [speed, delay])

  return (
    <div 
      ref={elementRef} 
      className={`relative inline-block ${className}`}
      style={{ minHeight: '1em', minWidth: '1em' }}
    >
      {children}
    </div>
  )
} 