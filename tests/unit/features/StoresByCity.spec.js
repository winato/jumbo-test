import StoresByCity from '@/components/features/StoresByCity.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresByCity.vue', () => {
  it('Should render the ul with list class', () => {
    const wrapper = mount(StoresByCity, {
      store,
      localVue,
    });

    const list = wrapper.find('ul.list');

    expect(wrapper.exists()).toBe(true);
    expect(list.exists()).toBe(true);
  })
})
