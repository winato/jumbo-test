import StoresSearch from '@/components/features/StoresSearch.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresSearch.vue', () => {
  it('Sould display the input component with stores-search class', () => {
    const wrapper = mount(StoresSearch, {
      store,
      localVue,
    });

    const input = wrapper.find('input.stores-search');

    expect(wrapper.exists()).toBe(true);
    expect(input.exists()).toBe(true);
  });

  it('Should change the input value', async () => {
    const wrapper = mount(StoresSearch, {
      store,
      localVue,
    });

    const input = wrapper.find('input.stores-search');

    await input.setValue('Some value');

    expect(input.element.value).toBe('Some value');
  });
});
