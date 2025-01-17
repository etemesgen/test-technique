import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import routes from '@/router/routes'

describe('Router', () => {
  it('should allow access to the search page without entering a neighborhood', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

    router.push('/search')
    await router.isReady()

    expect(router.currentRoute.value.name).toBe('search')
  })
})
