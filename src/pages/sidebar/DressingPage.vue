<template>
  <div class="">
    <div class="flex justify-center">
      <span class="mx-auto mb-8 text-4xl font-bold">Шкафы медицинские гардеробные</span>
    </div>
    <TabPage />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabPage from '@/components/TabPage.vue'

const tabs = ref([
  { title: 'Tab 1', content: 'Tab 1 Content' },
  { title: 'Tab 2', content: 'Tab 2 Content' },
  { title: 'Tab 3', content: 'Tab 3 Content' }
])
</script>

<style lang="scss" scoped></style>
