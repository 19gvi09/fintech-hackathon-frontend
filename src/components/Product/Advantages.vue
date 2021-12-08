<template>
  <container>
    <div class="place">
      <h1>01</h1>
      <p>Преимущество</p>
      <div class="place_t">
        Очень длинное описание преимущества чтобы вы прониклись важностью
        происходящего
      </div>
    </div>
    <div class="place">
      <h1>02</h1>
      <p>Преимущество</p>
      <div class="place_t">
        Очень длинное описание преимущества чтобы вы прониклись важностью
        происходящего разной длины, вдруг пригодится
      </div>
    </div>
    <div class="place">
      <h1>03</h1>
      <p>Преимущество</p>
      <div class="place_t">
        Очень длинное описание преимущества чтобы вы прониклись важностью
        происходящего
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: "Advatages",
};
</script>

<style lang="scss" scoped>
container {
  display: flex;
  justify-content: center;
  background: #f9f9fc;
  font-family: Lato, sans-serif;
  .place {
    width: 390px;
    margin: 30px;
    .place_t {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      padding-bottom: 130px;
    }
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      text-align: center;
      margin: 10px 0 30px;
    }
    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 96px;
      line-height: 115px;
      text-align: center;
      color: #b8b8f6;
      margin-top: 80px;
    }
  }
}
</style>