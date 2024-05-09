<template>
  <div class="flex justify-center pt-5">
    <div class="w-[600px] rounded-lg bg-slate-100 p-4 shadow-md">
      <h2 class="mb-6 text-2xl font-bold">Форма обратной связи</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-8">
          <span class="p-float-label">
            <InputText id="name" v-model="formData.name" type="text" class="w-full p-3" />
            <label for="name">Имя</label>
          </span>
        </div>
        <div class="mb-8">
          <span class="p-float-label">
            <InputText id="email" v-model="formData.email" type="email" class="w-full p-3" />
            <label for="email">Email</label>
          </span>
        </div>
        <div class="mb-8">
          <span class="p-float-label">
            <Textarea id="message" v-model="formData.message" rows="5" class="w-full p-3" />
            <label for="message">Сообщение</label>
          </span>
        </div>
        <div class="flex justify-end">
          <Button
            type="submit"
            label="Отправить"
            class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Здесь можно добавить логику для отправки данных формы на сервер
  console.log(formData.value)
}
</script>
