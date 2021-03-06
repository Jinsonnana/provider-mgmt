import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

/**
 * note: Submenu only appear when children.length>=1
 * detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
     roles: ['ADMIN','ROOT']     will control the page roles (you can set multiple roles)
     title: 'title'               the name show in submenu and breadcrumb (recommend set)
     icon: 'svg-name'             the icon show in the sidebar,
     noCache: true                if true ,the page will no be cached(default is false)
   }
 */
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/commodity',
    component: Layout,
    redirect: '/commodity/list',
    name: 'Commodity',
    meta: {
      title: '商品',
      icon: 'commodity',
      roles: ['ADMIN', 'ROOT']
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/commodity/create'),
        name: 'CommodityCreate',
        meta: {
          title: '上传商品'
        }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/commodity/edit'),
        name: 'CommodityEdit',
        meta: {
          title: '编辑商品'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/commodity/list'),
        name: 'CommodityList',
        meta: {
          title: '商品库',
          noCache: true
        }
      },
      {
        path: 'sale',
        component: () => import('@/views/commodity/sale'),
        name: 'CommoditySale',
        meta: {
          title: '出售商品',
          noCache: true
        }
      },
      {
        path: 'group',
        component: () => import('@/views/commodity/group'),
        name: 'CommodityGroup',
        meta: {
          title: '店内分组'
        },
        hidden: true
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
