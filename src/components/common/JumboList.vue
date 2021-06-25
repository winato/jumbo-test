<template>
  <ul class="list">
    <template v-if="items.length">
      <JumboListItem v-for="item in items" :key="item" :label="item"/>
    </template>
    <p v-if="!loading && !items.length" class="no-results-alert">No results</p>
    <p v-if="loading && !items.length" class="loading-alert">Loading...</p>
  </ul>
</template>

<script>
import JumboListItem from './JumboListItem.vue';

export default {
  name: 'JumboList',

  components: {
    JumboListItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .no-results-alert, .loading-alert {
    text-align: center;
  }
</style>
