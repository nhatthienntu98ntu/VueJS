<template>
  <div id="app">
    <navbar />
    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="demoOnClick">
      <div :class="{do: isDo, xanh: isXanh}" @click="changeBgRed" class="vuong"></div>
      <div :class="{do: isDo, xanh: isXanh}" @click="changeBgGreen" class="vuong"></div>
      <div :class="{do: isDo, xanh: isXanh}" @click="changeBgRed" class="vuong"></div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Navbar from "./components/layout/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      isDo: false,
      isXanh: false,
    };
  },
  methods: {
    changeBgRed() {
      this.isDo = true;
      this.isXanh = false;
    },
    changeBgGreen() {
      this.isDo = false;
      this.isXanh = true;
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.demoOnClick {
  display: flex;
  justify-content: center;
}
.vuong {
  width: 100px;
  height: 100px;
  background-color: black;
  margin-right: 20px;
  cursor: pointer;
}
.do {
  background-color: red;
}
.xanh {
  background-color: green;
}
</style>
