import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductForm from '../views/ProductForm.vue'
import CategoryList from '../views/CategoriesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ProductList },
    { path: '/productos/crear', component: ProductForm },
    { path: '/categorias/listar', component: CategoryList },
  ]
})

export default router
