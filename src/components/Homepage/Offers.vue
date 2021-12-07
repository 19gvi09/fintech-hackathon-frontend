<template>
    <div class="wrapper">
        <div class="inner">
            <div class="header">
                <h2 class="header__title">Выбери лучшее</h2>
                <p class="header__subtitle">Теперь вам не нужно часами листать сайты с непрозрачными условиями. Вы можете выбрать подходящую услугу прямо здесь, а чтобы вы были уверены, что все сделано верно, наш консультант проверит вашу заявку.</p>
            </div>
        </div>
        <div class="container">
            <div class="inner">
                <div class="row">
                    <div>
                        <button class="button mr-20" :class="{ active: isActive === 'personal' }" @click="setTab(personal)">Для частных лиц</button>
                        <button class="button" :class="{ active: isActive === 'business' }" @click="setTab(business)">Для бизнеса</button>
                    </div>
                    <div>
                        <button class="button">
                            Смотреть всё
                            <img class="ml-5" src="../../assets/arrow-sm.svg" alt="arrow-sm">
                        </button>
                    </div>
                </div>
            </div>
            <Slider :cards="cards" class="mt-50" />
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
    name: "Offers",
    components: {
        Slider
    },
    data() {
        return {
            isActive: "personal",
            personal: {
                name: "personal",
                values: 8,
            },
            business: {
                name: "business",
                values: 6,
            },
            cards: null,
        }
    },
    methods: {
        setTab(state) {
            this.isActive = state.name
            this.cards = state.values
        }
    },
    created() {
        this.cards = this.personal.values
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 60px 0 63px;
    background: #F9F9FC;
}

.inner {
    margin: 0 auto;
    max-width: 1230px;
}

.header {
    max-width: 660px;
    margin: 0 auto;

    &__title {
        margin: 0;
        font-size: 36px;
        line-height: 50px;
    }
    
    &__subtitle {
        margin: 30px 0 0;
        line-height: 30px;
        font-weight: 300;
    }
}

.container {
    margin: 90px 0 0;
}

.row {
    display: flex;
    justify-content: space-between;
}

.button {
    border: solid 1px #E5E5E5;
    border-radius: 30px;
    padding: 10px 33px;

    &.active {
        border: solid 1px #562CD3;
    }
}

/* Additional styles */
.px-41 {
    padding-right: 41px;
    padding-left: 41px;
}

.px-33 {
    padding-right: 33px;
    padding-left: 33px;
}

.mr-20 {
    margin-right: 20px;
}

.ml-5 {
    margin-left: 5px;
}

.mt-50 {
    margin-top: 50px;
}
</style>