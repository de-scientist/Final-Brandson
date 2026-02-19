export interface Product {
  id: string
  name: string
  description: string
  price: number
  stripePriceId?: string
}

export const PRODUCT_CATALOG: Product[] = [
  {
    id: '1',
    name: 'Basic Service',
    description: 'A basic service package',
    price: 99.99,
    stripePriceId: 'price_basic'
  },
  {
    id: '2',
    name: 'Premium Service',
    description: 'A premium service package',
    price: 199.99,
    stripePriceId: 'price_premium'
  }
]

export async function createStripeCheckoutSession(items: Product[]) {
  // Placeholder implementation
  return { url: '#' }
}

export async function createStripePaymentIntent(amount: number) {
  // Placeholder implementation
  return { client_secret: 'secret_placeholder' }
}
