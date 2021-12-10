<template>
    <div class="wrapper">
        <div class="inner">
            <div class="heading">
                <h2 class="heading__title">Выбери лучшее</h2>
                <p class="heading__subtitle">Теперь вам не нужно часами листать сайты с непрозрачными условиями. Вы можете выбрать подходящую услугу прямо здесь, а чтобы вы были уверены, что все сделано верно, наш консультант проверит вашу заявку.</p>
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
                        <button class="button" @click="$router.push('/catalog')">
                            Смотреть всё
                            <svg class="button__img" width="13" height="10" viewBox="0 0 13 10">
                                <use xlink:href='../../assets/arrow-sm.svg#img'></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <Carousel class="carousel" :settings="settings"  :breakpoints="breakpoints">
                        <Slide class="slide" v-for="slide in cards" :key="slide">
                            <Card :n="slide" />
                        </Slide>
                        <template #addons="{ slideWidth }">
                            <Navigation v-if="slideWidth > 300" />
                            <Pagination v-if="slideWidth > 300" />
                        </template>
                    </Carousel>
                </div>
            </div>
            
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
                wrapAround: true,
                snapAlign: "start"
            },
            breakpoints: {
                1230: {
                    snapAlign: "start",
                },
                375: {
                    snapAlign: "start",
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
    padding: 140px 0;
    background: #F9F9FC;
}

.inner {
    margin: 0 auto;
    max-width: $grid-breakpoint;
}

.heading {
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
    border: solid 1px $grey1;
    color: $grey2;
    border-radius: 30px;
    padding: 10px 33px;

    &.active {
        border: solid 1px $purple1;
        color: $black;
    }

    &:nth-child(2) {
        margin: 0 0 0 20px;
    }

    &:hover {
        border: solid 1px $purple1;
        color: $purple1;
    }

    &:active {
        color: $black;
    }

    &__img {
        margin: 0 0 0 5px;
        fill: currentColor;
    }
}

.carousel {
    margin: 60px 0 0;
    width: 100%;
}
</style>

<style lang="scss">
.carousel__prev,
.carousel__next {
    color: #0D0D0D;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    background: $white1;
    box-shadow: $sh_arrow;
}

.carousel__pagination {
    padding: 0;

    &-button {
        border-radius: 50%;
        height: 7px;
        width: 7px;
        background: $grey1;

        &--active {
            background: $purple2;
        }
    }
}
</style>