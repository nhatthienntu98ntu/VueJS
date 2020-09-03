<template>
  <div id="app">
    <input
      type="button"
      value="Change title"
      @click="title = 'Chào mừng bạn đến VueJS --Header', titleFooter = 'Footer VueJS 2020'"
    />
    <comp-header :titleHeader="title" :listUser="listUser" @changeTitleApp="changeTitle" />
    <demo-ref />
    <demo-slot />
    <list-user @deleteUserInApp="deleteUser" :listUser="listUser" />
    <comp-footer :titleFooter="title" />
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from "./components/ListUser.vue";
import DemoRef from "./components/DemoRef.vue";
import DemoSlot from "./components/DemoSlot.vue";

export default {
  name: "App",
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot,
  },
  data() {
    return {
      title: "Hello VueJS --Header",
      listUser: [
        {
          id: 1,
          name: "nhat thien",
          age: 22,
          sex: "nam",
        },
        {
          id: 2,
          name: "thanh dat",
          age: 22,
          sex: "nam",
        },
        {
          id: 3,
          name: "van quan",
          age: 22,
          sex: "nam",
        },
        {
          id: 4,
          name: "trieu thuan",
          age: 22,
          sex: "nam",
        },
      ],
    };
  },
  methods: {
    changeTitle(data) {
      this.title = data.title;
      console.log("App nhan duoc du lieu: ", data);
    },
    deleteUser(index) {
      console.log("id app nhan duoc: ", index);
      this.listUser = this.listUser.filter((user) => user.id !== index);
    },
  },
  beforeCreate() {
    console.log(
      "Before Created",
      this.title,
      document.querySelector(".container")
    );
  },
  created() {
    console.log("Created", this.title, document.querySelector(".container"));
  },
  beforeMount() {
    console.log(
      "Before Mount",
      this.title,
      document.querySelector(".container")
    );
  },
  mounted() {
    console.log("Mounted", this.title, document.querySelector(".container"));
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {},
  destroyed() {},
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
* {
  box-sizing: border-box;
}
</style>
