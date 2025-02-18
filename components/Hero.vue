<template>
  <div class="  w-full relative">
    <div class="container   pt-[10rem] sm:pt-[31rem]   md:pt-[30rem]  lg:py-32">
      <h1
        class="lg:max-w-[560px] text-4xl lg:text-5xl font-bold !leading-[75px] lg:!leading-[85px]"
      >
        مع <span class="text-blue-600"> إضافة</span>، نضيف  لك حلـــولًا تقنية
        <span class="relative text-orange-400">
          <img
            src="@/assets/images/fire.webp"
            alt="fire"
            class="absolute -top-4 -end-10"
          />
          مبتكـــــــرة
        </span>
      </h1>
      <Button class="mt-6 font-semibold md:mt-10 shadow-blue" as-child>
        <nuxt-link to="/">
          تحميل ملف الشركة
          <svg-icon name="download" class="w-5 h-5" />
        </nuxt-link>
      </Button>
    </div>
    <img
      src="@/assets/images/head_pic (2).webp"
      alt=""
      class="absolute -top-24 -left-36 z-[-1] aspect-auto"
    />
  </div>
</template>
