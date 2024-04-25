<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from '@/components/NavBar.vue'
  import { onMounted, ref } from 'vue'
  import { getTemaCookie, Tema, useThemeStore } from '@/stores/theme'
  import $ from 'jquery'

  const temaStore = useThemeStore()

  const voltando = ref(false)

  onMounted(() => {
    temaStore.mudarTema(getTemaCookie())
    document.documentElement.className = getTemaCookie()

    settarFundoMovel()
  })

  function settarFundoMovel() {
    if (temaStore.tema == Tema.claro)
      $('.fundoMovel').css('background-color', 'var(--od-c-raisin-black)')
    else
      $('.fundoMovel').css('background-color', 'var(--od-c-magnolia)')
  }

  function peekFM() {
    if (!voltando.value) {
      $('.nav').css('background-color', 'transparent')
      $('.fundoMovel').css('transform', 'translateX(calc(100vw - ((110px * 0.55) + 4em)))')
    }
  }

  function voltarFM() {
    if (!voltando.value) {
      $('.nav').css('background-color', 'var(--od-nav-bg)')
      $('.fundoMovel').css('transform', 'translateX(100vw)')
    }
  }

  function expandirFM() {
    voltando.value = true
    $('.temaBtn').css('pointer-events', 'none')

    $('.fundoMovel').css('transform', 'translateX(0)')

    document.documentElement.className = temaStore.tema == Tema.escuro ? Tema.claro : Tema.escuro
    temaStore.mudarTema(temaStore.tema == Tema.escuro ? Tema.claro : Tema.escuro)

    setTimeout(() => {
      voltando.value = false
      $('.temaBtn').css('pointer-events', 'all')

      voltarFM()
      setTimeout(() => {
        settarFundoMovel()
      }, 401)
    }, 501)
  }
</script>

<template>
  <div class="fundoMovel"></div>

  <nav style="z-index: 3; position: fixed; top: 0; left: 0">
    <NavBar @entrou="peekFM" @saiu="voltarFM" @clicou="expandirFM" />
  </nav>

  <section style="z-index: 2; position: fixed; bottom: 0; height: calc(100vh - 110px); width: 100vw">
    <RouterView v-slot="{ Component }">
      <Transition name="transitionPage">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </section>
</template>

<style scoped>
  .fundoMovel {
    z-index: 1;
    position: absolute;
    transform: translateX(100vw);

    width: 100vw;
    height: 100vh;

    transition: transform .4s;
  }
</style>
