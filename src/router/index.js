import Vue from 'vue'
import Router from 'vue-router'
import BooksList from '@/components/BooksList'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BooksList',
      component: BooksList,
      children: [

      ]
    },
    {
      path: 'book/:id',
      name: 'Book',
      component: Book,
      props: true
    }
  ]
})
