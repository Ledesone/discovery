import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _44e4cbb7 = () => interopDefault(import('../pages/20/index.vue' /* webpackChunkName: "pages/20/index" */))
const _3c5d9433 = () => interopDefault(import('../pages/6/index.vue' /* webpackChunkName: "pages/6/index" */))
const _6626f9b5 = () => interopDefault(import('../pages/8/index.vue' /* webpackChunkName: "pages/8/index" */))
const _15dd5ea6 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _d0d2b3d0 = () => interopDefault(import('../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */))
const _39b8d4dc = () => interopDefault(import('../pages/nisho/index.vue' /* webpackChunkName: "pages/nisho/index" */))
const _1fe1cc19 = () => interopDefault(import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */))
const _e04075ba = () => interopDefault(import('../pages/sample/index.vue' /* webpackChunkName: "pages/sample/index" */))
const _07b72a12 = () => interopDefault(import('../pages/top/index.vue' /* webpackChunkName: "pages/top/index" */))
const _251b27aa = () => interopDefault(import('../pages/yuyo/index.vue' /* webpackChunkName: "pages/yuyo/index" */))
const _6b6acb4c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/20",
      component: _44e4cbb7,
      name: "20"
    }, {
      path: "/6",
      component: _3c5d9433,
      name: "6"
    }, {
      path: "/8",
      component: _6626f9b5,
      name: "8"
    }, {
      path: "/login",
      component: _15dd5ea6,
      name: "login"
    }, {
      path: "/menu",
      component: _d0d2b3d0,
      name: "menu"
    }, {
      path: "/nisho",
      component: _39b8d4dc,
      name: "nisho"
    }, {
      path: "/post",
      component: _1fe1cc19,
      name: "post"
    }, {
      path: "/sample",
      component: _e04075ba,
      name: "sample"
    }, {
      path: "/top",
      component: _07b72a12,
      name: "top"
    }, {
      path: "/yuyo",
      component: _251b27aa,
      name: "yuyo"
    }, {
      path: "/",
      component: _6b6acb4c,
      name: "index"
    }],

    fallback: false
  })
}
