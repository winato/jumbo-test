<template>
  <button
    class="button"
    :class="{
      active,
    }"
    @click.prevent="() => $emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'JumboButton',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

.button {
  display: block;
  background-color: white;
  border: 1px solid $gray;
  padding: 0.5rem 1.5rem;
  margin: 0.3rem;
  font-weight: 700;
  border-radius: 2rem;
  font-size: 1rem;
  transition-duration: 0.2s;
  transition-property: background-color, border, color;
  transition-timing-function: ease-in-out;
  outline: none;

  &.active,
  &:hover {
    cursor: pointer;
    background-color: black;
    border-color: black;
    color: white;
  }
}
</style>
