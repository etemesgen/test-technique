import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import SearchPage from '@/pages/SearchPage.vue'

describe('SearchPage.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(SearchPage)
    expect(wrapper.exists()).toBe(true)
  })
})
