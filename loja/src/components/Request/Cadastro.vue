<template>
  <div>
    <h1 class="centralizado">Cadastrar pedidos</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="nome">Nome</label>
        <input
          name="nome"
          v-validate
          data-vv-rules="required|min:3|max:30"
          id="nome"
          autocomplete="off"
          @input="cadastro.nome = $event.target.value"
        />
        <span class="erro" v-show="errors.has('nome')"
          >*{{ errors.first('nome')}}</span
        >
      </div>

      <div class="controle">
        <label for="cpf">cpf/cnpj</label>
        <input
          type="number"
          name="cpf"
          v-validate
          data-vv-rules="required|min:11|max:11"
          id="cpf"
          autocomplete="off"
          @input="cadastro.cpf = $event.target.value"
        />
        <span class="erro" v-show="errors.has('cpf')">* {{ errors.first('cpf')}}</span>
        <!-- <imagem-responsiva/> -->
      </div>

      <div class="controle">
        <label for="lista">Lista de pedidos</label>
        <input
          name="lista"
          v-validate
          data-vv-rules="required"
          id="lista"
          autocomplete="off"
          @input="cadastro.lista = $event.target.value"
        />
        <span class="erro" v-show="errors.has('lista')"
          >*{{ errors.first('lista')}}</span
        >
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
    // this.foto ={
    //   titulo: '',
    //   valor: '',
    //   quantidade: '',
    // }
    // }
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
label {
  color: blueviolet;
}
.centralizado {
  text-align: center;
}
.botao {
  background-color: blueviolet;
}
.erro {
  color: red;
}
</style>