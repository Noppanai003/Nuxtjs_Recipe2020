import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ce5f41f = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _59356b87 = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages_recipes_index" */))
const _c4a8041a = () => interopDefault(import('..\\pages\\recipes\\_id\\index.vue' /* webpackChunkName: "pages_recipes__id_index" */))
const _55c1e1c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2ce5f41f,
    name: "about"
  }, {
    path: "/recipes",
    component: _59356b87,
    name: "recipes"
  }, {
    path: "/recipes/:id",
    component: _c4a8041a,
    name: "recipes-id"
  }, {
    path: "/",
    component: _55c1e1c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
