<template>
  <JumboList
    class="stores-by-name"
    :items="getStoresByName"
    :loading="isLoading"
  />
</template>

<script>
import JumboList from '@/components/general/JumboList.vue';

import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  name: 'StoresByName',

  components: {
    JumboList,
  },

  computed: {
    ...mapGetters('main', ['getStoresByName']),
    ...mapState('main', ['isLoading']),
  },
};
</script>
