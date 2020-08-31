var vueInstance = new Vue({
  el: "#app",

  data: {
    title: "dien thoai samsung",
    ten: "Áo thun mỹ",
    gia: 200,
    sale: 0.2,
    link:
      "https://gaubongdep.com/wp-content/uploads/2018/01/ao-thun-meo-duoi-anh-trang-1481097217.jpg",
    target: "_blank",
    soluong: 1,
    clientX: 0,
    clientY: 0,
    firstName: "",
    lastName: "",
    active: true,
    error: true,
    selectedProduct: 0,
    listProductDetails: [
      {
        image:
          "https://gaubongdep.com/wp-content/uploads/2018/01/ao-thun-meo-duoi-anh-trang-1481097217.jpg",
        quantity: 8,
        textColor: "Màu đen",
      },
      {
        image:
          "https://product.hstatic.net/200000054310/product/happinessw_daf7deae54af4912abd04fd97a9e2b86_master.jpg",
        quantity: 6,
        textColor: "Màu trắng",
      },
      {
        image:
          "https://babi.vn/images/companies/1/Up%20hinh%20san%20pham/22406/ao-thun-be-trai-in-hinh-chu-ech%20(4).jpg?1498098753318",
        quantity: 7,
        textColor: "Màu đỏ",
      },
    ],
  },

  methods: {
    say: function (text) {
      return "hello" + text;
    },

    mouseMove(e) {
      console.log(e);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    },
    handSubmitForm(e) {
      console.log(e);
      // e.preventDefault();
    },
    handMouseMoveChild(e) {
      console.log("MouseChild", e.target);
    },
    changeActive() {
      this.active = !this.active;
    },
    changeError() {
      this.error = !this.error;
    },

    changeSelectedProduct(number) {
      this.selectedProduct = number;
      this.link = this.listProductDetails[this.selectedProduct].image;
    },
    addProduct() {
      return this.soluong <
        this.listProductDetails[this.selectedProduct].quantity
        ? (this.soluong += 1)
        : alert("Qúa số lượng tồn kho");
    },
    removeProduct() {
      return this.soluong > 1
        ? (this.soluong -= 1)
        : alert("Số lượng phải lớn hơn 0");
    },
  },
  computed: {
    reverse: function () {
      return this.ten.split(" ").reverse().join(" ");
    },
    //format giá của es6 "de-DE" kiểu hiển thị trước hay sau giá, "style" kiểu hiển thị, "USD" loại tiền.
    formatOriginalPrice() {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(this.gia);
    },
    formatFinalPrice() {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(this.salePrice);
    },
    salePrice() {
      return this.gia - this.sale * this.gia;
    },
    getImageProduct() {
      return this.listProductDetails[this.selectedProduct].image;
    },
    getColorProduct() {
      return this.listProductDetails[this.selectedProduct].textColor;
    },
    getSoLuongProduct() {
      return this.listProductDetails[this.selectedProduct].quantity;
    },
  },
});
