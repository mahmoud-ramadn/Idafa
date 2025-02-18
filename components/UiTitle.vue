<template>
  <h2
    class="relative px-2 text-3xl font-bold text-blue-600 before:content-[''] before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-10 before:rounded-full before:bg-blue-200 before:z-[-1]"
  >
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
