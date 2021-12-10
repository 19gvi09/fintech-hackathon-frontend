<template>
    <div class="card">
        <img :src="require('../../assets/service-card-' + n + '.png')" alt="card image">
        <button class="button">Подробнее</button>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        n: Number,
    }
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    //width: -width(3);
    flex-shrink: 0;
    border-radius: 10px;

    img {
        width: -width(3);

        @include breakpoint(xs) {
            width: -width(2);
        }
    }
}

.button {
    position: absolute;
    left: 52px;
    bottom: 30px;
    background: #7020DF;
    color: #FFF;
    padding: 9px 42px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    border-radius: 30px;

    @include breakpoint(xs) {
        display: none;
    }
}
</style>