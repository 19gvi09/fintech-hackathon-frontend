<template>
    <Preview />
    <Advantages />
    <Offers />
    <Calculator />
    <Partners />
</template>

<script>
import Calculator from '../components/Homepage/Calculator.vue'
import Offers from '../components/Homepage/Offers.vue'
import Partners from '../components/Homepage/Partners.vue'
import Preview from '../components/Homepage/Preview.vue'
import Advantages from '../components/Advantages.vue'

export default {
    name: 'Home',
    components: {
        Preview,
        Offers,
        Calculator,
        Partners,
        Advantages
    }
}
</script>
