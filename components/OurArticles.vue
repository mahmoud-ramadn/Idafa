<template>
  <div class="bg-gray-100 y-16 l py-28 md:py-32">
    <div class="container">
      <div class="flex justify-center">
        <ui-title title="مقالاتنا" class="z-10" />
      </div>

      <div
        class="grid grid-cols-1 gap-6 mt-10 lg:mt-12 lg:grid-cols-3 md:grid-cols-2"
      >
        <div
          v-for="(item, index) in articles" :key="index"
          class="bg-white rounded-lg shadow-lg shadow-gray-400/10"
        >
          <div class="overflow-hidden rounded-lg">
            <img
              :src="item.image"
              alt="Article Image"
              class="object-cover w-full aspect-[4/3]"
            />
          </div>

          <div class="px-4 py-6 space-y-4">
            <h2 class="font-bold text-gray-400 lg:text-lg">{{ item.titel }}</h2>
            <div class="flex flex-wrap mt-2 gap-x-4 md:gap-x-6 gap-y-2">
              <div class="flex items-center gap-x-3">
                <SvgIcon name="calendar" class="w-5 h-5 fill-gray-400" />
                <span class="text-gray-200">{{ item.data }}</span>
              </div>

              <div class="flex items-center gap-x-3">
                <SvgIcon name="user" class="w-5 h-5 fill-gray-400" />
                <span class="text-gray-200">{{ item.username }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button variant="secondary" class="flex mx-auto mt-10 gap-x-3">
        كل المقالات
        <SvgIcon name="arrow-left-o" class="w-4 h-4 fill-blue-600" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Statically import images
import businessTeamImage from "@/assets/images/artcalies/business-team-manager-meeting.png";
import focusedBusinessmanImage from "@/assets/images/artcalies/focused-young-businessman-signing-agreement-office-with-colleagues-cropped-guy-formal-wear-write-signature-paper-contract-document-meeting-after-conference-discussion-business.png";
import picImage from "@/assets/images/artcalies/pic.png";

const articles = [
  {
    titel: "عنوان مقال عن تجربة المستخدم",
    username: "محمد ابراهيم",
    data: "10 -2-2022",
    image: businessTeamImage, // Use the imported image
  },
  {
    titel: "عنوان مقال عن تجربة المستخدم",
    username: "محمد ابراهيم",
    data: "10-2-2022",
    image: focusedBusinessmanImage, // Use the imported image
  },
  {
    titel: "عنوان مقال عن تجربة المستخدم",
    username: "محمد ابراهيم",
    data: "10-2-2022",
    image: picImage, // Use the imported image
  },
];
</script>
