<template>
  <li class="list-item">
    {{ label }}
  </li>
</template>

<script>
export default {
  name: 'JumboListitem',

  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/_variables.scss";
  .list-item {
    display: inline-block;
    background: $yellow;
    margin: .5rem;
    padding: .4rem .5rem;
    font-weight: 900;
  }
</style>
