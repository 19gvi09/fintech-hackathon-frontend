<template>
  <div class="bloc1">
    <ul class="nav">
      <li>
        <a href="#">Общие условия</a>
        <ul>
          <div class="left_block">
            <div class="target_of_credit">
              <p>
                <span>Цель кредитования</span> - погашение ипотечного кредита
                или займа,<br />обеспечаеного залогом квартиры или
                залогомимущественных прав<br />по договору участия в долевом
                строительстве, залогодержателем, <br />
                по которому является банк или иная организация
              </p>
            </div>
            <div class="value_of_credit">
              <p>
                <span>Сумма кредита:</span><br />Сумма кредита: — от 500 тыс. до
                50 млн рублей для Москвы и МО, Санкт- <br />Петербурга и ЛО<br />
                — от 500 тыс. до 20 млн рублей для других регионов РФ
              </p>
            </div>
          </div>
          <div class="right_block">
            <p><span>Валюта кредита</span> - рубли РФ</p>
            <p><span>Сроки кредитования</span> - от 3 до 30 лет</p>
            <p><span>Валюта кредита</span> - рубли РФ</p>
            <p>
              <span>Размер кредита от стоимости залога:</span> От 20% до 70% -
              есть или хотя бы один из ваших<br />
              созаёмщиков являетесь ИП/владельцем (совладельцем) бизнеса <br />
              - от 20% до 80% - в иных случаях
            </p>
          </div>
        </ul>
      </li>
      <li>
        <a href="#">Ставка</a>
        <ul></ul>
      </li>
      <li>
        <a href="#">Дополнительная сумма</a>
        <ul></ul>
      </li>
      <li>
        <a href="#">Без подтверждения дохода</a>
        <ul></ul>
      </li>
      <li>
        <a href="#">Требования к заемщику</a>
        <ul></ul>
      </li>
      <li>
        <a href="#">Документы</a>
        <ul></ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuRequirmenets",
};
</script>

<style lang="scss" scoped>
.left_block {
  display: inline-block;
}
.right_block {
  display: inline-block;
  padding-left: 50px;
  span {
    font-weight: bold;

  }
  p {
    margin-top: 23px;
  }
  p ::before {
    content: "";
    background: #562cd3;
    border-radius: 1ch;
    padding-inline: 1ch;
    font-size: 6px;
    margin-inline-end: 2ch;
    vertical-align: middle;
  }
}
.bloc1 {
  display: flex;
  justify-content: center;
  height: 300px;
}
.value_of_credit {
  margin-top: 10px;
  span {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  span::before {
    content: "";
    background: #562cd3;
    border-radius: 1ch;
    padding-inline: 1ch;
    font-size: 6px;
    margin-inline-end: 2ch;
    vertical-align: middle;
  }
}
.target_of_credit {
  margin: 0;
  color: #333333;

  span {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  span::before {
    content: "";
    background: #562cd3;
    border-radius: 1ch;
    padding-inline: 1ch;
    font-size: 6px;
    margin-inline-end: 2ch;
    vertical-align: middle;
  }
}

ul {
  margin: 0;
  padding: 0;
}
ul.nav li ul {
  display: none;
}
ul.nav li {
  list-style: none;
}
ul.nav li:hover > ul {
  display: block;
  p {
    font-style: normal;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
}
ul.nav li {
  float: left; /*делаем меню горизонтальным*/
  height: 30px;
  list-style: none;
  width: 230px;
}

ul.nav li a {
  text-decoration: none;
  display: block;
  padding: 10px 10px 10px 10px;
  color: black;
}
ul.nav li ul {
  display: none; /*скрываем вложенные пункты*/
  position: absolute;
  left: 0;
  right: 0;
}
ul.nav li:hover {
  background: #562cd3;
  /* DiForta_style/purple1 */
  border: 1px solid #562cd3;
  box-sizing: border-box;
  height: 40px;
  width: 230px;
  border-radius: 20px;
}
ul.nav li a:hover {
  color: #ffffff;
}

/*Выпадающее меню*/
ul.nav {
  position: absolute;
  height: 30px;
  margin: 0 auto;
  max-height: 60px;
}
ul.nav li:hover > ul {
  border-top: 1px solid white;
  display: flex;
  justify-content: baseline;
  width: 1220px;
  height: 200px;
  background: linear-gradient(180deg, #f9f9fc -2.41%, #ffffff 100%);
  padding: 60px 10px 91px 93px;
  text-align: left;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: absolute;
  margin: 0 auto;
  left: 0;
  top: 50px;
}
</style>