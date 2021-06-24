<template>
  <div>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'JumboListitem',

  props: {
    label: {
      type: String,
      required: true,
    }
  }
}
</script>
