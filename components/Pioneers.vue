<!-- eslint-disable vue/html-indent -->
<template>
  <section class="relative px-5 overflow-hidden">
    <div
      class="flex flex-wrap items-center justify-center w-full h-full py-20 gap-y-20 gap-x-28 lg:py-28"
    >
      <div
        class="relative  before:content-['']  before:absolute  before:border   before:border-blue-600  before:z-[-1]   before:bottom-[-16px]  before:left-[-22px]  before:w-full before:h-full   before:rounded-tr-[120px] before:rounded-bl-[120px]  min-w-[504px]       "
      >
        <img
          :src="codeImage"
          alt="Code illustration"
          class="object-cover block w-full aspect-[6/5] max-w-full lg:max-w-[500px] z-10 rounded-tr-[120px] rounded-bl-[120px]   "
          loading="lazy"
        />
      </div>

      <div class="md:w-[532px]">
        <h2 class="text-2xl font-bold md:text-3xl">
          <span class="text-blue-600">رائدون</span> في مجالنا
        </h2>

        <div class="mt-10">
          <div
            v-for="item in featureItems"
            :key="item.featureName"
            class="flex items-center mt-6 gap-x-2"
          >
            <div
              class="md:min-w-[66px] md:min-h-[66px] size-[50px] rounded-full bg-blue-200 flex items-center justify-center"
            >
              <svg-icon
                name="rounded"
                class="md:size-[36px] size-[30px] fill-blue-600"
              />
            </div>

            <div
              class="bg-gradient-to-tr from-gradient-one to-gradient-two px-6 h-[57px] rounded-full flex items-center justify-center"
            >
              <h2 class="text-gray-400 md:text-lg line-clamp-1">
                {{ item.featureName }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
   <span class="size-48 rounded-full absolute -left-24 md:bottom-32  bottom-0 blur-xl bg-blue-100/25 shadow-inner shadow-blue-50"></span>
   <span class="size-36 rounded-3xl absolute -right-7 md:top-11 top-11 blur-xl bg-pink-100/25  shadow-inner shadow-pink-100"></span>
  </section>
</template>

<script setup lang="ts">
import codeImage from "@/assets/images/code.webp";

const featureItems = [
  {featureName: "اسم الميزه بشكل مختصر ومميز"},
  {featureName: "اسم الميزه بشكل مختصر ومميز"},
  {featureName: "اسم الميزه بشكل مختصر ومميز"},
  {featureName: "اسم الميزه بشكل مختصر ومميز"},
];
</script>
