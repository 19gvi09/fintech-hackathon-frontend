<template>
    <div class="wrapper">
        <div class="heading">
            <h2 class="heading__title">Подбери сам</h2>
            <p class="heading__subtitle">Здесь можно подобрать любую услугу самостоятельно.<br>Можно сделать это здесь или посмотреть каталог.<br>Также вы можете оставить заявку <span style="font-weight: 700">здесь</span>, наш консультант свяжется с вами и подберет услугу по вашим пожеланиям.</p>
        </div>
        <div class="content">
            <div class="inner">
                <CalculatorForm />
            </div>
        </div>
    </div>
</template>

<script>
import CalculatorForm from '../CalculatorForm.vue'
export default {
    name: "Form",
    components: {
        CalculatorForm
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 0 auto;
    max-width: $grid-breakpoint;
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
    margin: 60px 0 0;

    .inner {
        padding: 50px -width(1) 90px;
        box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.02);
    }
}
</style>
