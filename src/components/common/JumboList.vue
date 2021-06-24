<template>
  <ul>
    <JumboListItem v-for="item in items" :key="item" :label="item"/>
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
  },
};
</script>
