<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import $ from 'jquery'
import { useCelularStore } from '@/stores/celular'

const celularStore = useCelularStore()

const ano = new Date().getFullYear()
let nInterval: NodeJS.Timeout

onMounted(() => {
  nInterval = setInterval(() => {
    toggle()
  }, 700)

  if (!celularStore.celular) {
    $('body').on('mousemove', function (event) {
      let eye = $('.lenteOut1')
      let x1 = eye.offset()!.left + eye.width()! / 2
      let y1 = eye.offset()!.top + eye.height()! / 2
      let rad1 = Math.atan2(event.pageX - x1, event.pageY - y1)
      let rot1 = rad1 * (180 / Math.PI) * -1 + 180
      eye.css({
        '-webkit-transform': 'rotate(' + rot1 + 'deg)',
        '-moz-transform': 'rotate(' + rot1 + 'deg)',
        '-ms-transform': 'rotate(' + rot1 + 'deg)',
        transform: 'rotate(' + rot1 + 'deg)'
      })

      let eye2 = $('.lenteOut2')
      let x = eye2.offset()!.left + eye2.width()! / 2
      let y = eye2.offset()!.top + eye2.height()! / 2
      let rad = Math.atan2(event.pageX - x, event.pageY - y)
      let rot = rad * (180 / Math.PI) * -1 + 180
      eye2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        transform: 'rotate(' + rot + 'deg)'
      })
    })
  }
})

onUnmounted(() => {
  clearInterval(nInterval)
})

function toggle() {
  $('#h1').toggleClass('morre')
  $('#h2').toggleClass('morre')
}
</script>

<template>
  <div class="container">
    <div style="margin-top: 1em">
      <h1 class="titulo morre" id="h1">BEM&nbsp;</h1>
      <h1 class="titulo" id="h2">VINDO(A)</h1>
    </div>
    <p class="desc">Portfólio virtual de <span>Danilo Lima</span></p>
    <p class="copy">&copy; {{ ano }} oculosdanilo<br />Todos os direitos reservados</p>
    <div class="oculos">
      <svg width="456" height="188" viewBox="0 0 456 188" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M121.997 61.399L37.3618 0.000732422L23.7178 18.8086L108.353 80.2069L121.997 61.399Z"
            class="armacao"
          />
          <path
            d="M18.3859 65.5537L56.0647 13.6152L37.2569 -0.0288937L-0.421892 51.9096L18.3859 65.5537Z"
            class="armacao"
          />
        </g>
        <ellipse cx="161.488" cy="99.042" rx="88.8764" ry="88.8764" class="armacao" />
        <ellipse cx="367.124" cy="99.042" rx="88.8764" ry="88.8764" class="armacao" />
        <path d="M285.218 87.4243H239.327V110.66H285.218V87.4243Z" class="armacao" />
      </svg>
      <div class="lenteOut1"></div>
      <div class="lenteOut2"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgba(var(--od-c-alt1-rgb), 0.2);
  margin: 0 auto;
  width: 1000px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 0 0 40px 40px;

  * {
    text-align: center;
  }

  .titulo {
    display: inline;
    font-size: 6em;
    font-weight: 900;
    line-height: 1em;
    letter-spacing: 0.1em;
    font-family: 'Bebas Neue', sans-serif;
    color: transparent;
    -webkit-text-stroke: 0.001em var(--od-body-bg);

    &.morre {
      -webkit-text-stroke: 0.001em var(--od-primaria);
      text-shadow:
        0 0 rgba(var(--od-c-alt1-rgb), 0.2),
        0 0 var(--od-body-bg),
        0 0 7px var(--od-primaria);
    }
  }

  .desc {
    font-size: 2em;
    margin-bottom: 0.9em;
    margin-top: 1em;

    span {
      font-weight: 700;
    }
  }

  .copy {
    font-size: 2em;
    color: var(--od-body-color-sec);
    margin-bottom: 2em;
  }

  .oculos {
    position: relative;

    .lenteOut1,
    .lenteOut2 {
      position: absolute;
      top: 40px;
      width: 119px;
      height: 119px;
      border-radius: 50%;
      background-color: #e9e7ef;
      overflow: hidden;

      &::after {
        position: absolute;
        top: calc(90px / -2);
        left: calc((119px - 100px) / 2);
        width: calc(100px);
        height: calc(100px);
        background: #120d1c;
        border-radius: 50%;
        content: ' ';
      }
    }

    .lenteOut1 {
      left: 102px;
    }

    .lenteOut2 {
      left: 308px;
    }

    svg {
      margin-bottom: 2em;

      .armacao {
        fill: var(--od-primaria);
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    width: 100vw;
    padding-top: 1em;

    .copy {
      margin-bottom: 1em;
    }

    .titulo {
      font-size: 3em;
    }

    .oculos {
      scale: 0.8;
    }
  }
}
</style>
