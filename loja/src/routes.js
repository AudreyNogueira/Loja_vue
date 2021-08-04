import Cadastro from './components/Product/Cadastro.vue';
import Home from './components/Home.vue';
import Pedido from './components/Request/Pedido.vue';
import Produto from './components/Product/Produto.vue';
import CadastroPedido from './components/Request/Cadastro.vue';
// import Cadastro-pedido from './components/Cadastrar-pedido';
// import Footer from './components/shared/Footer.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/pedidos', component: Pedido, titulo: 'Pedido' },
    { path: '/cadastro-pedido', component: Produto, titulo: 'Produto' },
    { path: '/produtos', component: CadastroPedido, titulo: 'Cadastrar meu pedido' },

    // {path: '/footer', component: Footer, titulo: 'Footer'},
    // {path: '/lista-produtos', component:Lista, titulo: 'Lista'},

];