<template>
  <PreviewProduct />
  <Advatages style="background: #F9F9FC"/>
  <NewService />
  <MenuRequirements />
  <Form />
</template>


<script>
import PreviewProduct from "../components/Product/PreviewProduct.vue";
import Advatages from "../components/Advantages.vue";
import NewService from "../components/Product/NewService.vue";
import MenuRequirements from "../components/Product/MenuRequirements.vue";
import Form from '../components/Product/Form.vue';

export default {
  name: "Product",
  components: {
    PreviewProduct,
    Advatages,
    NewService,
    MenuRequirements,
    Form,
  },
};
</script>

