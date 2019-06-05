import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import story from '@/views/story'
import detail from '@/views/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/story',
      name: 'story',
      component: story
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
		{
			path:"/",
			redirect:"/index"
		}
  ]
})
