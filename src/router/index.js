import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=>import("@/views/Home/Home");
const My = ()=>import("@/views/My/my");
const Chat = ()=>import("@/views/Chat/chat");
const Find = ()=>import("@/views/Find/find");


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
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        title: 'Home',
        keepAlive: true
      },
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router