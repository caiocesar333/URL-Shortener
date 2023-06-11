<template>
  <div class="mt-5 bg-slate-800 rounded-3xl flex items-center justify-between px-6">
    <LinkIcon/>
    <input
      v-model="inputUrl"
      class="bg-transparent w-96 h-10 outline-none"
      placeholder="Example: http://super-long-link.com/shorten-it-pls"
    />
    <ShortenNowButton @click="shortenUrl" />
    <a :href="getShortLinkUrl()" target="_blank" class="hover:cursor-pointer" v-if="shortId">Short Link: {{ shortId }}</a> <!-- Display the shortId if available -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
import ShortenNowButton from './ShortenNowButton.vue';

const inputUrl = ref('');
const shortId = ref('');

async function shortenUrl() {
  try {
    const response = await axios.post('http://localhost:8001/url', { url: inputUrl.value });
    shortId.value = response.data.shortID;
    console.log(shortId.value); // You can use the shortLink in your application as needed
  } catch (error) {
    console.error(error);
  }
}

function getShortLinkUrl() {
  return `http://localhost:8001/${shortId.value}`;
}
</script>
