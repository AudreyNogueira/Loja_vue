<template>
  <div>
    <nav>
      <div class="menu-item" v-for="rota in rotas" :key="rota">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.titulo }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items:start ; */
  /* background-color: rgb(6, 24, 18); */
  /* margin-top: -59px; */
  margin-top: 0px;
}

nav .menu-item {
  color: rgb(15, 13, 10);
  font-size: 18px;
  padding: 0px 25px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  /* background-color: rgb(6, 24, 18); */
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: blueviolet;
  border-color: blue;
}
</style>