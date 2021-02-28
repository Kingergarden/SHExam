import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../components/Movie'
import TVShows from '../components/TVShows'


Vue.use(VueRouter)



export default new VueRouter({
  routes: [
    {
      path: '/movies',
      name: 'Movies',
      component: Movie
    },

    {
      path: '/',
      name: 'Movies',
      component: Movie
    },

    {
      path: '/tvshows',
      name: 'tvshows',
      props: true,
      component: TVShows
    },
  ],
  mode: 'history'

})