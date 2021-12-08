<template>
  <container>
    <div class="service_name">
      <h1>Требования к заявителю</h1>
      <p>
        Банк принимает окончательное решение о ставке после рассмотрения заявки
        и представления документов.
      </p>
    </div>
  </container>
</template>

<script>
export default {
  name: "NewService",
};
</script>

<style lang="scss" scoped>
container {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 90px 0 70px 0;

  .service_name {
    width: 660px;
    margin: 60px auto;
    margin-bottom: 30px;
    font-family: Lato, sans-serif;
    h1 {
      font-size: 36px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 180%;
      color: #333333;
    }
  }
}
</style>