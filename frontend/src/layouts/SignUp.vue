<template class="h-screen">
  <div class="h-full flex items-center justify-center">
    <div class="w-full max-w-lg bg-slate-400 rounded-xl shadow-lg p-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">SignUp!</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full rounded-xl"
            alt="Sample image"
          />
        </div>
        <div>
          <form @submit.prevent="handleSignUp" class="space-y-6">
            <div>
              <label for="username" class="text-gray-900 font-semibold">Username</label>
              <input
                v-model="userName"
                type="text"
                id="username"
                class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-600"
                placeholder="Username"
              />
            </div>
            <div>
              <label for="password" class="text-gray-900 font-semibold">Password</label>
              <input
                v-model="password"
                type="password"
                id="password"
                class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-600"
                placeholder="Password"
              />
            </div>
            <div v-if="errorMessage" class="text-red-500">
              {{ errorMessage }}
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 focus:outline-none focus:ring focus:border-blue-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userName = ref("");
const password = ref("");
const errorMessage = ref("");

async function handleSignUp() {
  
  const response = await fetch("http://localhost:8001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    router.push("/login");
    console.log(data);
  } else {
    errorMessage.value = data.error;
  }
}
</script>
