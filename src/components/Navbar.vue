<template>
  <div class="navbar">
    <template v-if="isLogged">
      {{ user.displayName }}
    </template>
    <button v-if="isLogged" @click="logout">Logout</button>
    <button v-else-if="$route.name !== 'login'" @click="gotoLoginPage">Login</button>
  </div>
</template>

<script>
import { auth } from "../firebase"
import { signOut } from "firebase/auth";

export default {
  props: {
    user: Object,
  },
  computed: {
    isLogged: function () {
      return this.user
    },
  },
  methods: {
    gotoLoginPage: function () {
      this.$router.push("/login");
    },
    logout: async function () {
      try {
        await signOut(auth);
        this.$emit("sign-out");
      } catch (error) {
        console.log(`sign out error: ${error}`);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  height: 80px;
  background: gainsboro;
  border-bottom: gray;
  color: black;
}
</style>