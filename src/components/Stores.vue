<template>
  <div>
    <button @click.prevent="show = 'stores'">Show stores</button>
    <button @click.prevent="show = 'cities'">Show cities</button>
    <ul v-if="show === 'stores'">
      <JumboList :items="getShopsByName"/>
    </ul>
    <ul v-if="show === 'cities'">
      <JumboList :items="getShopsByCity"/>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import JumboList from './common/JumboList.vue';

export default {
  name: 'Stores',

  components: {
    JumboList,
  },

  data: () => ({
    show: '',
  }),

  created() {
    this.getInitialData();
  },

  computed: {
    ...mapGetters('main', ['getShopsByName', 'getShopsByCity']),
  },

  methods: {
    ...mapActions('main', ['getInitialData']),
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

li {
  display: inline-block;
  background: #fdc513;
  margin: 5px;
}
</style>
