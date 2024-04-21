<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComp from '@/components/NavComp.vue'
</script>

<template>
  <header>
    <NavComp />
  </header>

  <RouterView />
</template>

<style scoped>
</style>
