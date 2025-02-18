<template>
  <div :class="cn('pt-6 md:pt-10   pb-32 ', $attrs.class)">
    <ui-title title="أعمالنا المميزة" class="mx-auto w-max" />
    <swiper-wrapper
      class="container mt-10"
      :items="[1, 2, 3, 4]"
      :options="{pagination: true}"
    >
      <template #default="">
        <div
          class="flex flex-col items-center md:flex-row gap-x-10 xl:gap-x-16 gap-y-6"
        >
          <div
            class="relative px-6 bg-[url('@/assets/images/grid.webp')] shrink-0"
          >
            <img
              src="@/assets/images/mobile-image.webp"
              alt="mobile"
              class="object-contain w-full aspect-square"
            />
          </div>

          <div class="">
            <h3 class="text-lg font-bold md:text-xl">
              تطبيق <span class="text-blue-600">رابط ضمين</span>
            </h3>

            <p class="mt-4 leading-7 text-gray-200">
              كان نهجنا هو تقديم الموقع كمنصة تحريرية مرئية مع ميزات ربع سنوية
              بناءً على الأحداث والمناسبات التي ركزت عليها العلامة التجارية.
              سيتم تمييز كل تركيز ربع سنوي بالعلامة الرئيسية والعلامات المخصصة
            </p>
          </div>
        </div>
      </template>
    </swiper-wrapper>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils";
</script>
