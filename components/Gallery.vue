<template>
  <section class="py-20 bg-gray-100 md:py-28">
    <div
      class="container flex flex-col-reverse h-full mx-auto lg:items-center lg:flex-row gap-x-14 gap-y-10"
    >
      <div class="md:w-[300px]">
        <h2 class="text-2xl font-bold text-gray-400 md:text-3xl">معرض الصور</h2>
        <p class="mt-4 leading-8 text-gray-200">
          جانب من اخبارنا ويومياتنا في الشركه هنا تكون الاخبار الخاصه بمناسبات
          الشركه المختلفه
        </p>
        <div class="flex items-center gap-x-[7px] mt-8">
          <button
            :class="
              cn(
                'bg-blue-600 rounded-full flex items-center justify-center size-[30px]',
                currentIndex === 0 ? 'opacity-50' : '',
              )
            "
            :disabled="currentIndex === 0"
            @click="prevImage"
          >
            <svg-icon
              name="arrowleft"
              class="w-3 h-3 text-white transform rotate-180"
            />
          </button>
          <div class="flex items-center justify-center gap-x-1">
            <span
              v-for="(image, index) in images"
              :key="index"
              class="flex items-center justify-center border-2 border-blue-600 rounded-full cursor-pointer"
              :class="[currentIndex === index ? 'size-3' : 'size-2']"
              @click="setImage(index)"
            >
              <span
                class="size-[6px] rounded-full cursor-pointer"
                :class="[currentIndex === index ? 'bg-blue-600' : 'bg-white']"
              ></span>
            </span>
          </div>
          <button
            :class="
              cn(
                'bg-blue-600 rounded-full flex items-center justify-center size-[30px]',
                currentIndex === images.length - 1 ? 'opacity-50' : '',
              )
            "
            :disabled="currentIndex === images.length - 1"
            @click="nextImage"
          >
            <svg-icon name="arrowleft" class="w-3 h-3 text-white" />
          </button>
        </div>
      </div>

      <div
        class="lg:w-[604px] h-80 md:h-[465px] overflow-hidden grid grid-cols-2 gap-6"
      >
        <div
          class="flex flex-col h-full col-span-1 gap-6 overflow-hidden rounded-xl"
        >
          <div class="w-full overflow-hidden basis-1/2 aspect-3/4 rounded-xl">
            <transition name="fade" mode="out-in">
              <img
                :key="currentImages[0].src"
                :src="currentImages[0].src"
                :alt="currentImages[0].alt"
                class="object-cover w-full h-full"
              />
            </transition>
          </div>
          <div class="w-full overflow-hidden basis-1/2 aspect-3/4 rounded-xl">
            <transition name="fade" mode="out-in">
              <img
                :key="currentImages[1].src"
                :src="currentImages[1].src"
                :alt="currentImages[1].alt"
                class="object-cover w-full h-full"
              />
            </transition>
          </div>
        </div>

        <div class="h-full col-span-1 overflow-hidden rounded-xl">
          <transition name="fade" mode="out-in">
            <img
              :key="currentImages[2].src"
              :src="currentImages[2].src"
              :alt="currentImages[2].alt"
              class="object-cover aspect-3/4 w-full h-full"
            />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 1",
  },
  {
    src: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 2",
  },
  {
    src: "https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 3",
  },
  {
    src: "https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 4",
  },
  {
    src: "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 5",
  },
  {
    src: "https://images.pexels.com/photos/1006121/pexels-photo-1006121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 6",
  },
];

const currentIndex = ref(0);

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const setImage = (index: number) => {
  currentIndex.value = index;
};

const currentImages = computed(() => {
  return [
    images[currentIndex.value],
    images[(currentIndex.value + 1) % images.length],
    images[(currentIndex.value + 2) % images.length],
  ];
});
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
