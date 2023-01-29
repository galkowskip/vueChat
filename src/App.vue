<template>
  <div>
    <navbar :user="user" @sign-out="signOut" />
    <div>
      <RouterView :user="user" />
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from "vuefire";

import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data: function () {
    return {
      user: {},
    };
  },
  methods: {
    refreshUser: async function () {
      this.user = await getCurrentUser();
    },
    signOut: function () {
      this.refreshUser();
      this.$route.push({ name: "login" });
    },
  },
  mounted: async function () {
    this.refreshUser();
  },
};
</script>

<style >
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
