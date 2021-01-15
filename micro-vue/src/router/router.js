

import Mine from '../page/mine.vue';
import Home from '../page/home.vue';
import Login from '../page/login.vue';
import Image from '../page/image/image.vue';
import TakePhoto from '../page/takePhoto/takePhoto.vue';
import List from '../page/list/list.vue';
import Position from '../page/position/position.vue';


const routes = [
    { path: '/mine', component: Mine },
    {
        path: '/', component: Home,redirect: 'list',
        children: [
            { path: '/list', component: List },
            { path: '/position', component: Position },
            { path: '/takePhoto', component: TakePhoto },
            { path: '/image', component: Image },
        ]
    },
    { path: '/login', component: Login }
];

export default routes;