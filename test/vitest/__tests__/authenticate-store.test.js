import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthenticateStore } from '@/stores/authenticate-store'
import { Notify } from 'quasar'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'

installQuasarPlugin({ plugins: { Notify } })

vi.mock('quasar', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    Notify: {
      create: vi.fn(),
      setDefaults: vi.fn(),
    },
  }
})

describe('authenticate-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('authenticates user with correct credentials', async () => {
    const store = useAuthenticateStore()
    const user = { username: 'Admin', password: 'Admin' }
    process.env.USERNAME_APP = 'Admin'
    process.env.PASSWORD = 'Admin'

    const result = await store.authenticateUser(user)

    expect(result).toEqual(user)
    expect(store.user).toEqual(user)
  })

  it('fails to authenticate user with incorrect credentials', async () => {
    const store = useAuthenticateStore()
    const user = { username: 'Admin', password: 'wrongpassword' }
    process.env.USERNAME_APP = 'Admin'
    process.env.PASSWORD = 'Admin'

    const result = await store.authenticateUser(user)

    expect(result).toBeNull()
    expect(store.user).toBeNull()
  })

  it('logs out user', async () => {
    const store = useAuthenticateStore()
    const user = { username: 'Admin', password: 'Admin' }
    process.env.USERNAME_APP = 'Admin'
    process.env.PASSWORD = 'Admin'

    await store.authenticateUser(user)
    await store.logoutUser()

    expect(store.user).toBeNull()
  })

  it('adds favorites', async () => {
    const store = useAuthenticateStore()
    const user = { username: 'Admin', password: 'Admin' }
    process.env.USERNAME_APP = 'Admin'
    process.env.PASSWORD = 'Admin'

    await store.authenticateUser(user)
    await store.addToFavorites({
      borough: 'La Défense',
      category: 'Alcove',
      bedrooms: 4,
      city: 'Paris',
      country: 'France',
      id: 1,
      image: 'https://images.unsplash.com/photo-1595526110121-b6b5f62e4875',
      price: 1595,
      rating: 5,
      reviews: 26,
      title: 'Apartment in Canal Saint-Martin with unique charm',
    })

    expect(store.favorites).toEqual([
      {
        borough: 'La Défense',
        category: 'Alcove',
        bedrooms: 4,
        city: 'Paris',
        country: 'France',
        id: 1,
        image: 'https://images.unsplash.com/photo-1595526110121-b6b5f62e4875',
        price: 1595,
        rating: 5,
        reviews: 26,
        title: 'Apartment in Canal Saint-Martin with unique charm',
      },
    ])
  })

  it('deletes favorites', async () => {
    const store = useAuthenticateStore()
    const user = { username: 'Admin', password: 'Admin' }
    process.env.USERNAME_APP = 'Admin'
    process.env.PASSWORD = 'Admin'

    await store.authenticateUser(user)
    await store.removeFromFavorites({
      borough: 'La Défense',
      category: 'Alcove',
      bedrooms: 4,
      city: 'Paris',
      country: 'France',
      id: 1,
      image: 'https://images.unsplash.com/photo-1595526110121-b6b5f62e4875',
      price: 1595,
      rating: 5,
      reviews: 26,
      title: 'Apartment in Canal Saint-Martin with unique charm',
    })

    expect(store.favorites).toEqual([])
  })
})
