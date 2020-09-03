<template>
  <div>
    <users />
  </div>
</template>

<script>
import Users from "../user/Users";
import axios from "axios";
export default {
  name: "home",
  components: {
    Users,
  },
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = result.data;
  },
};
</script>

<style scoped></style>
