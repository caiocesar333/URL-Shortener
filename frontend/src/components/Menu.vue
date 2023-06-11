<template>
  <div class="flex justify-between items-center m-16 bg-slate-900 border">
    <button
    @click="onClickRedirectToYourLinks"
      class="w-1/3 h-20 p-2 border-r-white rounded-none hover:bg-blue-950 transition-all"
    >
      See your Links
    </button>
    <button
      @click="onClickRedirectToTopLinks"
      class="w-1/3 h-20 p-2 border-r-white rounded-none hover:bg-blue-950 transition-all"
    >
      Top 100 Links
    </button>
    <button
      class="w-1/3 h-20 p-2 rounded-none hover:bg-blue-950 transition-all"
    >
      Loggout
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";


const router = useRouter();
const route = useRoute()

const onClickRedirectToTopLinks = () => {
  router.push("/topLinks");
};
const onClickRedirectToYourLinks = () => {
  router.push(`/yourLinks/${route.params.userName}`);
};
</script>
