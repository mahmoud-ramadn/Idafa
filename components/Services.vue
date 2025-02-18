<template>
  <div class="relative">
    <div class="container py-20 mt-10">
      <div class="flex flex-col items-center text-center gap-y-2">
        <ui-title title="خدماتنا" />
        <h3 class="mt-3 font-bold md:text-lg">إكتشف خدماتنا المميزة</h3>
        <p class="text-gray-200">
          مؤسسة تقنية معلومات في خميس مشيط مسجلة في وزارة التجارة مؤسسة تقنية
          معلومات
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-6 mt-12 lg:mt-14 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="flex flex-col items-center px-6 py-10 transition-none duration-200 bg-white rounded-lg shadow-xl group gap-y-8 shadow-blue-600/5 hover:bg-gradient-blue hover:text-white"
        >
          <div
            class="w-[90px] h-[90px] rounded-full flex justify-center bg-gradient-blue-o items-center group-hover:bg-none group-hover:bg-white/10"
          >
            <svg-icon
              name="mobile-icon"
              class="w-5 fill-gray-400 group-hover:fill-white h-9"
            />
          </div>
          <h3 class="text-lg font-semibold md:text-xl">برمجة تطبيقات الجوال</h3>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/texture-right.webp"
      alt="texture right"
      class="absolute top-0 start-0 z-[-1]"
    />
    <img
      src="@/assets/images/teture-left.webp"
      alt="texture right"
      class="absolute bottom-[-645px] end-0 -z-10"
    />
  </div>
</template>
