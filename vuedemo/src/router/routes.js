// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'

import index1 from '../page/index1.vue'
import content1 from '../page/content1.vue'

//动态路由配置
import user from '../page/user.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
  	path:'/user/:id',
  	component:user,
  	children:[
  		{
  			path:'index',
  			component:index
  		},
  		{
  			path:'content',
  			component:content
  		}

  	]
  }
]