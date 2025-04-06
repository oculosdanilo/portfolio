<script setup lang="ts">
import EuFoto from '@/components/EuFoto.vue'
import { onMounted, onUnmounted } from 'vue'
import { useCelularStore } from '@/stores/celular'
import { DATA } from '@/data/redes'
import Flickity from 'flickity'
import GHCard from '@/components/GHCard.vue'

const celularStore = useCelularStore()

let carrosel: Flickity
onMounted(() => {
  carrosel = new Flickity('.redesCards', {
    contain: true,
    cellAlign: celularStore.celular ? 'center' : 'left'
  })
})

onUnmounted(() => {
  setTimeout(() => {
    carrosel.destroy()
  }, 101)
})

function idade(): number {
  const anoAtual = new Date().getFullYear()
  const mesAtual = new Date().getMonth()
  if (mesAtual < 9) return anoAtual - 2006
  else return anoAtual - 2005
}
</script>

<template>
  <div class="container">
    <EuFoto />
    <div class="sobre">
      <p class="desc">
        “Meu nome é (o)Danilo, tenho {{ idade() }} anos e sou Técnico em Informática para Internet.
        Também sou desenvolvedor WEB e mobile full-stack.”
      </p>
      <div class="redesCards">
        <a target="_blank" v-for="rede in DATA" :key="rede.nome" :href="rede.href" class="card">
          <img :src="rede.img" :alt="rede.nome" />
        </a>
      </div>
      <div class="github">
        <h1>Meu Github</h1>
        <div class="ghCards">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=oculosdanilo&layout=compact&bg_color=63469C&title_color=E9E7EF&text_color=E9E7EF&hide_border=true&locale=pt-br"
            alt=""
          />
          <div class="ghRepos">
            <GHCard
              titulo="oculosdanilo/gatopedia"
              desc="Uma enciclopédia de gatos!"
              info-color="#00B4AB"
              info-desc="Dart"
              stars="4"
            ></GHCard>
            <GHCard
              titulo="journey-etecct/flyvoo-app"
              desc="Aplicativo para decisão precisa da sua vida profissional"
              info-color="#00B4AB"
              info-desc="Dart"
              stars="3"
            ></GHCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 calc(((110px * 0.55) + 4em));

  .sobre {
    width: calc((100% / 3) * 2);
    min-height: 200px;
    max-height: 801px;
    height: 80vh;
    padding-left: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .github {
      margin-bottom: 4em;

      .ghCards {
        width: 100%;
        display: flex;
        justify-content: space-around;

        img {
          width: 440px;
        }

        .ghRepos {
          width: max-content;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }

      h1 {
        width: 100%;
        margin-bottom: 0.5vh;

        font-size: 5vh;
        border-bottom: 3px solid var(--od-body-color);
      }
    }

    .redesCards {
      width: 100%;
      margin-bottom: 2vh;

      .card {
        height: 18vh;
        aspect-ratio: 272 / 166;
        margin-right: 3vh;

        border-radius: 1em;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }

    .desc {
      width: 100%;
      padding-left: 1em;
      margin: 1em 0;

      font-size: 4vh;
      border-left: 3px solid var(--od-body-color);
      color: var(--od-body-color-sec);
    }
  }
}

@media (max-width: 768px) {
  .container {
    display: block;
    overflow-y: scroll;
    padding: 0 1em;

    .sobre {
      flex-direction: column;
      padding: 0;
      width: 100%;
      justify-content: normal;

      .github {
        margin-top: 2em;

        .ghCards {
          flex-direction: column;

          img {
            width: calc(100vw - 2em);
            margin-bottom: 1em;
          }

          .ghRepos * {
            width: calc(100vw - 2em);
            height: 110px;
            margin-bottom: 1em;
          }
        }
      }
    }
  }
}
</style>
