<template>
    <div class="header">
        <div class="row">
            <div class="logo">
                <div class="logo__img" @click="$router.push('/')"></div>
                <h2 class="logo__text" @click="$router.push('/')">Forta</h2>
            </div>
            <div class="navbar">
                <router-link class="navbar__link" to="/about">Для частных лиц</router-link>
                <router-link class="navbar__link" to="/about">Для бизнеса</router-link>
                <router-link class="navbar__link" to="/about">FAQ</router-link>
            </div>
            <div class="buttons">
                <button class="buttons__button">Регистрация</button>
                <button class="buttons__button purple">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss" scoped>
/*
columns = 12
gutter = 30px
*/
.header {
    margin: 0 auto;
    max-width: 1230px;
    padding: 20px 0;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.02);
}

.row {
    display: flex;
    width: 100%;
}

.logo {
    display: flex;
    width: -width(2);
    margin-right: -margin(1);

    &__img {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background-color: #7020DF;
        margin: 0 10px 0 0;
        cursor: pointer;
    }

    &__text {
        margin: 0;
        font-size: 28px;
        line-height: 30px;
        text-transform: uppercase;
        cursor: pointer;
        text-align: left;
    }
}

.navbar {
    width: -width(5);
    margin-right: calc((100% + 30px) / 12 * 1 + 30px);
    display: flex;
    justify-content: space-between;

    &__link {
        color: #0D0D0D;
        text-decoration: none;
        line-height: 24px;
    }
}

.buttons {
    width: -width(3);
    display: flex;
    justify-content: flex-end;

    &__button {
        font-weight: 700;
        line-height: 19px;
    }

    .purple {
        color: #FFF;
        background: #7020DF;
        border-radius: 20px;
        padding: 5px 29px 6px;
        margin-left: 35px;
    }
}
</style>
