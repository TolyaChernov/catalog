<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { ProductService } from '@/service/ProductService';

// onMounted(() => {
//     ProductService.getProductsMini().then((data) => (products.value = data));
// });

const products = ref([
  { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
  { code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 32 }
])
</script>

<style></style>
