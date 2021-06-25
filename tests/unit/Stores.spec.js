import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Stores from '@/components/features/Stores.vue';
import StoresByName from '@/components/features/StoresByName.vue';
import StoresSelector from '@/components/features/StoresSelector.vue';
import StoresByCity from '@/components/features/StoresByCity.vue';
import StoresSearch from '@/components/features/StoresSearch.vue';
import mutations from '@/store/main/mutations';

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

  it('Display StoresByCity, with default listType', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
   });
   
    const wrapper = shallowMount(Stores, {
      localVue,
      store,
    });

    // Trigger the "show cities" button

    const storesSelector = wrapper.findComponent({ name: 'StoresSelector' });
    const citiesButton = storesSelector.findAllComponents({ name: 'JumboButton' });

    // console.log(citiesButton);

    expect(wrapper.findComponent(StoresByName).exists()).toBe(false)
    expect(wrapper.findComponent(StoresByCity).exists()).toBe(true)
    expect(wrapper.findComponent(StoresSelector).exists()).toBe(true)
    expect(wrapper.findComponent(StoresSearch).exists()).toBe(true)
  });
})
