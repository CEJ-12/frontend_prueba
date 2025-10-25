<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Agregar Producto</h2>

    <form @submit.prevent="saveProduct" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Nombre:</label>
        <input
          v-model="product.name"
          type="text"
          class="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Descripción:</label>
        <textarea
          v-model="product.description"
          class="border rounded w-full p-2"
          rows="3"
          placeholder="Escribe una breve descripción del producto"
        ></textarea>
      </div>

      <div>
        <label class="block mb-1 font-semibold">Precio:</label>
        <input
          v-model="product.price"
          type="number"
          class="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Stock:</label>
        <input
          v-model="product.stock"
          type="number"
          class="border rounded w-full p-2"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Categoría ID:</label>
        <input
          v-model="product.category_id"
          type="number"
          class="border rounded w-full p-2"
          placeholder="Ejemplo: 1"
        />
      </div>

      <button
        type="submit"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        💾 Guardar
      </button>
    </form>

    <p v-if="message" class="mt-4 text-green-600 font-semibold">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";

const product = ref({
  name: "",
  description: "",
  price: "",
  stock: "",
  category_id: "",
});

const message = ref("");

async function saveProduct() {
  try {
    await api.post("/producto", product.value);
    message.value = "✅ Producto guardado correctamente";

    // Limpia el formulario
    product.value = {
      name: "",
      description: "",
      price: "",
      stock: "",
      category_id: "",
    };
  } catch (err) {
    console.error(err);
    message.value = "❌ Error al guardar el producto";
  }
}
</script>
