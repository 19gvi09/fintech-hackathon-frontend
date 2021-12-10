<template>
  <div class="All">
    <AboutUs />
    <HowWorkService />
    <Troubleshooting/>
  </div>
</template>

<script>
import AboutUs from "./AboutUs.vue";
import HowWorkService from "./HowWorkService.vue"
import Troubleshooting from "./Troubleshooting.vue"
export default {
  name: "All",
  components: {
    AboutUs,
    HowWorkService,
    Troubleshooting
  },
};
</script>

<style lang="scss" scoped>
.All {
  max-width: 1440px;
  margin: auto;
}
</style>