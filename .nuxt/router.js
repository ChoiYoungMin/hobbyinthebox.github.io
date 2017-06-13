'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _b590ea44 = () => import('/Users/choi/hobbyinthebox/pages/Header.vue' /* webpackChunkName: "pages/Header" */)

const _f7037ac0 = () => import('/Users/choi/hobbyinthebox/pages/App.vue' /* webpackChunkName: "pages/App" */)

const _3ae45d3d = () => import('/Users/choi/hobbyinthebox/pages/Ui/Main/Content.vue' /* webpackChunkName: "pages/Ui-Main-Content" */)

const _7f6b5d51 = () => import('/Users/choi/hobbyinthebox/pages/Ui/Main/About.vue' /* webpackChunkName: "pages/Ui-Main-About" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/Header",
			component: _b590ea44,
			name: "Header"
		},
		{
			path: "/App",
			component: _f7037ac0,
			name: "App"
		},
		{
			path: "/Ui/Main/Content",
			component: _3ae45d3d,
			name: "Ui-Main-Content"
		},
		{
			path: "/Ui/Main/About",
			component: _7f6b5d51,
			name: "Ui-Main-About"
		}
    ]
  })
}
