import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import routes from '@/router/routes'
import { useAuthenticateStore } from '@/stores/authenticate-store'

describe('Router', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should allow access to the search page without entering a neighborhood', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

    router.push('/search')
    await router.isReady()

    expect(router.currentRoute.value.name).toBe('search')
  })

  it('should redirect to the home page if the user is not authenticated', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

    router.push('/favorites')
    await router.isReady()

    const { isAuthenticated } = useAuthenticateStore()

    expect(isAuthenticated).toBe(false)
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('should update the document title when navigating to the search page', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

    router.beforeEach((to, from, next) => {
      document.title = to.meta.title || 'Default Title'
      next()
    })

    router.push('/search')
    await router.isReady()

    expect(document.title).toBe('Search')
  })
})
