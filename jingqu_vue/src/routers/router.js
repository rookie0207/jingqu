// router.js
import { createRouter, createWebHistory } from "vue-router";
import YeMeng1 from '@/components/YeMeng1'
import YeMeng2 from '@/components/YeMeng2'
import YeMeng3 from '@/components/YeMeng3'
import YeMeng4 from '@/components/YeMeng4'
import YeMeng5 from '@/components/YeMeng5'
import YeMeng31 from '@/components/YeMeng31'
import YeMeng32 from '@/components/YeMeng32'
import YeMeng33 from '@/components/YeMeng33'
import YeMeng51 from '@/components/YeMeng51'
import YeMeng52 from '@/components/YeMeng52'
import YeMeng53 from '@/components/YeMeng53'
// import DingbuNAV from "@/components/DingBuNAV";
import YeMeng54 from '@/components/YeMeng54'
import YeMeng55 from '@/components/YeMeng55'
import YeMeng56 from '@/components/YeMeng56'
import YeMeng57 from '@/components/YeMeng57'

import YeMeng6 from '@/components/YeMeng6'
import YeMeng2puls from '@/components/YeMeng2puls'
import PersonalDate from '@/components/PersonalDate'
const routes = [
    {
        path:"/",
        redirect:"/yemeng1",
     },
    // {
    //     path: '/',
    //     redirect: '/default-component', // 设置默认路由
    // },
    // {
    //     path: '/dingbunav',
    //     name:'dingbuNAV',
    //     component: DingBuNAV,
    // },

    {
        path: "/yemeng1",
        name: "YeMeng1",
        component: YeMeng1,
    },
    {
        path: "/yemeng2",
        name: "YeMeng2",
        component: YeMeng2
    },
    {
        path: "/yemeng3",
        name: "YeMeng3",
        component: YeMeng3,
    },
    {
        path: "/yemeng4",
        name: "YeMeng4",
        component: YeMeng4,
    },
    {
        path: "/yemeng5",
        name: "YeMeng5",
        component: YeMeng5,
    },
    {
        path: '/yemeng31',
        name: 'YeMeng31',
        component: YeMeng31,
    },
    {
        path: '/yemeng32',
        name: 'YeMeng32',
        component: YeMeng32,
    },
    {
        path: '/yemeng33',
        name: 'YeMeng33',
        component: YeMeng33,
    },
    {
        path: '/yemeng51',
        name: 'YeMeng51',
        component: YeMeng51,
    },
    {
        path:'/yemeng6',
        name: 'YeMeng6',
        component: YeMeng6,
    },
    {
        path: '/yemeng2puls',
        name: 'YeMeng2puls',
        component: YeMeng2puls,
    },
    {
        path: '/yemeng52',
        name: 'YeMeng52',
        component: YeMeng52,
    },
    {
        path: '/yemeng53',
        name: 'YeMeng53',
        component: YeMeng53,
    },
    {
        path: '/yemeng55',
        name: 'YeMeng55',
        component: YeMeng55,
    },
    {
        path: '/yemeng56',
        name: 'YeMeng56',
        component: YeMeng56,
    },
    {
        path: '/personaldate',
        name: 'PersonalDate',
        component: PersonalDate,
    },
    {
        path: '/yemeng54',
        name: 'YeMeng54',
        component: YeMeng54,
    },
    {
        path: '/yemeng57',
        name: 'YeMeng57',
        component: YeMeng57,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
