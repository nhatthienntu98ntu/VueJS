<template>
  <div>
    <h1>{{ titleHeader }}</h1>
    <ul>
      <li v-for="user in listUser" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "component-header",
  props: ["titleHeader", "listUser"],
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      let data = {
        title: "Chao mung ban den voi VueJS 2020",
      };
      this.$emit("changeTitleApp", data);
    },
  },
};
</script>

<style>
</style>