import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCelularStore = defineStore('celular', () => {
  const celular = ref(matchMedia('(max-width: 768px)').matches)

  function setCelular() {
    celular.value = matchMedia('(max-width: 768px)').matches
  }

  setInterval(() => {
    setCelular()
  }, 100)

  return { celular }
})