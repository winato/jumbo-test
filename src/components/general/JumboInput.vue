<template>
  <input
    class="input"
    type="text"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :value="value"
  />
</template>

<script>
export default {
  name: 'JumboInput',

  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

.input {
  border: 1px solid $gray;
  border-radius: 2rem;
  display: flex;
  padding: 0.5rem 1rem;
  outline: none;
  display: block;
  width: 100%;

  &:focus {
    border-color: $yellow;
  }
}
</style>
