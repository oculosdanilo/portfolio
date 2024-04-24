<script setup lang="ts">
  import LogoNav from '@/components/LogoNav.vue'
  import { Tema, useThemeStore } from '@/stores/theme'

  const emit = defineEmits(['clicou', 'entrou', 'saiu'])

  const temaStore = useThemeStore()

  function clicou(): void {
    emit('clicou')
  }
</script>

<template>
  <nav class="nav">
    <RouterLink to="/" style="height: 63%">
      <LogoNav />
    </RouterLink>

    <div class="botoes">
      <div class="navegacao"></div>
      <button class="temaBtn" @mouseover="$emit('entrou')" @mouseout="$emit('saiu')"
              @click="clicou">
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

    transition: background-color .4s;

    .botoes {
      height: 55%;

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
          border-color: var(--od-body-bg);

          & > * {
            color: var(--od-body-bg);
          }
        }

        * {
          scale: 1.2;
          width: 100%;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          color: var(--od-body-color);
        }
      }
    }
  }
</style>