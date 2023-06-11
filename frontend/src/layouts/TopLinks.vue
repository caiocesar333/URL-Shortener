<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-7xl text-blue-600 mb-28">Top 100 Links! </h1>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light bg-zinc-900">
            <thead
              class="border rounded-xl bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
            >
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Short Link</th>
                <th scope="col" class="px-6 py-4">Original Link</th>
                <th scope="col" class="px-6 py-4">Total Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(url, index) in urls"
                :key="url._id"
                class="border-b dark:border-neutral-500"
              >
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ url.shortId }}</td>
                <td class="px-6 py-4">
                  <div class="overflow-x-auto max-w-xs">
                    <span class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{ url.redirectURL }}</span>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Url {
  _id: string;
  shortId: string;
  redirectURL: string;
  visitHistory: Array<any>;
}

const urls = ref<Array<Url>>([]);

async function fetchUrls() {
  try {
    const response = await axios.get('http://localhost:8001/url/top100');
    console.log(response.data.urls)
    urls.value = response.data.urls;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchUrls();
});
</script>
