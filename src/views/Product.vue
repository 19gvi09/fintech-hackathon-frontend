<template>
  <PreviewProduct />
  <Service />
  <Advatages />
  <NewService />
  <MenuRequirements />
</template>


<script>
import Service from "../components/Product/Service.vue";
import PreviewProduct from "../components/Product/PreviewProduct.vue";
import Advatages from "../components/Product/Advantages.vue";
import NewService from "../components/Product/NewService.vue";
import MenuRequirements from "../components/Product/MenuRequirements.vue";

export default {
  name: "Product",
  components: {
    Service,
    PreviewProduct,
    Advatages,
    NewService,
    MenuRequirements,
  },
};
</script>
