<template>
  <div id="product-list-once">
    <h1>Component Once</h1>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">Name: {{ product.name }}</span>
        <span class="price">Price: ${{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    // products() {
    //   return this.$store.state.products;
    // },
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
    ...mapGetters(["saleProducts"]),
  },
  methods: {
    // handReducePrice(amount) {
    //   this.$store.dispatch("reducePrice", amount);
    // },
    ...mapActions(["reducePrice"]),
  },
};
</script>

<style scoped>
#product-list-once {
  background-color: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-once ul {
  padding: 0;
}
#product-list-once li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  display: block;
  color: #e8800c;
}
</style>