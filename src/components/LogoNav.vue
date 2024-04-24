<script setup lang="ts">

</script>

<template>
  <div class="logo">
    <span class="danilo">Danilo</span>
    <svg viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M25.7568 12.9412L7.88808 0.0102539L5.00745 3.97128L22.8761 16.9023L25.7568 12.9412Z"
              class="armacao" />
        <path d="M3.88179 13.8164L11.8368 2.87771L7.86598 0.00415039L-0.0889893 10.9428L3.88179 13.8164Z"
              class="armacao" />
      </g> <!-- haste -->
      <path
        d="M15.3301 20.8692C15.3301 31.2069 23.7311 39.5872 34.0943 39.5872C44.4574 39.5872 52.8584 31.2069 52.8584 20.8692C52.8584 10.5315 44.4574 2.15112 34.0943 2.15112C23.7311 2.15112 15.3301 10.5315 15.3301 20.8692Z"
        class="armacao" /> <!-- armação -->
      <path
        d="M21.6564 20.8693C21.6564 27.7217 27.225 33.2767 34.0943 33.2767C40.9636 33.2767 46.5322 27.7217 46.5322 20.8693C46.5322 14.0169 40.9636 8.46191 34.0943 8.46191C27.225 8.46191 21.6564 14.0169 21.6564 20.8693Z"
        class="lente" /> <!-- lente -->
    </svg>
  </div>
</template>

<style scoped>
  .logo {
    height: 100%;
    width: max-content;
    display: flex;
    align-items: baseline;
    position: relative;
    
    &:hover > svg {
      --anim-size-duration: .4s;

      height: 60%;
    }

    &:hover > .danilo:not(:has(*:hover)) {
      --anim-opacity-duration: .5s;

      letter-spacing: -0.05em;
      margin-left: 53px;
      opacity: 1;
    }

    svg {
      --anim-size-duration: .5s;

      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      aspect-ratio: 53 / 40;

      transition: var(--anim-size-duration) var(--ease);

      * {
        transition: fill .6s var(--ease);
      }

      .armacao {
        fill: var(--armacao);
      }

      .lente {
        fill: var(--lente);
      }
    }

    .danilo {
      --anim-opacity-duration: .1s;

      margin-left: 0;
      padding: 0;
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: flex-start;
      pointer-events: none;
      color: var(--od-body-color);

      letter-spacing: -0.3em;
      font-size: 6em;
      opacity: 0;

      transition: .5s var(--ease), opacity var(--anim-opacity-duration) var(--ease);
    }
  }
</style>