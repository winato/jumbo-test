<template>
  <div>
    <StoresSelector />
    <StoresSearch />
    <StoresByCity v-if="listType === 'cities'"/>
    <StoresByName v-if="listType === 'stores'"/>
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

export default {
  name: 'Stores',

  components: {
    StoresByName,
    StoresByCity,
    StoresSelector,
    StoresSearch,
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
