<template>
  <div>
    <TheHeader/>
    <div class="shop-bg">
      <div class="container">
        <StoresSelector />
        <StoresSearch />
      </div>
    </div>
    <div class="container">
      <StoresByCity v-if="listType === 'cities'"/>
      <StoresByName v-if="listType === 'stores'"/>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';
import StoresByCity from '@/components/features/StoresByCity.vue';
import StoresByName from '@/components/features/StoresByName.vue';
import StoresSelector from '@/components/features/StoresSelector.vue';
import StoresSearch from '@/components/features/StoresSearch.vue';
import TheHeader from '@/components/shared/TheHeader.vue';

export default {
  name: 'Stores',

  components: {
    StoresByName,
    StoresByCity,
    StoresSelector,
    StoresSearch,
    TheHeader,
  },

  created() {
    this.getInitialData();
  },

  computed: {
    ...mapState('main', ['listType']),
  },

  methods: {
    ...mapActions('main', ['getInitialData']),
  },
};
</script>

<style scoped lang="scss">
  .shop-bg {
    padding: 5rem 0;
    background: url("../../assets/shop-image.jpeg");
    background-size: cover;
    margin-bottom: 2rem;
    background-repeat: no-repeat;
  }
</style>
