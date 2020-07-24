import Vue from 'vue';
import VueRouter from 'vue-router';
    
import Welcome from '@/components/Welcome.vue';  // asumiendo que hicimos este componente
import Login from '@/components/Login.vue';
import Lol from '@/components/Lol.vue';
import ListRestoran from '@/components/ListRestoran.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router
    
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Welcome
        },
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/lol/:name', 
            component: Lol
        },
        {
            path: '/sushiPanda/:food', 
            component: ListRestoran
        },
        {
            path: '*', 
            component: NotFound
        },
    ]
})