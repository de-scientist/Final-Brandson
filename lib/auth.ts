export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

export async function getAuthUser(): Promise<User | null> {
  // Placeholder implementation - replace with actual auth logic
  return null
}

export async function requireAuth(): Promise<User> {
  const user = await getAuthUser()
  if (!user) {
    throw new Error('Authentication required')
  }
  return user
}
