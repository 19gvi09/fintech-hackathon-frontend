<template>
  <container>
    <div class="service_name">
      <h1>Название услуги 1</h1>
      <p>
        Описание услуги 1 Вы можете выбрать подходящую услугу прямо здесь, а
        чтобы вы были уверены, что все сделано верно, наш консультант проверит
        вашу заявку.
      </p>
    </div>
  </container>
</template>

<script>
export default {
  name: "Service",
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
      margin: 0 auto;
     font-family: Lato, sans-serif;
     h1 {
         font-size: 36px;
     }
     p {
         font-size: 16px;
         line-height: 30px;
         font-weight: normal;
         line-height: 29px;
         color: #333333;
     }
  }
}
</style>