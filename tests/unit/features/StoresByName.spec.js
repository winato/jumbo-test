import StoresByName from '@/components/features/StoresByName.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresByName.vue', () => {
  it('Should render the ul with list class', () => {
    const wrapper = mount(StoresByName, {
      store,
      localVue,
    });

    const list = wrapper.find('ul.list');

    expect(wrapper.exists()).toBe(true);
    expect(list.exists()).toBe(true);
  })
})
