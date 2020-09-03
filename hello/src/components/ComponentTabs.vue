<template>
  <div class="comp-tabs">
    <div class="comp-tab">
      <span>{{ title }}</span>
      <ion-icon name="heart" />
    </div>
    <div class="body-tab">
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-tabs",
  data() {
    return {};
  },
  props: ["title"],
};
</script>

<style scoped>
.comp-tab {
  border: 1px solid #000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.body-tab {
  border: 2px solid blue;
}
</style>