<template>
<div class="bloc1">
  <ul class="nav">
    <li>
      <a href="#">Общие условия</a>
      <ul>
        <li><a href="#">пункт 1.1</a></li>
        <li><a href="#">пункт 1.2</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Ставка</a>
      <ul>
       
      </ul>
    </li>
    <li>
      <a href="#">Дополнительная сумма</a>
      <ul>
       
      </ul>
    </li>
    <li>
      <a href="#">Без подтверждения дохода</a>
      <ul>
       
      </ul>
    </li>
    <li>
      <a href="#">Требования к заемщику</a>
      <ul>
       
      </ul>
    </li>
    <li>
      <a href="#">Документы</a>
      <ul>
       
      </ul>
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
.bloc1 {
    display: flex;
    justify-content: center;
    height: 410px;
}
ul{
  margin: 0;
  padding: 0;
}
ul.nav li ul{
  display: none;
  
}
ul.nav li{
  list-style: none;
  margin: 30px;
}
ul.nav li:hover > ul{
  display: block;
  
}
ul.nav li {

  float: left;                                   /*делаем меню горизонтальным*/
  height: 30px;
  list-style: none;  
}
ul.nav li a {
  text-decoration: none;
  display: block;
  padding: 10px 10px 10px 10px;
    color:black

}
ul.nav li ul {
  display: none;	/*скрываем вложенные пункты*/
}
ul.nav li:hover {
background: #562CD3;
/* DiForta_style/purple1 */
border: 1px solid #562CD3;
box-sizing: border-box;
height: 40px;
border-radius: 20px;

}
ul.nav li a:hover {
    color: #FFFFFF;
   
}

    /*Выпадающее меню*/
ul.nav {
  position: relative;
  height: 30px;
  margin:0 auto;
}
ul.nav li:hover > ul {
  border-top: 1px solid white;
  display: block;
  position: absolute;
  top: 70px; 
  width: 1230px;
  height: 410px;
  background: linear-gradient(180deg, #F9F9FC -2.41%, #FFFFFF 100%);
/* sh2_arrow */

box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
border-radius: 20px;
  left: 40px;
}
</style>