<template>
  <div>
    <JumboListItem v-for="item in items" :key="item" :label="item"/>
  </div>
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
