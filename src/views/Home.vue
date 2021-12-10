<template>
    <Preview />
    <Offers />
    <Calculator />
</template>

<script>
import Calculator from '../components/Homepage/Calculator.vue'
import Offers from '../components/Homepage/Offers.vue'
import Preview from '../components/Homepage/Preview.vue'

export default {
    name: 'Home',
    components: {
        Preview,
        Offers,
        Calculator
    }
}
</script>
