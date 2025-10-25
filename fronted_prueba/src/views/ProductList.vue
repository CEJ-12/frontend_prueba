<template>
  <div>
    <h2>Lista de productos</h2>

    <router-link
      to="/productos/crear"
      class="bg-green-600 text-white px-3 py-2 rounded inline-block mb-4 hover:bg-green-700"
    >
      Agregar producto
    </router-link>
    <router-link
      to="/categorias/listar"
      class="bg-green-600 text-white px-3 py-2 rounded inline-block mb-4 hover:bg-green-700"
    >
      lsita de categorias
    </router-link>

    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.name }} - S/. {{ p.price }} - Stock {{ p.stock }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const products = ref([]);

async function listProducts() {
  try {
    const res = await api.get("/producto");
    products.value = res.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(listProducts);
</script>
