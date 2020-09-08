<template>
  <div id="get-request">
    <h1>Get Request Json</h1>
  </div>
</template>

<script>
export default {
  name: "get-request",
  data() {
    return {
      someData: [],
    };
  },
  // created() {
  //   this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
  //     (data) => {
  //       this.someData = data.body.splice(0, 10);
  //     },
  //     (data) => {
  //       console.log(err);
  //     }
  //   );
  // },
};
</script>

<style scoped>
</style>