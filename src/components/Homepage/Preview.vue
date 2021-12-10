<template>
    <div class="wrapper">
        <div class="inner">
            <div class="row">
                <div class="col">
                    <h1 class="title">Сначала просто попробуй</h1>
                    <h5 class="subtitle">В нашем сервисе можно забронировать предложение и в течении 7-ми дней отказаться без потерь</h5>
                    <button class="button">
                        Попробовать
                        <svg class="button__arrow" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H12M12 5L8 1M12 5L8 9" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
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
    background: $radial;
    padding: 108px 0 120px;
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
    max-width: -cols(6);
    padding: 42px 0 0;
    text-align: left;
    color: $white1;
}

.title {
    margin: 0;
    font-size: 72px;
    line-height: 86px;
}

.subtitle {
    margin: 40px 0 0;
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
}

.button {
    background: $purple1;
    color: $white1;
    box-shadow: $sh_btn;
    margin: 50px 0 0;
    padding: 9px 42px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;

    &:hover {
        box-shadow: $sh_btn-hover;
    }

    &:active {
        background: $purple_dark1;
    }

    &__arrow {
        margin: 0 0 0 5px;
    }
}

.img {
    width: 100%;
    max-width: 455px;
}
</style>