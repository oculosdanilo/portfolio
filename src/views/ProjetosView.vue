<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import Flickity from 'flickity'
import { DATA } from '@/data/projetos'
import { onMounted, onUnmounted } from 'vue'
import { useCelularStore } from '@/stores/celular'

const celular = useCelularStore()

let flickity: Flickity
onMounted(() => {
  celular.setCelular()

  const divCarr = document.querySelector('.main-carousel')!
  if (!celular.celular) {
    flickity = new Flickity(divCarr, {
      wrapAround: true,
      cellAlign: 'left',
      freeScroll: true
    })
  }
})

onUnmounted(() => {
  if (!celular.celular) {
    setTimeout(() => {
      flickity.destroy()
    }, 101)
  }
})
</script>

<template>
  <div class='espaco'>
    <h1 id="titulo">Meus projetos</h1>
    <p id="subtitulo">Meus melhores projetos reproduzíveis até agora:</p>
    <div class="main-carousel">
      <div class="carousel-cell" v-for="projeto in DATA" :key="projeto.nome">
        <img :src="projeto.img" :alt="projeto.desc" class="imagem" />
        <div class="conteudo">
          <h2>{{ projeto.nome }}</h2>
          <p>{{ projeto.desc }}</p>
        </div>
        <a :href="projeto.href" target="_blank" class="botao">ACESSAR</a>
      </div>
    </div>
  </div>
</template>

<style>
.flickity-prev-next-button {
  display: none;
}

.flickity-page-dots {
  display: none;
}

.espaco {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 calc(((110px * 0.55) + 4em));

  h1 {
    font-weight: 900;
    font-size: 6em;
  }

  p {
    font-size: 2em;
    margin-bottom: 1em;
  }

  .main-carousel {
    .carousel-cell {
      height: 474px;
      aspect-ratio: 364 / 474;
      margin-left: 2em;

      background-color: rgba(var(--od-body-color-rgb), .1);
      border-radius: 2em;
      overflow: hidden;

      img {
        height: 50%;
        aspect-ratio: 364 / 237;
      }

      .botao {
        width: fit-content;
        padding: .5em 1em;
        position: absolute;
        bottom: 1.5em;
        right: 1.5em;

        border-radius: 999px;
        font-size: 20px;
        background-color: var(--od-primaria);
        color: #E9E7EF;
      }

      .conteudo {
        padding: 1em 2em;

        h2 {
          font-size: 3em;
        }

        p {
          font-size: 1.5em;
          color: var(--od-body-color-sec);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .espaco {
    padding: 1em 1em 0;
    width: 100vw;
    justify-content: end;
    align-items: start;

    h1 {
      font-size: 3.5em;
    }

    p {
      font-size: 1.5em;
    }

    .main-carousel {
      overflow-y: scroll;

      .carousel-cell {
        width: calc(100% - 4em);
        height: auto;
        margin-bottom: 2em;
        position: relative;

        img {
          width: 100%;
          height: auto;
        }

        .conteudo {
          h2 {
            font-size: 2em;
          }
        }
      }
    }
  }
}
</style>
