<template>
  <div class="stores-selector">
    <JumboButton
      @click="onSelect('stores')"
      :active="listType === 'stores'"
    >Show stores</JumboButton>
    <JumboButton
      @click="onSelect('cities')"
      :active="listType === 'cities'"
    >Show cities</JumboButton>
  </div>
</template>

<script>
import {
  mapMutations,
  mapState,
} from 'vuex';
import JumboButton from '@/components/common/JumboButton.vue';

export default {
  name: 'StoreSelector',

  components: {
    JumboButton,
  },

  computed: {
    ...mapState('main', ['listType']),
  },

  methods: {
    ...mapMutations('main', ['setListType']),

    onSelect(type) {
      this.setListType(type);
    },
  },
};
</script>

<style scoped lang="scss">
  .stores-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>
