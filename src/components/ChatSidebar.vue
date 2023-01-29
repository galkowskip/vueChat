<template>
  <aside class="sidebar">
    <input type="text" v-model="userSearch" />
    <div v-for="(item, index) in userSearchResults" :key="index">
      {{ item.displayName.stringValue }}
    </div>
  </aside>
</template>

<script>
import * as _ from "lodash";
import { query, collection, getDocs } from "firebase/firestore";

import { firestore } from "../firebase";

export default {
  data: function () {
    return {
      userSearch: "",
      userSearchResults: [],
    };
  },
  watch: {
    userSearch: function (newValue) {
      this.getUserList(newValue);
    },
  },
  methods: {
    getUserList: async function () {
      this.loading = true;
      this.userSearchResults = [];

      const docQuery = query(collection(firestore, "users"));

      try {
        const docSnap = await getDocs(docQuery);

        if (docSnap.size) {
          docSnap.forEach((item) => {
            this.userSearchResults = [
              ...this.userSearchResults,
              item._document.data.value.mapValue.fields,
            ];
          });
        }
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  border-right: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  padding: 12px;
  input {
      margin-bottom: 24px;
      width: 100%;
  }
}
</style>