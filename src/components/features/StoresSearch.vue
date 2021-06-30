<template>
  <JumboInput
    class="stores-search"
    placeholder="Search"
    @input="onSearch"
  />
</template>

<script>
import { mapMutations } from 'vuex';
import JumboInput from '@/components/common/JumboInput.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'StoresSearch',

  components: {
    JumboInput,
  },

  methods: {
    ...mapMutations('main', ['setSearch']),

    onSearch(search) {
      this.debouncedInput(search, this);
    },

    debouncedInput: debounce((search, that) => {
      that.setSearch(search);
    }, 500),
  },
};
</script>

<style scoped lang="scss">
.stores-search {
  width: 100%;
  max-width: 500px;
  margin: 0 auto 2rem;
}
</style>
