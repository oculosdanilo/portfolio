<script setup lang="ts">
  import EuFoto from '@/components/EuFoto.vue'
  import { onMounted, onUnmounted } from 'vue'
  import Flickity from 'flickity'

  let flckty: Flickity
  onMounted(() => {
    flckty = new Flickity('.redesCards', {
      contain: true,
      cellAlign: 'left'
    })
  })

  onUnmounted(() => {
    flckty.destroy()
  })
</script>

<template>
  <div class="container">
    <EuFoto />
    <div class="sobre">
      <p class="desc">“Meu nome é (o)Danilo, tenho 18 anos e sou Técnico em Informática para Internet. Também sou
                      desenvolvedor WEB full-stack e mobile.”</p>
      <div class="redesCards">
        <a target="_blank" href="https://github.com/oculosdanilo" class="card">
          <img src="/github.png" alt="Github">
        </a>
        <a target="_blank" href="https://twitter.com/oDanilo05" class="card">
          <img src="/x.png" alt="X (Twitter)">
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/danilo-lima-99bb57304/" class="card">
          <img src="/linkedin.png" alt="Linkedin">
        </a>
      </div>
      <div class="github">
        <h1>Meu Github</h1>
        <div class="ghCards">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=oculosdanilo&layout=compact&bg_color=63459b&title_color=E9E7EF&text_color=E9E7EF&hide_border=true&locale=pt-br"
            width="440px" alt="" />
          <div class="ghRepos">
            <object type="image/svg+xml"
                    data="https://gh-card.dev/repos/oculosdanilo/gatopedia.svg?fullname=&link_target=_blank"></object>
            <object type="image/svg+xml"
                    data="https://gh-card.dev/repos/journey-etecct/flyvoo-app.svg?fullname=&link_target=_blank"></object>
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
      height: 100%;
      padding-left: 5em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .github {
        margin-bottom: 4em;

        .ghCards {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .ghRepos {
            width: min-content;

            object {
              border-radius: 1em;
            }
          }
        }

        h1 {
          width: 100%;
          margin-bottom: .5em;

          font-size: 4em;
          border-bottom: 3px solid var(--od-body-color);
        }
      }

      .redesCards {
        width: 100%;

        .card {
          height: 166px;
          width: 272px;
          margin-right: 2em;

          border-radius: 1em;
          overflow: hidden;
        }
      }

      .desc {
        width: 100%;
        padding-left: 1em;
        margin: 1em 0;

        font-size: xx-large;
        border-left: 3px solid var(--od-body-color);
        color: var(--od-body-color-sec);
      }
    }
  }
</style>