import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import identity from '@/components/identity'
import Gheader from '@/components/GlobleHeader'
import Gfooter from '@/components/GlobleFooter'
import queren from '@/components/queren'
import touxiang from '@/components/touxiang'
import tezhong from '@/components/tezhong'
import tijian from '@/components/tijian'
import success from '@/components/success'
import project from '@/components/project' 
import zongye from '@/components/zongye'
import shouji from '@/components/shouji'
Vue.component('gheader',Gheader)
Vue.component('gfooter',Gfooter)

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'wexinapp/',
  routes: [
    {
      path:'/',
      name:'helloword',
      component:HelloWorld
    },
    {
      path:'/identity',
      component:identity
    },
    {
      path:'/queren',
      component:queren
    },
    {
      path:'/touxiang',
      component:touxiang
    },
    {
      path:'/tezhong',
      component:tezhong
    },
    {
      path:'/tijian',
      component:tijian
    },
    {
      path:'/success',
      component:success
    },
    {
      path:'/project',
      component:project
    },
    {
      path:'/zongye',
      component:zongye
    },
    {
      path:'/shouji',
      component:shouji
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
