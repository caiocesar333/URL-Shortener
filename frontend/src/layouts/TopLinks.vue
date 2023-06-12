<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-5xl text-blue-600 mb-8">Top 100 Links!</h1>
    <div class="overflow-x-auto">
      <div class="py-2">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light bg-gray-800 text-white rounded-xl">
            <thead class="border-b bg-gray-900 font-medium">
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Short Link</th>
                <th scope="col" class="px-6 py-4">Original Link</th>
                <th scope="col" class="px-6 py-4">Total Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(url, index) in urls" :key="url._id" class="border-b">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ url.shortId }}</td>
                <td class="px-6 py-4">
                  <div class="max-w-lg break-words">
                    <span class="whitespace-pre-line">{{ url.redirectURL }}</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4">{{ url.visitHistory.length }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Url {
  _id: string;
  shortId: string;
  redirectURL: string;
  visitHistory: Array<any>;
}

const urls = ref<Array<Url>>([]);

async function fetchUrls() {
  try {
    const response = await axios.get("http://localhost:8001/url/top100");
    const sortedUrls = response.data.urls.sort(
      (a: Url, b: Url) => b.visitHistory.length - a.visitHistory.length
    );
    urls.value = sortedUrls;
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  fetchUrls();
});
</script>
