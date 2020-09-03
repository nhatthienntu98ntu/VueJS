<template>
  <div class="ref-demo">
    <h1>Đây là Component Ref</h1>
    <button @click="handleClickInputFile" class="avatar">Thay đổi avetar</button>
    <input ref="filterInputAvatar" type="file" style="display: none" />
  </div>
</template>

<script>
export default {
  name: "demo-ref",
  data() {
    return {};
  },
  methods: {
    handleClickInputFile() {
      this.$refs.filterInputAvatar.click();
    },
  },
};
</script>

<style scoped>
.ref-demo {
  border: 1px solid #000;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 100px 30px;
}
.avatar {
  padding: 12px 15px;
  background-color: #000;
  color: white;
  border: 2px solid black;
  transition: 0.3s ease;
}
.avatar:hover {
  color: black;
  background-color: white;
}
</style>