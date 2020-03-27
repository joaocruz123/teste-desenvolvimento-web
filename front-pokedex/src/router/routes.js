
const routes = [
  {
    path: '/pokedex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/pokemons', component: () => import('pages/lista/Pokemons.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/PrimaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
