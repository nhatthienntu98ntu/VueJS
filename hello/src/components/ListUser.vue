<template>
  <div class="container">
    <div class="list-user">
      <user
        @deleteUserInListUser="deleteUserInListUser"
        class="user"
        v-for="(user, index) in listUser"
        :key="index"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "list-user",
  props: {
    listUser: Array,
  },
  data() {
    return {};
  },
  components: {
    User,
  },
  methods: {
    deleteUserInListUser(index) {
      console.log("id nhan listUser nhan duoc: ", index);
      this.$emit("deleteUserInApp", index);
    },
  },
};
</script>

<style scoped>
.list-user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list-user .user {
  width: calc(33.33% - 5px);
  border: 2px solid red;
  /* box-sizing: border-box; */
  margin-bottom: 5px;
}
.container {
  width: 1210px;
  margin: 0 auto;
}
</style>