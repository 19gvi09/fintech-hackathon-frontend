<template>
  <div class="how_work_service"><h4>Как именно работает сервис</h4></div>
  <div class="list_of_us">
    <div class="accordion">
      <input class="toggle-boxa" id="blocka-1" type="checkbox" />
      <label for="blocka-1"
        >Что нужно сделать чтобы получить услугу?
        <div class="icon-open"></div
      ></label>
      <div class="boxa">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
      <input class="toggle-boxa" id="blocka-2" type="checkbox" />
      <label for="blocka-2"
        >Какие условия существуют для получения услуги?</label
      >
      <div class="boxa">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
      <input class="toggle-boxa" id="blocka-3" type="checkbox" />
      <label for="blocka-3">Каким образом просиходит оформление услуги?</label>
      <div class="boxa">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
      <input class="toggle-boxa" id="blocka-4" type="checkbox" />
      <label for="blocka-4">Как Forta хранит персональные данные?</label>
      <div class="boxa">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
      <input class="toggle-boxa" id="blocka-5" type="checkbox" />
      <label for="blocka-5">Безопасно ли пользоваться сервисом?</label>
      <div class="boxa">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowWorkService",
};
</script>

<style lang="scss" scoped>
.how_work_service {
  text-align: left;
  h4 {
    margin: 140px 0 30px 105px;
    font-size: 20px;
    font-weight: 700;
    color: #341a7f;
  }
}
.list_of_us {
  text-align: left;
  width: 915px;
  dt {
    margin: 0;
  }
}

// Источник аккордеона https://dbmast.ru/blok-akkordeon-na-css3-eksperimenty-prodolzhayutsya

.accordion {
  /* ширина в % для резинового макета, 
  * можно определить фиксированное
  * значение в px 
  */
  width: 100%;
  padding: 0;
  margin: 0 auto;
}
.toggle-boxa {
  /* по умаолчанию скрыт */
  display: none;
}

/* формируем внешний вид панелей аккордеона */

.toggle-boxa + label {
  color: #0d0d0d;
  cursor: pointer;
  display: block;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: normal;
  line-height: 22px;
  padding-left: 135px;
  line-height: 60px;
}
/* содержание блоков скрыто */

.toggle-boxa + label + div {
  display: none;
}

/* при обработке флажка (checkbox) показываем блок с содержанием */

.toggle-boxa:checked + label + div {
  display: block;
}

/* формируем внешний вид кнопки переключателя на панели справа */

.toggle-boxa + label:before {
  background: #404247;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  color: #c9c9c9;
  content: "+";
  display: block;
  float: right;
  font-size: 14px;
  font-weight: bold;
  height: 18px;
  line-height: 18px;
  margin: 2px 5px 0px;
  text-align: center;
  width: 18px;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
    1px 1px 1px rgba(255, 255, 255, 0.1);
  -moz-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
    1px 1px 1px rgba(255, 255, 255, 0.1);
  -webkit-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2),
    1px 1px 1px rgba(255, 255, 255, 0.1);
}
.toggle-boxa:checked + label:before {
  content: "\2212";
}

/* оформляем блок с содержанием */

.boxa {
  padding: 30px 0 73px 135px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  color: #333333;
  line-height: 180%;
}

/* значения встраиваемых картинок в блоки */
</style>