<template>
  <div class="flex flex-col">
    <Logo />
    <Menu />
    <UserLinkInput />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import UserLinkInput from "../components/UserLinkInput.vue";
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";

const route = useRoute();

async function checkSession() {
  try {
    const response = await axios.post("http://localhost:8001/user/sessionCheck",{
      userName:route.params.userName,
    });
    if(response.status === 200) return true
    return false
  } catch (error) {
    console.error(error);
  }
}
onMounted(async () => {
  const userIsLogged = await checkSession();
  if(!userIsLogged) window.location.href = "http://localhost:5173/"
});
</script>
