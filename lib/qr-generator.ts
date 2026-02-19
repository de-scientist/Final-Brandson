export interface QRCodeData {
  type: 'quote' | 'receipt' | 'product'
  id: string
  data: any
  generatedAt: Date
}

export async function generateQRCode(data: QRCodeData): Promise<string> {
  // Placeholder implementation - would use qrcode library
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
}

export async function verifyQRCode(qrData: string): Promise<QRCodeData | null> {
  // Placeholder implementation
  return null
}

export function createQRCodeURL(type: string, id: string): string {
  return `${process.env.NEXT_PUBLIC_APP_URL}/verify/${type}/${id}`
}
