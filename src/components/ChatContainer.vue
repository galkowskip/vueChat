<template>
  <div>
    <div></div>
    <div>
      <input type="text" v-model="newMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export default {
  props: {
    user: Object,
  },
  data: function () {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage: function () {
      set(ref(db, "messages/" + Date.now()), {
        user: this.user.displayName,
        message: this.newMessage,
      });
    },
  },
};
</script>

<style>
</style>