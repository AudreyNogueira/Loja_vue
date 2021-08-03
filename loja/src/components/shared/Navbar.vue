<template>
    <nav>
    <ul>
        <li class="menu-item" v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">
            {{rota}}.titulo
            </router-link>
        </li>
    </ul>   
    </nav>
</template>

<script>
export default {
  props: ['rotas']
}

</script>
<style>
nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item{
    color: rgb(15, 13, 10);
    font-size: 18px;
    padding: 10px 25px;
    position: relative;
    text-align:center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    
}
nav .menu-item.active,
 nav .menu-item:hover{
    background-color:blueviolet;
    border-color:blue;
}
</style>