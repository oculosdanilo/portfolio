<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import LogoNav from '@/components/LogoNav.vue'
import { Tema, useThemeStore } from '@/stores/theme'
import { useCelularStore } from '@/stores/celular'

const celularStore = useCelularStore()
const temaStore = useThemeStore()
</script>

<template>
  <div class="nav">
    <RouterLink to="/" style="height: 63%" active-class="ativoLogo" @click="$emit('esconderNavMobile')">
      <LogoNav />
    </RouterLink>

    <div class="botoes" v-if="!celularStore.celular">
      <div class="navegacao">
        <RouterLink to="/projetos" active-class="ativo">Projetos</RouterLink>
        <RouterLink to="/sobremim" active-class="ativo">Sobre mim</RouterLink>
      </div>
      <button
        class="temaBtn"
        @mouseover="$emit('entrou')"
        @mouseout="$emit('saiu')"
        @click="$emit('clicou')"
      >
        <Transition name="darklight" mode="out-in">
          <span key="1" v-if="temaStore.tema == Tema.claro" class="material-symbols-outlined"
            >light_mode</span
          >
          <span key="2" v-else class="material-symbols-outlined">dark_mode</span>
        </Transition>
      </button>
    </div>
    <button class="botaoMenu" v-else @click="$emit('toggleNavMobile')">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
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

  transition:
    background-color 0.4s,
    border-bottom-color 0.4s;

  .botoes {
    height: 55%;
    display: flex;
    align-items: center;

    .navegacao {
      margin-right: 4em;
      width: fit-content;

      a {
        display: inline-block;
        font-size: x-large;
        margin-left: 1em;
        border: 2px solid var(--od-primaria);
        padding: 0.4em 0.75em 0.25em;
        border-radius: 999px;
        transform: scale(1);
        background-color: transparent;

        transition:
          box-shadow 0.2s var(--ease),
          transform 0.15s var(--ease);

        &:hover {
          background-color: var(--od-primaria);
          box-shadow: 0 0 30px 10px var(--od-primaria);
          color: var(--od-c-magnolia);
        }

        &:active {
          transform: scale(0.9);
        }

        &.ativo {
          background-color: var(--od-primaria);
          color: var(--od-c-magnolia);
        }
      }
    }

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

.darklight-enter-from,
.darklight-leave-to {
  transform: scaleX(0);
}

.darklight-enter-to,
.darklight-leave-from {
  transform: scaleX(1);
}

.darklight-enter-active,
.darklight-leave-active {
  transition: transform 0.2s var(--ease);
}

@media (max-width: 768px) {
  .botaoMenu {
    height: 60%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: 2px solid var(--od-primaria);
    border-radius: 1em;

    transition: background-color 0.1s;

    span {
      color: var(--od-body-color);
      scale: 1.4;
    }

    &.selecionado {
      background-color: rgba(var(--od-primaria-rgb), 0.2);
    }
  }
}
</style>
