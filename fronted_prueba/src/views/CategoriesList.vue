<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Lista de Categorías</h2>

    <!-- Botón para ir al formulario de nueva categoría -->

    <ul v-if="categories.length > 0" class="space-y-2">
      <li
        v-for="c in categories"
        :key="c.id"
        class="border-b border-gray-300 pb-2"
      >
        <strong>{{ c.name }}</strong>
        <p class="text-gray-600">{{ c.description }}</p>
      </li>
    </ul>

    <p v-else class="text-gray-500 italic">No hay categorías registradas.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const categories = ref([]);

async function listCategories() {
  try {
    const res = await api.get("/categoria"); // 👈 tu endpoint Laravel
    categories.value = res.data.data;
  } catch (error) {
    console.error("Error al cargar categorías:", error);
  }
}

onMounted(listCategories);
</script>
