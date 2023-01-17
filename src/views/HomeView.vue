<template>
  <main>
    <chat-container :user="user"/>
  </main>
</template>

<script >
import ChatContainer from '../components/ChatContainer.vue'

export default {
  components: { ChatContainer },
  props: {
    user: Object
  }
}
</script>