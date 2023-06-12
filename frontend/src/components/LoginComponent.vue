<template>
  <div class="flex justify-center mt-8 mb-16 items-center gap-5">
    <button
      @click="onClickRedirectTo"
      class="px-4 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 transition-all"
    >
      Log In
    </button>
    <p>Or use it without an account!</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onClickRedirectTo = () => {
  router.push("/login");
};
</script>
