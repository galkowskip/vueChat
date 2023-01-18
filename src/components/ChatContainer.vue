<template>
  <div>
    <div class="list">
      <chat-message
        v-for="(item, index) in data"
        :item="item"
        :key="`${index}-${item.user.uid}`"
        :continousMessage="index > 0 ? data[index - 1].user.uid === item.user.uid : false"
        :isActiveUsers="item.user.uid === user.uid"
      />
    </div>
    <div>
      <input type="text" v-model="newMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";

import ChatMessage from "./ChatMessage.vue";

export default {
  components: { ChatMessage },
  props: {
    user: Object,
  },
  data: function () {
    return {
      newMessage: "",
    //   messagesRef: ref(db, "messages/"),
      data: [],
    };
  },
  computed: {
      messagesRef: function() {
          return  ref(db, `messages/${Date.now()}`)
      }
  },
  mounted: function () {
    onValue(this.messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return;
      }

      if (typeof data === "object" && Object.keys(data).length) {
        this.data = [...this.data, data];
      } else {
        this.data = [...this.data, ...data];
      }
    });
  },
  methods: {
    sendMessage: function () {
      set(this.messagesRef, {
        user: {
          name: this.user.displayName,
          uid: this.user.uid,
          email: this.user.email,
        },
        message: this.newMessage,
        timestamp: Date.now(),
      });
    },
  },
};
</script>

<style scoped>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>