<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from '@/components/NavBar.vue'
  import { onMounted } from 'vue'
  import { useThemeStore, getTemaCookie } from '@/stores/theme'
  
  const temaStore = useThemeStore()
  
  onMounted(() => {
    temaStore.mudarTema(getTemaCookie())
  })
</script>

<template>
  <header>
    <NavBar />
  </header>
  
  <RouterView />
</template>

<style scoped>
</style>
