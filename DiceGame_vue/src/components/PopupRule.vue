<template>
  <div class="wrapper-popup" :class="{ 'isActive-popup': isGame}">
    <div class="popup-rule">
      <h3>Luật chơi</h3>
      <p>RollDice để xoay xúc xắc. HOLD để tích lũy điểm vừa mới xoay được. Có thể xoay nhiều lần, điểm hiện hành sẽ được cộng dồn sau mõi lần xoay. Nếu xoay vào mặt 1 điểm lượt chơi sẽ chuyển cho đối phương và điểm hiện hành sẽ bị xóa. Sau khi chọn HOLD số điểm tích lũy của bạn lớn hơn hoặc bằng điểm FINALSCORE bạn là người chiến thắng!!!</p>
      <button class="confim" @click="isGamePopup">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  props: ["isGame"],
  data() {
    return {};
  },
  methods: {
    isGamePopup() {
      this.$emit("isGamePopup");
    },
  },
};
</script>

<style scoped>
.wrapper-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
}
.wrapper-popup .popup-rule {
  width: 350px;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.isActive-popup {
  opacity: 1;
  visibility: visible;
}
.isActive-popup .popup-rule {
  transition: 0.5s ease;
  transform: translate(-50%, -50%) scale(1);
}
.popup-rule h3 {
  margin-bottom: 20px;
}
.popup-rule .confim {
  padding: 10px 20px;
  background-color: black;
  border: 2px solid #000;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 20px;
}
.popup-rule .confim:hover {
  background-color: #fff;
  color: #000;
}
</style>