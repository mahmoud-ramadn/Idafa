<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: () => ({
    dir: "rtl",
    lang: "ar",
  }),
  meta: [
    {property: "og:title", content: "Idafh"},
    {property: "og:description", content: "Idafh"},
    {property: "og:image", content: "/og-image.png"},
  ],
});
</script>
