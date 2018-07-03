/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Callback from '@/components/Callback'
import Category from '@/components/Category'
import CategoryCreate from '@/components/CategoryCreate'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import CreateNews from '@/components/CreateNews'
import NotFound from '@/components/NotFound'
import { requireAuth } from '../utils/auth';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/categories',
      name: 'Category',
      component: Category
    },
    {
      path: '/categories/create',
      name: 'CategoryCreate',
      beforeEnter: requireAuth,
      component: CategoryCreate
    },
    {
      path: '/news/create',
      name: 'CreateNews',
      beforeEnter: requireAuth,
      component: CreateNews
    },
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/news/:id',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
