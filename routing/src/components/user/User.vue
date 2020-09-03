<template>
  <div>
    <div class="card-image">
      <img :src="'https://i.pravatar.cc/300?img=' + user.id" alt="" />
    </div>
    <div class="card-content">
      <h2>{{ user.name }}</h2>
      <router-link to="/" class="button is-dark">go back home</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.user = result.data;
    console.log(this.user);
  },
};
</script>

<style scoped></style>
