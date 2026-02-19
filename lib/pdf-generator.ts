import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export interface QuoteData {
  quoteNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: Array<{
    description: string
    quantity: number
    unitPrice: number
    total: number
  }>
  subtotal: number
  tax: number
  total: number
  validUntil: Date
  createdAt: Date
}

export interface ReceiptData {
  receiptNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: Array<{
    description: string
    quantity: number
    unitPrice: number
    total: number
  }>
  subtotal: number
  tax: number
  total: number
  paymentMethod: string
  paidAt?: Date
  createdAt: Date
}

export async function generateQuotePDF(data: QuoteData): Promise<Blob> {
  const doc = new jsPDF()
  
  // Add header
  doc.setFontSize(20)
  doc.text('Quote', 20, 20)
  
  doc.setFontSize(12)
  doc.text(`Quote Number: ${data.quoteNumber}`, 20, 35)
  doc.text(`Date: ${data.createdAt.toLocaleDateString()}`, 20, 45)
  doc.text(`Valid Until: ${data.validUntil.toLocaleDateString()}`, 20, 55)
  
  // Add customer info
  doc.text('Customer Information:', 20, 75)
  doc.text(`Name: ${data.customerName}`, 20, 85)
  doc.text(`Email: ${data.customerEmail}`, 20, 95)
  doc.text(`Phone: ${data.customerPhone}`, 20, 105)
  
  // Add items table
  const tableData = data.items.map(item => [
    item.description,
    item.quantity.toString(),
    `$${item.unitPrice.toFixed(2)}`,
    `$${item.total.toFixed(2)}`
  ])
  
  autoTable(doc, {
    head: [['Description', 'Quantity', 'Unit Price', 'Total']],
    body: tableData,
    startY: 125
  })
  
  // Add totals
  const finalY = (doc as any).lastAutoTable.finalY || 125
  doc.text(`Subtotal: $${data.subtotal.toFixed(2)}`, 20, finalY + 20)
  doc.text(`Tax: $${data.tax.toFixed(2)}`, 20, finalY + 30)
  doc.setFontSize(14)
  doc.text(`Total: $${data.total.toFixed(2)}`, 20, finalY + 45)
  
  return new Blob([doc.output('blob')], { type: 'application/pdf' })
}

export async function generateReceiptPDF(data: ReceiptData): Promise<Blob> {
  const doc = new jsPDF()
  
  // Add header
  doc.setFontSize(20)
  doc.text('Receipt', 20, 20)
  
  doc.setFontSize(12)
  doc.text(`Receipt Number: ${data.receiptNumber}`, 20, 35)
  doc.text(`Date: ${data.createdAt.toLocaleDateString()}`, 20, 45)
  if (data.paidAt) {
    doc.text(`Paid At: ${data.paidAt.toLocaleDateString()}`, 20, 55)
  }
  
  // Add customer info
  doc.text('Customer Information:', 20, 75)
  doc.text(`Name: ${data.customerName}`, 20, 85)
  doc.text(`Email: ${data.customerEmail}`, 20, 95)
  doc.text(`Phone: ${data.customerPhone}`, 20, 105)
  doc.text(`Payment Method: ${data.paymentMethod}`, 20, 115)
  
  // Add items table
  const tableData = data.items.map(item => [
    item.description,
    item.quantity.toString(),
    `$${item.unitPrice.toFixed(2)}`,
    `$${item.total.toFixed(2)}`
  ])
  
  autoTable(doc, {
    head: [['Description', 'Quantity', 'Unit Price', 'Total']],
    body: tableData,
    startY: 135
  })
  
  // Add totals
  const finalY = (doc as any).lastAutoTable.finalY || 135
  doc.text(`Subtotal: $${data.subtotal.toFixed(2)}`, 20, finalY + 20)
  doc.text(`Tax: $${data.tax.toFixed(2)}`, 20, finalY + 30)
  doc.setFontSize(14)
  doc.text(`Total: $${data.total.toFixed(2)}`, 20, finalY + 45)
  
  return new Blob([doc.output('blob')], { type: 'application/pdf' })
}
