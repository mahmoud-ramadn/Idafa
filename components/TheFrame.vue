<template>
  <div
    :class="
      cn(
        `bg-[url('@/assets/images/frame.webp')] bg-cover bg-right bg-no-repeat py-16`,
        $attrs.class,
      )
    "
  >
    <div
      class="container flex justify-center items-center lg:flex-row flex-col gap-6 gap-y-8"
    >
      <div
        v-for="(item, index) in stats"
        :key="index"
        class="flex items-center flex-col justify-center px-10 md:px-20 lg:px-36 py-6"
      >
        <span
          class="size-24 flex justify-center items-center rounded-full bg-gray-700/50"
        >
          <img
            :src="item?.image"
            :alt="item.id.toString()"
            Loading="lazy"
            class="object-contain aspect-square"
          />
        </span>
        <h3 class="font-extrabold text-4xl text-white pt-6 pb-3">
          {{ item.number }}
        </h3>
        <p class="font-medium text-lg text-white">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

const stats = [
  {
    id: 1,
    image: new URL("@/assets/images/frame/1.webp", import.meta.url).href,
    number: "50,000+",
    label: "عملاء",
  },
  {
    id: 2,
    image: new URL("@/assets/images/frame/2.webp", import.meta.url).href,
    number: "10,000+",
    label: "مشاريع",
  },
  {
    id: 3,
    image: new URL("@/assets/images/frame/3.webp", import.meta.url).href,
    number: "6+",
    label: "سنوات",
  },
];
</script>
