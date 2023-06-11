<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold text-5xl text-cyan-500">Shorten Your Loooong Links</h1>
    <div class="flex gap-1">
      <p class="text-base">
        ShortEN is an eficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
      <p class="font-semibold">See the top links</p> <a @click="onClickRedirectTo" class="hover:cursor-pointer text-cyan-500">here</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onClickRedirectTo = () => {
  router.push("/topLinks");
};
</script>
