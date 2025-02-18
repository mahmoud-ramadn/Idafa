<template>
  <div :class="cn('partners container', $attrs.class)">
    <swiper-wrapper
      class="mx-auto mt-10 lg:w-4/5"
      :items="items"
      :options="swiperOptions"
    >
      <template #default="{item}">
        <img
          :src="item?.image"
          :alt="item.id"
          class="object-contain w-20 aspect-square"
          loading="lazy"
        />
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils";

const items = [
  {
    id: 1,
    image: new URL("@/assets/images/partners/1.webp", import.meta.url).href,
  },
  {
    id: 2,
    image: new URL("@/assets/images/partners/2.webp", import.meta.url).href,
  },
  {
    id: 3,
    image: new URL("@/assets/images/partners/3.webp", import.meta.url).href,
  },
  {
    id: 4,
    image: new URL("@/assets/images/partners/4.webp", import.meta.url).href,
  },
  {
    id: 5,
    image: new URL("@/assets/images/partners/5.webp", import.meta.url).href,
  },
];

const swiperOptions = {
  autoPlay: true,
  loop: true,
  breakpoints: {
    1081: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
  },
};
</script>

<style lang="postcss" scoped>
.partners {
  .swiper-slide {
    img {
      @apply grayscale;
    }
  }

  .swiper-slide-active {
    img {
      @apply grayscale-0;
    }
  }
}
</style>
