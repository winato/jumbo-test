<template>
  <div id="app">
    <Stores  />
  </div>
</template>

<script>
import Stores from '@/components/features/Stores.vue';

export default {
  name: 'App',
  components: {
    Stores,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
