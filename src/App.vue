<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from '@/components/NavBar.vue'
  import { onMounted, ref } from 'vue'
  import { getTemaCookie, Tema, useThemeStore } from '@/stores/theme'
  import $ from 'jquery'
  import router from '@/router'
  import { useCelularStore } from '@/stores/celular'

  const celularStore = useCelularStore()
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

  router.afterEach((to, from) => {
    if (from.name == 'home')
      $('body').off('mousemove')
    const fromIndex = router.getRoutes().indexOf(from.matched[0])
    const toIndex = router.getRoutes().indexOf(to.matched[0])

    to.meta.transition = fromIndex < toIndex ? 'direita' : 'esquerda'
    document.title = to.meta.title as string
  })

  function menuToggle() {
    $('.botaoMenu, .navMobile').toggleClass('selecionado')
  }
</script>

<template>
  <div class="fundoMovel"></div>

  <nav style="z-index: 3; position: fixed; top: 0; left: 0">
    <div class="navMobile" v-if="celularStore.celular">
      <div class="botoes">
        <RouterLink @click="menuToggle" to="/projetos" active-class="ativo">Projetos</RouterLink>
        <RouterLink @click="menuToggle" to="/sobremim" active-class="ativo">Sobre mim</RouterLink>
      </div>
      <div class="modeToggle">
        <button class="temaBtn" @click="expandirFM">
          <Transition name="darklight" mode="out-in">
            <span key="1" v-if="temaStore.tema == Tema.claro" class="material-symbols-outlined">light_mode</span>
            <span key="2" v-else class="material-symbols-outlined">dark_mode</span>
          </Transition>
        </button>
      </div>
    </div>
    <NavBar @entrou="peekFM" @saiu="voltarFM" @clicou="expandirFM" />
  </nav>

  <section style="z-index: 2; position: fixed; bottom: 0; height: calc(100vh - 110px); width: 100vw">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transition as string" mode="out-in">
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

  .navMobile {
    display: none;
  }

  @media (max-width: 768px) {
    .fundoMovel {
      display: none;
    }

    .navMobile {
      width: 100vw;
      height: 220px;
      position: fixed;
      top: 0;
      right: 0;
      display: block;
      z-index: -1;
      transform: translateY(-50%);

      background-color: var(--od-body-bg);
      border-bottom: 2px solid var(--od-border);
      border-radius: 0 0 1em 1em;

      transition: transform .4s var(--ease);

      div {
        width: 100%;
        height: 50%;
      }

      .modeToggle {
        display: flex;
        justify-content: center;
        align-items: center;

        .temaBtn {
          height: 60%;
          aspect-ratio: 3 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          background-color: transparent;
          border: 2px solid var(--od-body-color);
          border-radius: 999px;

          * {
            scale: 1.3;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            color: var(--od-body-color);
          }
        }
      }

      .botoes {
        display: flex;
        justify-content: center;
        align-items: center;

        * {
          display: inline-block;
          font-size: x-large;
          border: 2px solid var(--od-primaria);
          padding: .3em .75em;
          border-radius: 999px;
          transform: scale(1);
          background-color: transparent;

          transition: box-shadow .2s var(--ease), transform .15s var(--ease);

          &:first-child {
            margin-right: 1em;
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

      &.selecionado {
        transform: translateY(49%);
      }
    }
  }

  .esquerda-enter-active,
  .esquerda-leave-active,
  .direita-enter-active,
  .direita-leave-active {
    transition: transform .1s var(--ease), opacity .1s var(--ease);
  }

  .esquerda-enter-from,
  .esquerda-leave-to,
  .direita-enter-from,
  .direita-leave-to {
    opacity: 0;
  }

  .esquerda-enter-to,
  .esquerda-leave-from,
  .direita-enter-to,
  .direita-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  .esquerda-enter-from,
  .direita-leave-to {
    transform: translateX(-2vw);
  }

  .direita-enter-from,
  .esquerda-leave-to {
    transform: translateX(2vw);
  }
</style>
