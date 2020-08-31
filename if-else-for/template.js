var app = new Vue({
  el: "#app",
  data: {
    title: true,
    tabsSelected: "login",
    items: [
      {
        title: "nhatthien",
        content: "Day la content",
        isActive: true,
      },
      {
        title: "Thanh dat",
        content: "Day la content",
        isActive: false,
      },
      {
        title: "trieu thuan",
        content: "Day la content",
        isActive: true,
      },
      {
        title: "vanquan",
        content: "Day la content",
        isActive: false,
      },
    ],
    object: {
      ten: "Nguyen nhat thien",
      age: 22,
      sex: "nam",
    },
  },
  methods: {
    login() {
      this.tabsSelected = "login";
    },
    register() {
      this.tabsSelected = "registration";
    },
  },
  computed: {
    checkActive() {
      return this.items.filter((item) => item.isActive);
    },
  },
});
