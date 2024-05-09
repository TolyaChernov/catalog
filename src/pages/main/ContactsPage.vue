<template>
  <div>
    <!-- <h1>Контакты</h1> -->
    <div class="gap-8">
      <ContactCard class="mt-5" :contactData="contactBoss" />
      <ContactCard class="mt-5" :contactData="contactBossMarketing" />
      <ContactCard class="mt-5" :contactData="contactMarketing" />
    </div>
  </div>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import { ref } from 'vue'

const contactBoss = ref({
  title: 'Начальник производства',
  name: 'Молютко Татьяна Леонидовна',
  phone: '+375-17-111-11-11'
})

const contactBossMarketing = ref({
  title: 'Начальник отдела маркетинга и сбыта',
  name: 'Ханько максим Александрович',
  phone: '+375-17-111-11-11'
})

const contactMarketing = ref({
  title: 'Ведущий специалист отдела маркетинга и сбыта',
  name: 'Рововая Алла Григорьевна',
  phone: '+375-17-111-11-11'
})
</script>

<style lang="scss" scoped></style>
