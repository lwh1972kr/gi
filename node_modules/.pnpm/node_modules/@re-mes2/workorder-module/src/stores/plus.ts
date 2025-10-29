import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlusStore = defineStore('plus', () => {
  const plus = ref(0)
  const doubleCount = computed(() => plus.value * 2)
  function increment() {
    plus.value++
  }

  return { plus, doubleCount, increment }
})
