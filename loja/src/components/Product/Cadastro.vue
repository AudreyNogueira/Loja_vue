<template>
  <div>
    <h1 class="centralizado">Cadastro de produtos</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">Nome</label>
        <input
          name="titulo"
          v-validate
          data-vv-rules="required|min:3|max:30"
          id="titulo"
          autocomplete="off"
          @input="cadastro.titulo = $event.target.value"
        />
        <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo')}}</span>
      </div>

      <div class="controle">
        <label for="valor">Valor</label>
        <input
          type="number"
          name="valor"
          v-validate
          data-vv-rules="required|min:3|max:10"
          id="valor"
          autocomplete="off"
          @input="cadastro.valor = $event.target.value"
        />
        <span class="erro" v-show="errors.has('valor')">{{ errors.first('valor')}}</span>
        <!-- <imagem-responsiva/> -->
      </div>

      <div class="controle">
        <label for="quantidade">Quantidade</label>
        <input
        type="number"
          name="quantidade"
          v-validate
          data-vv-rules="required|max:10"
          id="quantidade"
          autocomplete="off"
          @input="cadastro.quantidade = $event.target.value"
        />
        <span class="erro" v-show="errors.has('quantidade')">{{ errors.first('quantidade')}}</span>
        <!-- :value="cadastro.quantidade" -->
      </div>
      <button
        style="background-color: #42b893; border-radius: 12px; color: white"
      >
        Pronto
      </button>
      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link to="/"
          ><meu-botao class="botao" rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {
    //  'meu-botao':Botao
    data() {
      return {
        cadastro: {
          titulo: "",
          valor: "",
          quantidade: "",
        },
      };
    },
  },
  methods: {
    grava() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.service.cadastra(this.cadastro).then(
            () => {
              if (this.id) this.$router.push({ name: "home" });
              this.cadastro = new Cadastro();
            },
            (err) => console.log(err)
          );
        }
      });
    },

    //   console.log(this.cadastro);
    //   this.foto = {
    //     titulo: "",
    //     valor: "",
    //     quantidade: "",
    //   };
    // },
  },
};
</script>
<style scoped>
/* .controle-val label+input, .controle-quant label+input{

      display: flex;
      align-items: center;
      justify-content: space-between;

} */

.centralizado {
  text-align: center;
  margin-top: 23px;
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

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 15px;
  margin-top: 10px;
}

.centralizado {
  text-align: center;
}
.botao {
  background-color: blueviolet;
}
label {
  color: blueviolet;
}
.erro{
  color: red;
}
</style>