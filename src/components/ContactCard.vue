<template>
  <div>
    <Card class="mt-5 bg-slate-100">
      <template #title class="whitespace-normal">{{ contactData.title }}</template>
      <template #content>
        <p class="m-0">
          {{ contactData.name }}
        </p>
        <p>{{ contactData.phone }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
defineProps({
  contactData: Object
})
// const props = defineProps({
//   contactData: Object
// })

// const { contactData: contactDataProp } = props
</script>

<style lang="scss" scoped></style>
