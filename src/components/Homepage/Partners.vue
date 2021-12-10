<template>
    <div class="wrapper">
        <h2 class="title">С нами уже сотрудничают</h2>
        <div class="cards">
            <img class="cards__card" v-for="n in 6" :key="n" :src="require('../../assets/partner-card-' + n + '.png')" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Partners"
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #F9F9FC;
    padding: 90px 0 120px;
}

.title {
    font-size: 36px;
    line-height: 50px;
    margin: 0;
}

.cards {
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    max-width: $grid-breakpoint;
}
</style>