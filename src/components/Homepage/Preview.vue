<template>
    <div class="wrapper">
        <div class="inner">
            <div class="row">
                <div class="col">
                    <h1 class="title">Сначала просто попробуй</h1>
                    <h5 class="subtitle">Мы сделали демо-версию, чтобы можно было посмотреть, как работает наш сервис в течении 7 дней.</h5>
                    <button class="button">Поробовать бесплатно</button>
                </div>
                <img class="img" src="../../assets/preview-img.png" alt="img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preview",
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: radial-gradient(98.89% 173.8% at 5.07% 16.39%, #E0E2FB 0%, #B8A3F5 100%);
    padding: 128px 0 72px;
}

.inner {
    margin: 0 auto;
    max-width: 1230px;
}

.row {
    display: flex;
    justify-content: space-between;
}

.col {
    padding: 22px 0 0;
    text-align: left;
    color: #FFF;
}

.title {
    margin: 0;
    font-size: 72px;
    line-height: 86px;
}

.subtitle {
    margin: 20px 0 0;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
}

.button {
    background: #7020DF;
    color: #FFF;
    margin: 70px 0 0;
    padding: 9px 45px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
}

.img {
    width: 455px;
    height: 580px;
}
</style>