
<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form>
      <div class="controle">
        <label for="titulo">Nome</label>
        <input id="titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="valor">Valor</label>
        <input id="valor" autocomplete="off">
        <!-- <imagem-responsiva/> -->
      </div>

      <div class="controle">
        <label for="quantidade">Quantidade</label>
        <input id="quantidade" autocomplete="off">
        <!-- <imagem-responsiva/> -->
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao class="botao" rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

export default {

  components: {

  }
}

</script>
<style scoped>

.controle-val label+input, .controle-quant label+input{

      display: flex;
      align-items: center;
      justify-content: space-between;

}

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;
    padding: 0px 120px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 15px;

  }

  .centralizado {
    text-align: center;
  }
  .botao{
     background-color: blueviolet;
  }

</style>