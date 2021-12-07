<template>
    <Carousel class="inner" :settings="settings"  :breakpoints="breakpoints">
        <Slide v-for="slide in cards" :key="slide">
            <Card :n="slide" />
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from './Card.vue';

import 'vue3-carousel/dist/carousel.css';

export default {
    name: "Slider",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Card,
    },
    props: {
        cards: Number,
    },
    data() {
        return {
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
    }
}
</script>

<style lang="scss" scoped>
.inner {
    margin: 0 auto;
    max-width: 1230px;
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