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
})
