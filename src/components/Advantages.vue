<template>
  <div>
    <div class="inner">
      <div class="card">
        <h1>01</h1>
        <h3>Преимущество</h3>
        <p class="card__text">
          Очень длинное описание преимущества чтобы вы прониклись важностью
          происходящего
        </p>
      </div>
      <div class="card">
        <h1>02</h1>
        <h3>Преимущество</h3>
        <p class="card__text">
          Очень длинное описание преимущества чтобы вы прониклись важностью
          происходящего разной длины, вдруг пригодится
        </p>
      </div>
      <div class="card">
        <h1>03</h1>
        <h3>Преимущество</h3>
        <p class="card__text">
          Очень длинное описание преимущества чтобы вы прониклись важностью
          происходящего
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advatages",
};
</script>

<style lang="scss" scoped>
.inner {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: $grid-breakpoint;
  
  .card {
    width: 390px;

    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      padding-bottom: 130px;
    }

    h3 {
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