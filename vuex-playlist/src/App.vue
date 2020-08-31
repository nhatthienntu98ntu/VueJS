<template>
  <div id="app">
    <product-list-once />
    <product-list-two />
  </div>
</template>

<script>
import ProductListOnce from "./components/ProductListOnce";
import ProductListTwo from "./components/ProductListTwo";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    ProductListOnce,
    ProductListTwo,
  },
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
