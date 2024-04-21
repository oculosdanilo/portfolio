<script setup lang="ts">
  import LogoNav from '@/components/LogoNav.vue'
  import { Tema, useThemeStore } from '@/stores/theme'
  
  const temaStore = useThemeStore()
</script>

<template>
  <nav class="nav">
    <RouterLink to="/" style="height: 63%">
      <LogoNav />
    </RouterLink>
    
    <div class="botoes">
      <div class="navegacao"></div>
      <button class="temaBtn">
        <span v-if="temaStore.tema == Tema.claro" class="material-symbols-outlined">light_mode</span>
        <span v-else class="material-symbols-outlined">dark_mode</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
  .nav {
    width: 100vw;
    height: 110px;
    padding: 0 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--od-nav-bg);
    border-bottom: 2px solid var(--od-border);
    
    .botoes {
      height: 60%;
      
      .temaBtn {
        height: 100%;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        background-color: transparent;
        border: 2px solid var(--od-body-color);
        border-radius: 50%;
        
        &:hover {
          background-color: rgba(var(--od-body-color), .1);
        }
        
        * {
          scale: 1.3;
        }
      }
    }
  }
</style>