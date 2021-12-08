<template>
  <div class="wrapper">
    <div class="inner">
      <div class="row">
        <div class="col">
          <h1 class="title">Предложение по услуге 1</h1>
          <h5 class="subtitle">
           Мы оформим вашу заявку за 10 минут и дадим ответ в течение тридцати.
          </h5>
          <button class="button">Перейти к оформлению</button>
        </div>
        <img class="img" src="../../assets/PreviewProduct-img.png " width="360" height="374" alt="img"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewProduct",
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: radial-gradient(
    98.89% 173.8% at 5.07% 16.39%,
    #e0e2fb 0%,
    #b8a3f5 100%
  );
  padding: 128px 0 72px;
}

.inner {
  margin: 0 auto;
  max-width: 1230px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  padding: 22px 0 0;
  text-align: left;
  color: #fff;
}

.title {
  margin: 0;
  font-size: 72px;
  line-height: 86px;
}

.subtitle {
  margin: 20px 0 0;
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
}

.button {
  background: #7020df;
  color: #fff;
  margin: 30px 0 0;
  padding: 9px 45px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
}

.img {
  width: 380px;
  height: 402px;
  padding-left:100px;
}
</style>