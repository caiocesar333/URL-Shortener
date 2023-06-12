<template class="h-screen">
  <div class="h-full flex items-center justify-center">
    <div class="w-full max-w-lg bg-slate-400 rounded-xl shadow-lg p-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">Log In!</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full rounded-xl"
            alt="Sample image"
          />
        </div>
        <div>
          <form @submit.prevent="handleLogin" class="space-y-6">
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
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  class="form-checkbox h-4 w-4 text-blue-600 focus:outline-none focus:ring focus:border-blue-600"
                />
                <label for="remember-me" class="ml-2 text-gray-700">Remember me</label>
              </div>
              <a href="#" class="text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 focus:outline-none focus:ring focus:border-blue-600"
              >
                Login
              </button>
              <p class="text-gray-700 text-sm mt-2">
                Don't have an account? <a @click="onClickRedirectTo" href="#" class="text-blue-600 hover:underline">Register</a>
              </p>
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

const onClickRedirectTo = () => {
  router.push("/signup");
};

async function handleLogin() {
  const response = await fetch("http://localhost:8001/user/login", {
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
    router.push({
      path: `/HomeLogged/${userName.value}`,
    });
    console.log(data);
  } else {
    errorMessage.value = data.error;
  }
}
</script>
