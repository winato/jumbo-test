<template>
  <div>
    <JumboList
      :items="getStoresByName"
      :loading="isLoading"
    />
  </div>
</template>

<script>
import JumboList from '@/components/common/JumboList.vue';

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
