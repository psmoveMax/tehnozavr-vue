<template>
  <ul class="catalog__list">
   <ProductItem v-for="product in products" :key="products" :product="product"></ProductItem>
  </ul>

</template>

<script>
    import ProductItem from './ProductItem.vue';

    export default {
         props: ['products'],
         computed: {
          ProductListProduct(){
            return this.products;
          }
         },
        components: {
        ProductItem
      }
    };


</script>
