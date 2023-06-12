<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-5xl text-blue-600 mb-8">Your links</h1>
    <div class="overflow-x-auto">
      <div class="py-2">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light bg-gray-800 text-white rounded-xl">
            <thead class="border-b bg-gray-900 font-medium">
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Link</th>
                <th scope="col" class="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(url, index) in urls" :key="url._id" class="border-b">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
                <td class="px-6 py-4">
                  <div class="max-w-lg break-words">
                    <span class="whitespace-pre-line">{{ url.link }}</span>
                    >
                  </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                  <DeleteIcon @click="onClickDelete(url.link)" />
                </td>
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
import { useRoute } from "vue-router";
import DeleteIcon from "../components/Icons/DeleteIcon.vue";

const route = useRoute();

interface Url {
  _id: string;
  link: string;
}

const urls = ref<Array<Url>>([]);

async function fetchUrls() {
  try {
    const response = await axios.post("http://localhost:8001/user/yourLinks", {
      userName: route.params.userName,
    });
    urls.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function onClickDelete(urlId: string) {
  try {
    const response = await axios.post("http://localhost:8001/user/links/delete", {
        userName: route.params.userName,
        url: urlId
    });

    console.log(response)
    
    if (response.status === 200) {
      console.log(urls)
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchUrls();
});
</script>
