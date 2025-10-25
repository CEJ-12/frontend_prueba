<template>
    <div>
        <h2> lista de productos</h2>
        <ul>
            <li v-for="p in products" :key="p.id">
                {{ p.name}} - S/. {{ p.price}} - Stock {{ p.stock }}
            </li>
        </ul>
    </div>

</template>

<script setup>
import {ref, onMounted} from "vue";
import api from "../services/api";
import axios from "axios";

const products = ref([]);

async function listProducts() {
    try {
        const res = await api.get("/producto");
        products.value = res.data.data;
    } catch (error) 
        {
        
    }
    
}
onMounted(listProducts);
</script>


