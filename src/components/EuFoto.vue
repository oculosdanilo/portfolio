<!--suppress CssReplaceWithShorthandSafely -->
<template>
  <div class="eu">
    <div class="dec l1"></div>
    <div class="dec l2"></div>
    <div class="dec l3"></div>
    <div class="dec l4"></div>
    <div class="dec l5"></div>
    <div class="sec">
      <div class="dec l1"></div>
      <div class="dec l2"></div>
      <div class="dec l3"></div>
      <div class="dec l4"></div>
      <div class="dec l5"></div>
    </div>
    <div class="ter">
      <div class="dec l1"></div>
      <div class="dec l2"></div>
      <div class="dec l3"></div>
      <div class="dec l4"></div>
      <div class="dec l5"></div>
    </div>
    <img src="/danilo.png" alt="eu <3" />
  </div>
</template>

<style scoped>
  .eu {
    width: calc(100% / 3);
    height: 60%;
    position: relative;
    z-index: 20;

    img {
      width: 67%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .sec {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scale(0.75) rotate(35deg) translate(-10%, -5%);
    }

    .ter {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scale(0.7) rotate(95deg) translate(-20%, 8%);
    }

    .dec {
      position: absolute;
      scale: 1.3;
      z-index: 19;

      &.l1 {
        width: 40px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--od-primaria);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        animation: l1 2s infinite cubic-bezier(0.3, 1, 0, 1);

        top: -24px;
        left: 24px;
      }

      &.l2 {
        width: 45px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg, var(--od-primaria) 0 calc(100% / 7), #0000 0 calc(200% / 7));
        background: var(--c), var(--c), var(--c), var(--c);
        background-size: 140% 26%;
        animation: l26 .75s infinite linear;

        top: -75px;
        right: 19px;
      }

      &.l3 {
        width: 40px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(var(--od-primaria) 0 0);
        background: var(--c) 0 0,
        var(--c) 0 100%,
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 0,
        var(--c) 100% 100%;
        background-size: 8px 50%;
        animation: l7-0 1s infinite;
        overflow: hidden;

        bottom: 60px;
        left: 66px;
        scale: 1.5;
      }

      &.l3:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--od-primaria);
        top: calc(50% - 4px);
        left: -8px;
        animation: inherit;
        animation-name: l7-1;
      }

      &.l4 {
        width: 40px;
        aspect-ratio: 1;
        --c: linear-gradient(var(--od-primaria) 0 0);
        --m: radial-gradient(farthest-side, var(--od-primaria) 92%, #0000);
        background: var(--m) center               /12px 12px,
        var(--c) left 50% top -20px/8px 16px,
        var(--c) left 50% bottom -20px/8px 16px,
        var(--c) top 50% left -20px/16px 8px,
        var(--c) top 50% right -20px/16px 8px;
        background-repeat: no-repeat;
        animation: l18-1 1.5s infinite,
        l18-2 1.5s infinite;

        bottom: 0;
        right: 147px;
        scale: 1.5;
      }

      &.l5 {
        width: 40px;
        aspect-ratio: 1;
        color: var(--od-primaria);
        background: radial-gradient(10px, currentColor 94%, #0000);

        bottom: 90px;
        right: 0;
      }

      &.l5:before {
        content: '';
        inset: 0;
        border-radius: 50%;
        position: absolute;
        background: radial-gradient(9px at bottom right, #0000 94%, currentColor) top left,
        radial-gradient(9px at bottom left, #0000 94%, currentColor) top right,
        radial-gradient(9px at top right, #0000 94%, currentColor) bottom left,
        radial-gradient(9px at top left, #0000 94%, currentColor) bottom right;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        animation: l18 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
      }

      .sec > &.l1, .sec > &.l3:before {
        background: rgba(var(--od-primaria-rgb), 0.75);
      }

      .sec > &.l2 {
        --c: no-repeat repeating-linear-gradient(90deg, rgba(var(--od-primaria-rgb), 0.75) 0 calc(100% / 7), #0000 0 calc(200% / 7));
      }

      .sec > &.l3 {
        --c: no-repeat linear-gradient(rgba(var(--od-primaria-rgb), 0.75) 0 0, rgba(var(--od-primaria-rgb), 0.75));
      }

      .sec > &.l4 {
        --c: linear-gradient(rgba(var(--od-primaria-rgb), 0.75) 0 0, rgba(var(--od-primaria-rgb), 0.75));
        --m: radial-gradient(farthest-side, rgba(var(--od-primaria-rgb), 0.75) 92%, #0000);
      }

      .sec > &.l5 {
        color: rgba(var(--od-primaria-rgb), 0.75);
      }

      .ter > &.l1, .ter > &.l3:before {
        background: rgba(var(--od-primaria-rgb), 0.5);
      }

      .ter > &.l2 {
        --c: no-repeat repeating-linear-gradient(90deg, rgba(var(--od-primaria-rgb), 0.5) 0 calc(100% / 7), #0000 0 calc(200% / 7));
      }

      .ter > &.l3 {
        --c: no-repeat linear-gradient(rgba(var(--od-primaria-rgb), 0.5) 0 0, rgba(var(--od-primaria-rgb), 0.5));
      }

      .ter > &.l4 {
        --c: linear-gradient(rgba(var(--od-primaria-rgb), 0.5) 0 0, rgba(var(--od-primaria-rgb), 0.5));
        --m: radial-gradient(farthest-side, rgba(var(--od-primaria-rgb), 0.5) 92%, #0000);
      }

      .ter > &.l5 {
        color: rgba(var(--od-primaria-rgb), 0.5);
      }
    }
  }

  @media (max-width: 768px) {
    .eu {
      width: 50vw;
      height: 100vw;
      background-size: contain;
      background-position: center;
      margin: 0 auto;

      img {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -55%);
        width: 100%;
      }

      .dec {
        &.l1 {
          top: 26px;
          left: -62px;
        }

        &.l2 {
          top: 43px;
          right: -42px;
        }

        &.l3 {
          left: -35px;
        }

        &.l4 {
          right: 44px;
        }

        &.l5 {
          right: -75px;
        }
      }
    }
  }

  @keyframes l1 {
    33% {
      border-radius: 0;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
    }
    66% {
      border-radius: 0;
      clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%)
    }
  }

  @keyframes l26 {
    0%,
    5% {
      background-position: 0 calc(0 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(3 * 100% / 3)
    }
    20% {
      background-position: 50% calc(0 * 100% / 3), 0 calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(3 * 100% / 3)
    }
    40% {
      background-position: 100% calc(0 * 100% / 3), 50% calc(1 * 100% / 3), 0 calc(2 * 100% / 3), 0 calc(3 * 100% / 3)
    }
    60% {
      background-position: 100% calc(0 * 100% / 3), 100% calc(1 * 100% / 3), 50% calc(2 * 100% / 3), 0 calc(3 * 100% / 3)
    }
    80% {
      background-position: 100% calc(0 * 100% / 3), 100% calc(1 * 100% / 3), 100% calc(2 * 100% / 3), 50% calc(3 * 100% / 3)
    }
    95%,
    100% {
      background-position: 100% calc(0 * 100% / 3), 100% calc(1 * 100% / 3), 100% calc(2 * 100% / 3), 100% calc(3 * 100% / 3)
    }
  }

  @keyframes l7-0 {
    16.67% {
      background-size: 8px 30%, 8px 30%, 8px 50%, 8px 50%, 8px 50%, 8px 50%
    }
    33.33% {
      background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%
    }
    50% {
      background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 30%
    }
    66.67% {
      background-size: 8px 50%, 8px 50%, 8px 30%, 8px 30%, 8px 30%, 8px 30%
    }
    83.33% {
      background-size: 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 30%, 8px 30%
    }
  }

  @keyframes l7-1 {
    20% {
      left: 0
    }
    40% {
      left: calc(50% - 4px)
    }
    60% {
      left: calc(100% - 8px)
    }
    80%,
    100% {
      left: 100%
    }
  }

  @keyframes l18-1 {
    30%,
    70% {
      background-position: center,
      left 50% top calc(50% - 8px),
      left 50% bottom calc(50% - 8px),
      top 50% left calc(50% - 8px),
      top 50% right calc(50% - 8px)
    }
  }

  @keyframes l18-2 {
    0%, 40% {
      transform: rotate(0)
    }
    60%, 100% {
      transform: rotate(90deg)
    }
  }

  @keyframes l18 {
    33% {
      inset: -10px;
      transform: rotate(0deg)
    }
    66% {
      inset: -10px;
      transform: rotate(90deg)
    }
    100% {
      inset: 0;
      transform: rotate(90deg)
    }
  }
</style>
<script setup lang="ts">
</script>
