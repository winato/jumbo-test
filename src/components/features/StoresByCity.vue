<template>
  <JumboList
    class="stores-by-city"
    :items="getStoresByCity"
    :loading="isLoading"
  />
</template>

<script>
import JumboList from '@/components/general/JumboList.vue';
import {
  mapState,
  mapGetters,
} from 'vuex';

export default {
  name: 'StoresByCity',

  components: {
    JumboList,
  },

  computed: {
    ...mapGetters('main', ['getStoresByCity']),
    ...mapState('main', ['isLoading']),
  },
};
</script>
