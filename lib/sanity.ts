import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
}

export async function getSanityDocument<T extends SanityDocument>(
  type: string,
  id: string
): Promise<T | null> {
  // Placeholder implementation
  return null
}

export async function getSanityDocuments<T extends SanityDocument>(
  type: string,
  query?: string
): Promise<T[]> {
  // Placeholder implementation
  return []
}
