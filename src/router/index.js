import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/Main'

import Book from '@/views/Book/Book'
import Chapter from '@/views/Chapter/Chapter'
import Review from '@/views/Review/Review'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/book',
    name: 'BookList',
    component: () => import(/* webpackChunkName: "BookList" */ '@/views/Book/BookList')
  },
  {
    path: '/book/:pk',
    name: 'Book',
    component: Book
  },
  {
    path: '/chapter',
    name: 'ChapterList',
    component: () => import(/* webpackChunkName: "ChapterList" */ '@/views/Chapter/ChapterList')
  },
  {
    path: '/chapter/:index',
    name: 'Chapter',
    component: Chapter
  },
  {
    path: '/review',
    name: 'ReviewList',
    component: () => import(/* webpackChunkName: "ReviewList" */ '@/views/Review/ReviewList')
  },
  {
    path: '/review/:pk',
    name: 'Review',
    component: Review
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
