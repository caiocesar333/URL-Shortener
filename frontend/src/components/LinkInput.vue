<script setup lang="ts">
import ShortenNowButton from "./ShortenNowButton.vue";
import LinkIcon from "./LinkIcon.vue";
</script>

<template>
  <div class="mt-5 bg-slate-800 rounded-3xl flex items-center justify-between px-6">
    <LinkIcon/>
    <input class="bg-transparent w-96 h-10 outline-none" placeholder="Example: http://super-long-link.com/shorten-it-pls"/>
    <ShortenNowButton />
  </div>
</template>
