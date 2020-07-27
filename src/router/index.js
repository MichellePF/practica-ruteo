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
            component: Welcome
        },
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/:lol', 
            component: Lol,
            children: [
                {
                    path: '',
                    component: About
                },
                {
                    path: 'reviews',
                    component: Reviews
                },
                {
                    path: 'images',
                    component: Images
                }
            ]
        },
        {
            path: '/lol/:champ', 
            component: ListChamp
        },
        {
            path: '*', 
            component: NotFound
        },
    ]
})