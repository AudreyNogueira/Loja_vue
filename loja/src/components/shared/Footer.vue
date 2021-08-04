<template>
  <!-- <div v-for="rota in rotas" :key="rota">
            <router-link :to="rota.path ? rota.path : '/'">
            {{rota.titulo}}
            </router-link>
        </div> -->
  <footer>
    <nav>
      <h1 class="copyright">© Todos os direitos reservados a Tray.</h1>
    </nav>
  </footer>
</template>

<script>
export default {
  //   props: {
  //       rotas:{
  //           type: Array,
  //           required: true
  //       }
  //   }
  // }
  //  export default {
  name: "footer",
};
</script>
<style>
.copyright {
  background-color: rgb(15, 13, 10);
  color: blueviolet;
  text-align: center;
  /* font-weight: bolder; */
  padding: 23px;
  margin: 0;
  width: 100%;
  bottom: 0;
  height: 50px;
  font-size: 12px;
}
</style>