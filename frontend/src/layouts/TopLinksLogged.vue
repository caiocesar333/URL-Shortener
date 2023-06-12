<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-7xl text-blue-600 mb-28">Your Links</h1>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light bg-zinc-900">
            <thead
              class="border rounded-xl bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
            >
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Original Link</th>
                <th scope="col" class="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(url, index) in urls"
                :key="url._id"
                class="border-b dark:border-neutral-500"
              >
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-4">
                  <div class="overflow-x-auto max-w-xs">
                    <span
                      class="whitespace-nowrap overflow-hidden overflow-ellipsis"
                      >{{ url.link }}</span
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
import DeleteIcon from "../components/DeleteIcon.vue";

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
