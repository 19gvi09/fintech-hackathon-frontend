<template>
    <div class="wrapper">
        <div class="heading">
            <h2 class="heading__title">Подбери сам</h2>
            <p class="heading__subtitle">Здесь можно подобрать любую услугу самостоятельно.<br>Можно сделать это здесь или посмотреть каталог.<br>Также вы можете оставить заявку <span style="font-weight: 700">здесь</span>, наш консультант свяжется с вами и подберет услугу по вашим пожеланиям.</p>
        </div>
        <div class="content">
            <div class="tabs">
                <div>
                    <button class="tabs__tab" :class="{ active: isActive === 'personal' }" @click="setTab('personal')">Для частных лиц</button>
                    <button class="tabs__tab" :class="{ active: isActive === 'business' }" @click="setTab('business')">Для бизнеса</button>
                </div>
                <div class="tabs__content">
                    <div class="section">
                        <h3 class="section__title">Шаг 1. Выбери услугу</h3>
                        <div class="section__content">
                            <button class="button" :class="{ active: selectedService === 'mortgage' }" @click="setService('mortgage')">Платеж по ипотеке</button>
                            <button class="button" :class="{ active: selectedService === 'credit' }" @click="setService('credit')">Платеж по кредиту</button>
                            <button class="button" :class="{ active: selectedService === 'deposit' }" @click="setService('deposit')">Доход по вкладу</button>
                        </div>
                    </div>
                    <div class="section">
                        <h3 class="section__title">Шаг 2. Выбери кого-нибудь</h3>
                        <div class="section__content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calculator",
    data() {
        return {
            isActive: "personal",
            selectedService: "mortgage",
        }
    },
    methods: {
        setTab(state) {
            this.isActive = state
        },
        setService(state) {
            this.selectedService = state
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 0 auto;
    padding: 90px 0;
    max-width: 1230px;
}

.heading {
    max-width: 660px;
    margin: 0 auto;

    &__title {
        font-size: 36px;
        line-height: 50px;
        margin: 0;
    }

    &__subtitle {
        line-height: 28px;
        margin: 30px 0 0;
    }
}

.content {
    margin: 90px 0 0;

    .tabs {
        &__tab {
            font-size: 18px;
            line-height: 30px;
            width: 50%;
            padding: 20px 0;
            background: #F9F9FC;
            border-radius: 20px 20px 0 0;

            &.active {
                background: #FFF;
                box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.02);
            }
        }

        &__content {
            padding: 90px 75px 70px;
            box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.02);

            .section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 140px 0 0;

                &:first-child {
                    margin: 0;
                }

                &__title {
                    font-size: 20px;
                    line-height: 30px;
                    margin: 0;
                }

                &__content {
                    margin: 40px 0 0;

                    > .button {
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
                }
            }
        }
    }
}
</style>