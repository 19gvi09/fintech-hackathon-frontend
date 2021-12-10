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
            <Carousel class="inner mt-50" :settings="settings"  :breakpoints="breakpoints">
                <Slide v-for="slide in cards" :key="slide">
                    <Card :n="slide" />
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Card from './Card.vue'

export default {
    name: "Offers",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Card,
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
            settings: {
                itemsToShow: 4,
                wrapAround: true
            },
            breakpoints: {
                1230: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                }
            },
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

<style lang="scss">
.carousel__prev,
.carousel__next {
    color: #0D0D0D;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    background: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
}

.carousel__pagination {
    padding: 0;

    &-button {
        border-radius: 50%;
        height: 7px;
        width: 7px;
        background: #E5E5E5;

        &--active {
            background: #B8B8F6;
        }
    }
}
</style>