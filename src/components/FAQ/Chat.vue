<template>
  <div class="chat">
      <img src="../../assets/Ellipse.png" alt="Чат">
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style lang="scss" scoped>
.chat {
  width: 60px;
  height: 60px;
  border-radius: 39px;
  background: #ffffff;
  box-shadow: -10px -10px 30px rgba(112, 32, 223, 0.05),
    10px 10px 30px rgba(112, 32, 223, 0.05);
  position: sticky;
  bottom: 10px;
  left:90%;
  bottom:20px;
  cursor: pointer;
    display:flex;
  align-items:center;
  justify-content: center;
}
</style>
