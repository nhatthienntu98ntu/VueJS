<template>
  <div>
    <div>
      <h1>Thanh viên thứ: {{ user.id }}</h1>
    </div>
    <div>
      <h4>Name: {{ user.name }}</h4>
      <h4>Age: {{ user.age }}</h4>
      <h4>Sex: {{ user.sex }}</h4>
    </div>
    <button @click="deleteUser">Delete User</button>
  </div>
</template>

<script>
export default {
  name: "item-user",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    deleteUser() {
      console.log(this.user.id);
      this.$emit("deleteUserInListUser", this.user.id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>