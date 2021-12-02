<template>
    <Header />
    <router-view/>
    <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    name: "App",
    components: {
        Header,
        Footer
    },
}
</script>

<style lang="scss">
#app {
    font-family: Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0D0D0D;
    font-size: 16px;
}

</style>
