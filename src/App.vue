<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheSideBar from './components/TheSideBar.vue'
import { ref } from 'vue'

const messge = ref('Hello Vue 3 + Vite')
</script>

<template>
  <div class="mx-auto flex min-h-screen w-[1280px] flex-col text-xl">
    <TheHeader class="bg-slate-200" :message="messge" />
    <div class="flex">
      <TheSideBar class="w-3/12 pr-4" />
      <RouterView class="w-9/12" />
    </div>
  </div>
</template>

<style></style>
