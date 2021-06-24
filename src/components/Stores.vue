<template>
  <div>
    <button @click.prevent="selectListType('stores')">Show stores</button>
    <button @click.prevent="selectListType('cities')">Show cities</button>
    <JumboList :items="getShopsByName" v-if="listType === 'stores'"/>
    <JumboList :items="getShopsByCity" v-if="listType === 'cities'"/>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';
import JumboList from './common/JumboList.vue';

export default {
  name: 'Stores',

  components: {
    JumboList,
  },

  created() {
    this.getInitialData();
  },

  computed: {
    ...mapGetters('main', ['getShopsByName', 'getShopsByCity']),
    ...mapState('main', ['listType']),
  },

  methods: {
    ...mapActions('main', ['getInitialData']),
    ...mapMutations('main', ['setListType']),

    selectListType(type) {
      this.setListType(type);
    },
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
