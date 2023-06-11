<template>
  <div class="flex w-full justify-center gap-4 mt-8 items-center mb-16">
    <button @click="onClickRedirectTo" class="w-28 p-2 border border-solid rounded-2xl bg-blue-700 hover:bg-blue-950 transition-all">Log In</button>
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
