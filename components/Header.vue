<template>
  <div class="container flex items-center justify-between mt-10">
    <nuxt-link to="/" class="shrink-0">
      <img
        src="@/assets/images/logo.svg"
        width="169"
        height="54"
        alt="logo"
        class="w-40 h-14"
      />
    </nuxt-link>

    <div class="items-center justify-center hidden lg:flex gap-x-4">
      <nuxt-link to="/" class="px-4 py-2 font-semibold">أعمالنا</nuxt-link>
      <nuxt-link to="/" class="px-4 py-2 font-semibold">مقالات</nuxt-link>
      <nuxt-link to="/" class="px-4 py-2 font-semibold">وظائف</nuxt-link>
    </div>

    <Button variant="secondary" class="font-semibold" as-child>
      <nuxt-link to="/">
        تواصل معنا
        <svg-icon name="send" class="w-4 h-4" />
      </nuxt-link>
    </Button>
  </div>
</template>
