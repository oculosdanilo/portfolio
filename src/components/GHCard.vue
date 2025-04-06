<script setup lang="ts">
defineProps(['titulo', 'desc', 'infoColor', 'infoDesc', 'stars'])
</script>

<template>
  <div class="card">
    <a class="titulo" :href="'https://github.com/' + titulo" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="currentColor"
        class="bi bi-journal-code"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
        />
        <path
          d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"
        />
        <path
          d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
        />
      </svg>
      <h3>{{ titulo }}</h3>
    </a>
    <p class="desc">{{ desc }}</p>
    <div class="info">
      <div class="tech">
        <div class="color" :style="'background-color: ' + infoColor" />
        <p>{{ infoDesc }}</p>
      </div>
      <div class="stars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <p>{{ stars }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgba(var(--od-body-color-rgb), 0.1);
  width: 440px;
  height: 118px;
  border-radius: 1em;
  padding: 1em;
  border: var(--od-primaria) 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .titulo {
    display: flex;

    h3 {
      margin-left: 0.5em;
      font-size: 1.5em;
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .info {
    display: flex;
    align-items: center;

    .tech {
      .color {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin-right: 0.25em;
        display: inline-block;
        vertical-align: baseline;
      }

      p {
        display: inline;
        font-size: 16px;
      }
    }

    .stars {
      margin-left: 1em;

      svg {
        margin-right: 0.25em;
        display: inline;
        vertical-align: baseline;
      }

      p {
        display: inline;
        font-size: 16px;
      }
    }
  }
}
</style>
