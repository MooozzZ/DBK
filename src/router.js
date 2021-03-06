import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import store from './vuex/store'

Vue.use(Router) 
 const  router=  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect:'/',
    },
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: () => import('@/components/Movie.vue')
    },
    {                                               
      path: '/Issue',
      name: 'Issue',
      component: () => import('@/components/Issue.vue'),
      meta:{
        requireAuth : true,
      }
    },
    {
      path: '/Myinfo',
      name: 'Myinfo',
      component: () => import('@/views/Myinfo.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import( '@/components/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import( '@/components/Register.vue')
    },
    {
      path: '/ContentInfo/:id',
      name: 'ContentInfo',
      component: () => import( '@/components/ContentInfo.vue')
    },
    {
      path: '/Detail',
      name: '/Detail',
      component: () => import( '@/components/Detail')
    },
    {
      path: '/Nav',
      name: '/Nav',
      component: () => import( '@/components/Nav')
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
      let user   =  store.state.user;
      console.log(user);
      
    if (user) {  // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
 export default  router;