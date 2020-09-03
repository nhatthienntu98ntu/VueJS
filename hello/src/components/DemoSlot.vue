<template>
  <div class="slot-demo">
    <component-tabs title="Tiêu đề của tab">
      <ul class="tab-header">
        <li
          class="item-tab-header"
          :class="{'active': tabActive === index}"
          v-for="(tab, index) in tabHeader"
          :key="index"
          @click="setActive(index)"
        >{{ tab.text }}</li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive === 0">
        <h3>tab 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit quod eius rem magni repudiandae in neque suscipit? Molestiae, suscipit officiis? Unde nostrum ab delectus commodi placeat nam dolore non?</p>
      </div>
      <div class="tab-content tab2" v-else-if="tabActive === 1">
        <h3>tab 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam veritatis. Eius est natus quae officiis veniam a enim illo. Nostrum expedita fugiat at modi natus ex fuga porro libero.</p>
      </div>
      <div class="tab-content tab3" v-else-if="tabActive === 2">
        <h3>tab 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatibus, ipsa, id maxime vel unde odio eligendi ex quae velit exercitationem expedita at voluptas cum excepturi numquam ipsam dolorum odit.</p>
      </div>
    </component-tabs>
  </div>
</template>

<script>
import ComponentTabs from "./ComponentTabs.vue";
export default {
  name: "demo-slot",
  data() {
    return {
      tabHeader: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }],
      tabActive: 0,
    };
  },
  components: {
    ComponentTabs,
  },
  methods: {
    setActive(index) {
      this.tabActive = index;
    },
  },
};
</script>

<style scoped>
.slot-demo {
  padding: 100px 30px;
  border: 1px solid #000;
  margin: 20px 0;
}
.tab-header {
  margin: 0;
  padding: 0;
  display: flex;
  padding: 2px;
  list-style-type: none;
  box-sizing: border-box;
  margin-top: 2px;
}
.tab-header .item-tab-header {
  padding: 5px 10px;
  /* border: 2px solid black; */
  background-color: black;
  color: #eee;
  margin-right: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.tab-header .item-tab-header:hover {
  border: 2px solid red;
  background-color: white;
  color: black;
}
.active {
  border: 2px solid red;
}

.tab-content {
  padding: 15px 20px;
  border: 2px solid green;
  text-align: left;
  margin: 2px;
}
</style>