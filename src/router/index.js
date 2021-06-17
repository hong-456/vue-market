import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=>import("@/views/Home/Home");
const Cart = ()=>import("@/views/Cart/Cart");
const Find = ()=>import("@/views/Find/find");
const Detail = ()=>import("@/views/Detail/detail")
const My = ()=>import("@/views/My/my")
const routes = [
    {
      path:"/",
      redirect:"/home",
      
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
        keepAlive: true
      },
    },
    {
      path: '/qqq',
      name: 'qqq',
      component: My,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
      
    },
    {
      path: '/find',
      name: 'find',
      component: Find
      
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail,
      meta: {
        title: 'Home',
        keepAlive: false
      }
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router