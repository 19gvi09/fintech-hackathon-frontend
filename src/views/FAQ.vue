<template>
    <HeadImage />
    <All />
    <Chat/>
</template>

<script>

import HeadImage from "../components/FAQ/HeadImage.vue";
import All from "../components/FAQ/All.vue";
import Chat from "../components/FAQ/Chat.vue";


export default {
    name: 'FAQ',
     components: {
        HeadImage,
        All,
        Chat
    }
}
</script>


<style lang="scss" scoped>

</style>
