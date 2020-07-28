import Vue from 'vue';
import VueRouter from 'vue-router';
    
import Welcome from '@/components/Welcome.vue';  // asumiendo que hicimos este componente
import Login from '@/components/Login.vue';
import Lol from '@/components/Lol.vue';
import ListChamp from '@/components/ListChamp.vue';
import NotFound from '@/components/NotFound.vue';
import About from '@/components/About.vue';
import Reviews from '@/components/Reviews.vue';
import Images from '@/components/Images.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router
    
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Welcome,
            name: 'home',
            props: true
        },
        {
            path: '/login', 
            component: Login,
            name: 'login',
            props: true
        },
        {
            path: '/:lol',
            component: Lol,
            name: 'lol',
            props: true,
            children: [
                {
                    path: '',
                    component: About,
                    name: 'about',
                    props: true
                },
                {
                    path: 'reviews',
                    component: Reviews,
                    name: 'reviews',
                    props: true
                },
                {
                    path: 'images',
                    component: Images,
                    name: 'images',
                    props: true
                }
            ]
        },
        {
            path: '/lol/:champ', 
            component: ListChamp,
            name: 'champ',
            props: true
        },
        {
            path: '*', 
            component: NotFound,
        },
    ]
})