<template>
  <div>
    <!-- <h1>Aqui exibe todos os produtos anteriormente cadastrados.</h1>     -->
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre por parte do título"
    />
  </div>
</template>
<script>
// import Painel from '../shared/painel/Painel.vue';
</script>
<style>
input {
  border-radius: 23px;
  padding: 14px 40px;
}
</style>
