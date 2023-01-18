<template>
  <div
    class="message-item"
    :class="isActiveUsers ? 'message-item--yours' : 'message-item--someones'"
  >
    <div class="message-item__title" v-if="!continousMessage">{{ item.user.name }}</div>
    <div class="message-item__content">{{ item.message }}</div>
    <div class="message-item__time-ago">{{ timeAgo }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    item: Object,
    isActiveUsers: Boolean,
    continousMessage: Boolean
  },
  computed: {
    timeAgo: function () {
      return moment(this.item.timestamp).toNow();
    },
  },
};
</script>

<style scoped lang="scss">
.message-item {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  &--yours {
    align-self: flex-end;
  }
}
</style>
