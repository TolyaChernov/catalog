<template>
  <div class="">
    <div class="card">
      <Accordion :multiple="true" :activeIndex="0">
        <AccordionTab header="Мебель медицинская">
          <RouterLink to="/dressing" class="hover mb-4 block cursor-pointer"
            >Шкафы гардеробные</RouterLink
          >
          <RouterLink to="/material" class="hover mb-4 block cursor-pointer"
            >Шкафы материальные</RouterLink
          >
          <RouterLink to="/inventory" class="hover mb-4 block cursor-pointer"
            >Шкафы интвентарные</RouterLink
          >
          <RouterLink to="/single-pedestal" class="hover mb-4 block cursor-pointer"
            >Столы однотумбовые</RouterLink
          >
          <RouterLink to="/double-pedestal" class="hover mb-4 block cursor-pointer"
            >Столы двутумбовые</RouterLink
          >
          <RouterLink to="/nightstand" class="hover mb-4 block cursor-pointer"
            >Тумбы прикроватные</RouterLink
          >
          <RouterLink to="/shelving" class="hover mb-4 block cursor-pointer"
            >Стеллажи сборные</RouterLink
          >
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
