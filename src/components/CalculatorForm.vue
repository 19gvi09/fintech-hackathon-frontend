<template>
    <div class="wrapper">
        <div class="row" v-if="this.$route.path === '/'">
            <div class="col">
                <h3 class="title">Шаг 1. Выбери услугу</h3>
                <div class="container">
                    <button class="button" :class="{ active: selectedService === 'mortgage' }" @click="setService('mortgage')">Платеж по ипотеке</button>
                    <button class="button" :class="{ active: selectedService === 'credit' }" @click="setService('credit')">Платеж по кредиту</button>
                    <button class="button" :class="{ active: selectedService === 'deposit' }" @click="setService('deposit')">Доход по вкладу</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3 class="title">Шаг 2. Выбери кого-нибудь</h3>
                <Carousel class="container carousel" :settings="settings"  :breakpoints="breakpoints">
                    <Slide v-for="n in 9" :key="n">
                        <div class="card" :class="{ active: selectedCompany === n }" @click="setCompany(n)">
                            <img :src="require('../assets/logo-card-' + n + '.png')" alt="card image">
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="row">
            <div class="col left">
                <h3 class="title">Шаг 3. Настрой его</h3>
                <div class="container">
                    <div class="slider">
                        <h4 class="slider__title">1. Сумма кредита</h4>
                        <input type="range" :min="min" :max="max" v-model="firstSlider" class="slider__input" :style="{background: 'linear-gradient(to right, #562CD3 0%, #562CD3 ' + 100*firstSlider/max + '%, #F9F9FC ' + 100*firstSlider/max + '%, #F9F9FC 100%)'}">
                        <div class="slider__value">
                            <span>{{firstSlider + "р"}}</span>
                        </div>
                    </div>
                    <div class="slider">
                        <h4 class="slider__title">1. Сумма кредита</h4>
                        <input type="range" :min="min" :max="max" v-model="secondSlider" class="slider__input" :style="{background: 'linear-gradient(to right, #562CD3 0%, #562CD3 ' + 100*secondSlider/max + '%, #F9F9FC ' + 100*secondSlider/max + '%, #F9F9FC 100%)'}">
                        <div class="slider__value">
                            <span>{{secondSlider + "р"}}</span>
                        </div>
                    </div>
                    <div class="slider">
                        <h4 class="slider__title">1. Сумма кредита</h4>
                        <input type="range" :min="min" :max="max" v-model="thirdSlider" class="slider__input" :style="{background: 'linear-gradient(to right, #562CD3 0%, #562CD3 ' + 100*thirdSlider/max + '%, #F9F9FC ' + 100*thirdSlider/max + '%, #F9F9FC 100%)'}">
                        <div class="slider__value">
                            <span>{{thirdSlider + "р"}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col right">
                <h3 class="title">Шаг 4. Оформи</h3>
                <div class="container">
                    <div class="block">
                        <div class="block__text">
                            <h6 class="block__title">Иформация по параметру</h6>
                            <h6 class="block__span">1567 рублей</h6>
                        
                            <h6 class="block__title">Иформация по параметру</h6>
                            <h6 class="block__span">3 года</h6>
                        
                            <h6 class="block__title">Иформация по параметру</h6>
                            <h6 class="block__span">10 %</h6>
                        </div>
                        <button class="button">Перейти к оформлению</button>
                    </div>
                    <p class="note">* Пример расчёта процентной ставки носит исключительно информационный характер и не является публичной офертой</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "CalculatorForm",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        
    },
    data() {
        return {
            selectedService: "mortgage",
            selectedCompany: 1,
            settings: {
                itemsToShow: 5,
                wrapAround: true,
                snapAlign: 'start',
            },
            breakpoints: {
                1230: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                }
            },
            min: 0,
            max: 1000000,
            firstSlider: 0,
            secondSlider: 0,
            thirdSlider: 0
        }
    },
    methods: {
        setService(state) {
            this.selectedService = state
        },
        setCompany(state) {
            this.selectedCompany = state
        }
    },
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: space-between;
    margin: 140px 0 0;

    &:first-child {
        margin: 0;
    }

    .col {
        display: flex;
        flex-direction: column;
        text-align: left;

        &.left {
            width: -margin(4);
        }

        &.right {
            width: -margin(5);
        }
    }

    .title {
        font-size: 20px;
        line-height: 30px;
        margin: 0;
    }

    .container {
        margin: 40px 0 0;

        .button {
            padding: 10px 34px;
            border: solid 1px #E5E5E5;
            border-radius: 30px;
            margin: 0 20px 0 0;

            &.active {
                color: #FFF;
                background: #562CD3;
                border: solid 1px #562CD3;
            }
        }

        .note {
            margin: 20px 0 0;
            font-weight: 300;
            line-height: 24px;
            color: #333333;
        }
    }

    .block {
        display: flex;
        flex-direction: column;
        padding: 30px;
        border-radius: 20px;
        background: radial-gradient(75.59% 128.72% at 15.77% 17.95%, #E0E4FB 0%, #CCC8F9 100%);

        &__text {
            color: #333333;
        }

        &__title {
            font-size: 18px;
            font-weight: 300;
            line-height: 30px;
            margin: 0;
        }

        &__span {
            margin: 0 0 30px;
            font-size: 32px;
            font-weight: 700;
            line-height: 50px;
        }

        .button {
            margin: 0 auto;
            color: #FFF;
            background: #562CD3;
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            padding: 13px 50px;
            box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.25);
        }
    }

    .carousel {
        max-width: calc($grid-breakpoint - 150px);

        .card {
            background: #F9F9FC;
            border-radius: 10px;
            cursor: pointer;
            box-sizing: border-box;

            &.active {
                border: 2px solid #562CD3;
            }
        }
    }
    
    .slider {
        

        &__title {
            margin: 0 0 18px;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
        }

        &__input {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 4px;
            outline: none;
            opacity: 0.85;
            -webkit-transition: .2s;
            transition: opacity .2s;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }

            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                background: #562CD3;
                border: 4px solid rgba(86, 44, 211, .5);
                border-radius: 50%;
                background-clip: padding-box;
            }

            &::-moz-range-thumb {
                width: 10px;
                height: 10px;
                background: #562CD3;
                border: 4px solid rgba(86, 44, 211, .5);
                background-clip: padding-box;
            }

            &::-ms-fill-lower {
                background: #562CD3;
            }
        
            &::-moz-range-progress {
                background: #562CD3;
            }
        }

        &__value {
            display: flex;
            justify-content: flex-end;
            padding: 18px 0 0;

            span {
                text-align: center;
                border: 1px solid #F9F9FC;
                border-radius: 10px;
                padding: 9px 20px;
                color: #808080;
                width: 130px;
            }
        }
    }
}
</style>