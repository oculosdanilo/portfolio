<script setup lang="ts">
  import Flickity from 'flickity'

  const carroseu = new Flickity('.main-carousel', {
    contain: true
  })
</script>

<template>
  <div class='espaco'>
    <h1>Meus projetos</h1>
    <p>Meus melhores projetos reproduzíveis até agora:</p>
    <div class="main-carousel">
      <div class="carousel-cell">
        <div class="imagem"></div>
        <div class="conteudo">
          <h2></h2>
          <p></p>
        </div>
        <div class="botao">ACESSAR</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .espaco {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 3em;
  }
</style>