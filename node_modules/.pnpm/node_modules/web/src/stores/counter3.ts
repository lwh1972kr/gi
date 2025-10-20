import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore2 = defineStore('counter', () => {
  const count2 = ref(0)
  const doubleCount = computed(() => count2.value * 2)
  function increment() {
    count2.value++
  }

  return { count2, doubleCount, increment }
})
