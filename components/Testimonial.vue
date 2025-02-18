<template>
  <div :class="cn('mt-20 mb-10 md:mt-28 md:mb-20 relative', $attrs.class)">
    <ui-title title="آراء عملاؤنا" class="mx-auto w-max" />
    <svg-icon name="quot" class="size-4 fill-blue-600 absolute -translate-x-1/2   lg:top-28   top-16 z-[2]  left-1/2  w-16 h-11" />
    <div class="mt-14">
      <swiper-wrapper
        class="container feedbackSlider"
        :items="[1, 2, 3, 4]"
        :options="swiperOptions"
        arrows
      >
        <template #default="">
          <client-card />
        </template>
      </swiper-wrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils";

const swiperOptions = {
  // autoPlay: true,
  loop: true,

  breakpoints: {
    1081: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
  },
  pagination: true,
};
</script>

<style lang="postcss">
.feedbackSlider {
  .swiper-wrapper {
    @screen lg {
      @apply py-20;
    }
  }
  .swiper-slide {
    @screen lg {
      @apply transition-all duration-300 blur;
      &-active {
        @apply blur-none scale-[1.3] shadow-xl shadow-gray-400/5;
      }
    }
  }
}
</style>
