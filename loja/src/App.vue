<template>
  <div id="app">
    <!-- <router-view :to></router-view> -->
    <navbar :rotas="routes"/>
    <router-view></router-view>
  </div>
</template>

<script>
  import {routes} from '/routes';
  import Navbar from './component/shared/Navbar.vue';
export default {
  components:{
    'navbar': Navbar
  },
  data(){
    return{
      routes
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
