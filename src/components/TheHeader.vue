<script setup>
defineProps({
  message: String
})

// const props = defineProps({
//   messge: String
// })
</script>

<template>
  <header class="mb-8 mt-5 flex items-end justify-between gap-10 bg-white">
    <h1 class="foont-bold text-3xl">Каталог</h1>
    <!-- {{ message }} -->
    <!-- <img alt="Vue logo" class="h-[50px]" src="@/assets/Logo.svg" /> -->
    <!-- <h1>{{ props.messge }}</h1> -->

    <nav class="flex gap-3">
      <RouterLink class="hover" to="/">Главная</RouterLink>
      <RouterLink class="hover" to="/about">О нас</RouterLink>
      <RouterLink class="hover" to="/contacts">Контакты</RouterLink>
      <RouterLink class="hover" to="/feedback">Обратная связь</RouterLink>
    </nav>
  </header>
</template>

<style></style>
