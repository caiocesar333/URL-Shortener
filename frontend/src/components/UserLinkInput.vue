<template>
  <div
    class="mt-5 bg-slate-800 rounded-3xl flex items-center justify-between px-6"
  >
    <LinkIcon />
    <input
      v-model="inputUrl"
      class="bg-transparent w-96 h-10 outline-none"
      placeholder="Example: http://super-long-link.com/shorten-it-pls"
    />
    <ShortenNowButton @click="shortenUrl" />
    <div class="flex gap-1 flex-col">
      <p
        :href="getShortLinkUrl()"
        target="_blank"
        class="hover:cursor-pointer"
        v-if="shortId"
      >
        Short Link:
      </p>
      <a
        :href="getShortLinkUrl()"
        target="_blank"
        class="hover:cursor-pointer"
        v-if="shortId"
      >
        {{ shortId }}</a
      >
    </div>
    <!-- Display the shortId if available -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import ShortenNowButton from "./ShortenNowButton.vue";
import LinkIcon from "./Icons/LinkIcon.vue";

const inputUrl = ref("");
const shortId = ref("");
const route = useRoute();

async function shortenUrl() {
  try {
    const response = await axios.post("http://localhost:8001/user/links", {
      url: inputUrl.value,
      userName: route.params.userName,
    });
    shortId.value = response.data.shortId;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function getShortLinkUrl() {
  return `http://localhost:8001/${shortId.value}`;
}
</script>
