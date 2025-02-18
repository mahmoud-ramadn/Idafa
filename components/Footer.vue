<script setup lang="ts">

</script>

<template>
  <footer>
    <div
      class="lg:h-[300px] bg-gradient-to-t from-gradient-one to-gradient-one"
    >
      <div
        class="container flex lg:gap-x-[100px] gap-y-[30px] flex-wrap items-start py-[56px]"
      >
        <div class="lg:max-w-[476px] flex flex-col gap-y-6">
          <img
            src="@/assets//images/logo.svg"
            width="169"
            height="54"
            alt=""
            class="w-[169px] h-[54px]"
          />
          <p class="font-medium text-gray-500 lg:text-lg">
            مؤسسة تقنية معلومات في خميس مشيط مسجلة في وزارة التجارة مؤسسة تقنية
            معلومات
          </p>
        </div>

        <div class="w-[220px] space-y-6 lg:space-y-10">
          <h3 class="text-lg font-bold text-gray-600">روابط مفيدة</h3>
          <div class="flex flex-col gap-y-4">
            <NuxtLink> أعمالنا </NuxtLink>
            <NuxtLink> نبذة عنا </NuxtLink>
            <NuxtLink> مدونة إضافة </NuxtLink>
          </div>
        </div>

        <div class="space-y-6 lg:space-y-10">
          <h3 class="text-lg font-bold text-gray-600">تواصل معنا</h3>
          <div class="flex items-center gap-x-4">
            <NuxtLink class="">
              <img src="@/assets/icons/svg/linkedin.svg" alt="" />
            </NuxtLink>
            <NuxtLink class="">
              <img src="@/assets/icons/svg/facebook.svg" alt="" />
            </NuxtLink>
            <NuxtLink class="">
              <img src="@/assets/icons/svg/X-icon.svg" alt="" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <p class="py-3 text-center text-gray-500">جميع الحقوق محفوظه شركة @إضافة</p>
  </footer>
</template>
