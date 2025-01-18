import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useSearchStore } from '@/stores/search-store'

describe('search-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('filters accommodations by rent (min and max)', () => {
    const store = useSearchStore()

    const form = {
      min: 1500,
      max: 2000,
    }

    const result = store.filteringAccommodation(form)

    const expected = store.accommodations.filter(
      (accommodation) => accommodation.price >= form.min && accommodation.price <= form.max,
    )

    expect(result).toEqual(expected)
  })

  it('saves search', () => {
    const store = useSearchStore()

    const search = {
      borough: 'Test',
      category: null,
      bedrooms: null,
      min: '1210',
      max: null,
    }

    store.saveSearch(search)

    expect(store.savedSearch).toContainEqual(search)
  })

  it('does not save duplicate search', () => {
    const store = useSearchStore()

    const search = {
      borough: 'Test',
      category: null,
      bedrooms: null,
      min: '1210',
      max: null,
    }

    store.saveSearch(search)
    store.saveSearch(search)

    expect(store.savedSearch).toHaveLength(1)
  })

  it('clears saved search', () => {
    const store = useSearchStore()

    const search = {
      borough: 'Test',
      category: null,
      bedrooms: null,
      min: '1210',
      max: null,
    }

    store.saveSearch(search)
    store.clearSavedSearch()

    expect(store.savedSearch).toEqual([])
  })
})
