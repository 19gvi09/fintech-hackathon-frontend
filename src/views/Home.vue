<template>
    <div class="home">
        <Preview />
        <Offers />
        <Calculator />
    </div>
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
