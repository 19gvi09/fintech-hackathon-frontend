<template>
    <div class="footer">
        <div class="wrapper">
            <div class="row">
                <div class="ta-left">
                    <h4 class="heading">Наши продукты</h4>
                    <ul class="links">
                        <li><router-link class="link" to="/about">Торговый эквайринг</router-link></li>
                        <li><router-link class="link" to="/about">Интернет-эквайринг</router-link></li>
                    </ul>
                </div>
                <div class="contacts">
                    <h4 class="heading">Контакты</h4>
                    <div class="socials">
                        <a href="" class="socials__link"></a>
                        <a href="" class="socials__link"></a>
                        <a href="" class="socials__link"></a>
                        <a href="" class="socials__link"></a>
                    </div>
                    <a href="tel:+74994907746" class="contacts__phone link">+7 (499) 490-77-46</a>
                    <h5 class="subheading">Техподдержка</h5>
                    <a href="mailto:support@diforta.com" class="email link">support@diforta.com</a>
                    <button class="button">Наши вакансии</button>
                </div>
                <div class="ta-right">
                    <h4 class="heading">Документация</h4>
                    <ul class="links">
                        <li><router-link class="link" to="/about">Требования к сайту</router-link></li>
                        <li><router-link class="link" to="/about">54-ФЗ</router-link></li>
                        <li><router-link class="link" to="/about">Договор на прием карт</router-link></li>
                        <li><router-link class="link" to="/about">Договор на фискализацию</router-link></li>
                        <li><router-link class="link" to="/about">Договор конфиденциальности</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <h5 class="copyright">© 2021 Xforta Financial Technologies Ltd. Все права защищены.</h5>
                <router-link class="link" to="/about">Политика конфиденциальности</router-link>
                <router-link class="link" to="/about">Реквизиты</router-link>
                <router-link class="link" to="/about">Как подключиться</router-link>
                <router-link class="link" to="/about">Условия пользования</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss" scoped>
.footer {
    background: #0D0D0D;
    color: #E5E5E5;
    padding: 80px 0 20px;
}

/* Layout styles */
.wrapper {
    margin: 0 auto;
    max-width: 1230px;
}

.row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

/* Content styles */
.heading {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
}

.links {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;

    li {
        margin: 0 0 10px;

        &:last-child {
            margin: 0;
        }
    }
}

.link {
    text-decoration: none;
    color: #E5E5E5;
    line-height: 20px;
}

.contacts {
    width: 100%;
    max-width: 205px;

    &__phone {
        font-weight: 700;
    }
}

.socials {
    display: flex;
    margin: 20px 0;

    &__link {
        background: #F9F9FC;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 15px 0 0;

        &:last-child {
            margin: 0;
        }
    }
}

.subheading {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin: 30px 0 10px;
}

.email {
    font-weight: 700;
}

.button {
    cursor: pointer;
    border: none;
    outline: none;
    background: #F9F9FC;
    padding: 10px 33px;
    border-radius: 30px;
    margin: 50px 0 100px;
}

/* Copyright styles */
.copyright {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}

/* Additional styles */
.ta-left {
    text-align: left;
}

.ta-right {
    text-align: right;
}
</style>
