<template>
    <div class="troubleshooting"><h4>Распространенные проблемы</h4></div>

  <div class="list_of_trouble">
    <div class="accordion">
      <input class="toggle-boxb" id="blockb-1" type="checkbox" />
      <label for="blockb-1">Мне не одобрили заявку, что делать?<div class="icon-open"></div></label>
      <div class="boxb">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.
      </div>
      <input class="toggle-boxb" id="blockb-2" type="checkbox" />
      <label for="blockb-2">Мне не отвечают в службе поддержки</label>
      <div class="boxb">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.      </div>
      <input class="toggle-boxb" id="blockb-3" type="checkbox" />
      <label for="blockb-3">Данные которые я предоставил изменились</label>
      <div class="boxb">
        Forta Payment - это финтех-платформа, которая стремится упростить
        финансовую отрасль, предлагая инновационные решения. Наши услуги
        включают личные и бизнес-счета, прием и обработку онлайн-транзакций,
        международные платежи, платежные карты и многое другое.      
      </div>
      <input class="toggle-boxb" id="blockb-4" type="checkbox" />
      <label for="blockb-4">В заявке обнаружена ошибка</label>
      <div class="boxb">
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
  name: "Troubleshooting",
};
</script>

<style lang="scss" scoped>
.troubleshooting {
  text-align: left;
  h4 {
    margin: 140px 0 30px 105px;
    font-size: 20px;
    font-weight: 700;
    color: #341a7f;
  }
}
.list_of_trouble {
  text-align: left;
  width: 915px;
  padding-bottom: 180px;
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
.toggle-boxb {
  /* по умаолчанию скрыт */
  display: none;

}

/* формируем внешний вид панелей аккордеона */

.toggle-boxb + label {
  color: #0D0D0D;
  cursor: pointer;
  display: block;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size:18px;
  font-weight: normal;
  line-height: 22px;
  padding-left: 135px;
  line-height: 60px;
}
/* содержание блоков скрыто */

.toggle-boxb + label + div {
  display: none;
}

/* при обработке флажка (checkbox) показываем блок с содержанием */

.toggle-boxb:checked + label + div {
  display: block;
}

/* формируем внешний вид кнопки переключателя на панели справа */

.toggle-boxb + label:before {
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
.toggle-boxb:checked + label:before {
  content: "\2212";
}

/* оформляем блок с содержанием */

.boxb {
 
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