declare module '@microlink/react' {
  import { ComponentType } from 'react'

  interface MicrolinkProps {
    url: string
    size?: 'small' | 'large' | 'auto'
    className?: string
    media?: {
      width?: number
      height?: number
    }
    loading?: 'lazy' | 'eager'
    setData?: {
      screenshot?: {
        waitFor?: number
        element?: string
        type?: string
        fullPage?: boolean
      }
    }
    onError?: () => void
    onSuccess?: () => void
  }

  const Microlink: ComponentType<MicrolinkProps>
  export default Microlink
} 