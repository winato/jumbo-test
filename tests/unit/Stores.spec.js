import Vuex from 'vuex'
import { shallowMount, shallow, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Stores from '@/components/features/Stores.vue';
import StoresByName from '@/components/features/StoresByName.vue';
import StoresSelector from '@/components/features/StoresSelector.vue';
import StoresByCity from '@/components/features/StoresByCity.vue';
import StoresSearch from '@/components/features/StoresSearch.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Test Stores.vue", () => {
  it('Display StoresByName, with default listType', () => {
    const wrapper = shallowMount(Stores, {
      localVue,
      store,
    });
    expect(wrapper.findComponent(StoresByName).exists()).toBe(true)
    expect(wrapper.findComponent(StoresByCity).exists()).toBe(false)
    expect(wrapper.findComponent(StoresSelector).exists()).toBe(true)
    expect(wrapper.findComponent(StoresSearch).exists()).toBe(true)
  });
})
