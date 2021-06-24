<template>
  <li>
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
