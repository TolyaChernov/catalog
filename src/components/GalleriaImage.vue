<template>
  <div class="card flex justify-center">
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="7"
      containerStyle="max-width: 850px"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.url"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.url" :alt="slotProps.item.alt" style="display: block" />
      </template>
    </Galleria>

    <div v-if="images" class="flex w-full flex-wrap" style="max-width: 400px">
      <div v-for="(image, index) of images" :key="index" class="w-4/12 p-3">
        <img :src="image.url" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { PhotoService } from '@/service/PhotoService'

// onMounted(() => {
//   PhotoService.getImages().then((data) => (images.value = data))
// })

const images = ref([
  { url: 'src/assets/img/DressingPage/1.jpg', alt: 'Description for Image 1' },
  { url: 'src/assets/img/DressingPage/2.jpg', alt: 'Description for Image 2' },
  { url: 'src/assets/img/DressingPage/3.jpg', alt: 'Description for Image 3' },
  { url: 'src/assets/img/DressingPage/3.jpg', alt: 'Description for Image 3' },
  { url: 'src/assets/img/DressingPage/3.jpg', alt: 'Description for Image 3' },
  { url: 'src/assets/img/DressingPage/3.jpg', alt: 'Description for Image 3' }
])

const activeIndex = ref(0)
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
])
const displayCustom = ref(false)

const imageClick = (index) => {
  activeIndex.value = index
  displayCustom.value = true
}
</script>
