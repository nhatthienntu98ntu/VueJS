<template>
  <div id="app">
    <get-resource></get-resource>
    <button @click="handCount"></button>
  </div>
</template>

<script>
import GetResource from "./components/GetResource";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    GetResource,
  },
  methods: {
    handCount() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
