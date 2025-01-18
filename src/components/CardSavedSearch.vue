<template>
  <div v-for="(v, k) in savedSearch" :key="k" class="chip-container">
    <q-chip clickable @click="emit('search', v)">
      <p v-if="!v.borough && !v.min && !v.max && !v.bedrooms" class="q-mb-none">Search 1</p>
      <p v-else class="q-mb-none">
        {{ v.borough || '' }} {{ v.min || '' }} {{ v.max || '' }} {{ v.bedrooms || '' }}
      </p>
    </q-chip>

    <q-icon
      name="close"
      color="red"
      class="cursor-pointer"
      @click="searchStore.clearSavedSearch(k)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from 'stores/search-store.js'

const emit = defineEmits(['search'])

const searchStore = useSearchStore()

const savedSearch = computed(() => searchStore.savedSearch)
</script>

<style scoped>
.chip-container {
  margin-right: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}
</style>
