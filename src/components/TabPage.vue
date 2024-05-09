<template>
  <div class="card mb-4">
    <TabView class="mt-4">
      <TabPanel header="ШМГ-401">
        <div class="mb-5 mt-6 text-center text-3xl font-bold text-gray-700">
          Шкаф медицинский гардеробный ШМГ-401
        </div>
        <div class="flex justify-center">
          <img src="@/assets/img/DressingPage/1.jpg" alt="image" class="w-4/5" />
        </div>
        <div class="mb-2 mt-4">Технические характеристики:</div>
        <!-- <TableList /> -->

        <table class="table-fixed">
          <thead>
            <tr class="">
              <th class="border py-1 pl-2 pr-2 text-left">Параметр</th>
              <th class="border py-1 pl-2 pr-2 text-left">Значение</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="item in dataTable" :key="item.title">
              <td class="border py-1 pl-2 pr-2">{{ item.title }}</td>
              <td class="border py-1 pl-2 pr-2">{{ item.content }}</td>
            </tr>
          </tbody>
        </table>

        <div class="mb-2 mt-4">Описание изделия:</div>

        <p class="m-0 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </TabPanel>
      <TabPanel header="ШМГ-404">
        <p class="m-0 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import TableList from '@/components/TableList.vue'

const dataTable = ref([
  { title: 'Покрытие', content: 'Порошковое полимерное' },
  { title: 'Цвет', content: 'Согласно RAL' },
  { title: 'Опоры', content: 'Высокие / низкие' },
  { title: 'Крючки', content: 'Да' },
  { title: 'Штанга', content: 'Да' },
  { title: 'Замок', content: 'Да' }
  // {title: 'Покрытие', content: "Порошковое"},
])
</script>

<style></style>
