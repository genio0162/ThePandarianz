// Toast notification system for the app
export type NotifyType = 'success' | 'error' | 'info' | 'warning'

export interface NotifyProps {
  type: NotifyType
  message: string
  description?: string
  txid?: string
}

// Simple console notification function
// In a real app, you might use a UI toast library like react-toastify
export function notify({ type, message, description = '', txid }: NotifyProps) {
  console.log(`[${type.toUpperCase()}]: ${message} ${description} ${txid ? `TXID: ${txid}` : ''}`)
  
  // In a production app, you'd show a visual notification here
  // Example with a simple alert (you would replace this with a proper toast)
  if (type === 'error') {
    alert(`Error: ${message}\n${description}`)
  }
}