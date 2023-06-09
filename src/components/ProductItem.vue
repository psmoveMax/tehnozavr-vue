<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}" >
      <img :src="product.image" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price | numberFormat }} ₽
    </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="{ color }">
          <span class="colors__value" :style="{ backgroundColor: colors[color - 1].color }">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>


<script>
import gotoPage from '@/helpers/gotoPage';
import colors from '@/data/colors';
import numberFormat from '@/helpers/numberFormat';
import router from '@/router';

export default {
    props: ["product"],
    filters: {
        numberFormat,
    },
    computed: {
        colors() {
            return colors;
        }
    },
    methods: {
        gotoPage
    },
    components: { router }
};

</script>
