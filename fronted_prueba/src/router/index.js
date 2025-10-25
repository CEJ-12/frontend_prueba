import { createRouter, createWebHistory } from 'vue-router'
// import CategoriesList from '../views/CategoriesList.vue'
// import ProductForm from '../views/ProductForm.vue'
// import ProductList from '../views/ProductList.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/categoria/lista',
    //   name: 'categoria.list',
    //   component: TaskList,
    // },
    // {
    //   path: '/poducto/lista',
    //   name: 'product.list',
    //   component: TaskForm,
    // },
    // {
    //   path: '/poducto/form',
    //   name: 'product.form',
    //   component: TaskForm,
    // },

  ],
})

export default router
