import StoresSearch from '@/components/features/StoresSearch.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresSearch.vue', () => {
  it('Test render', async () => {
    const wrapper = mount(StoresSearch, {
      store,
      localVue,
    });

    const input = wrapper.find('input.stores-search');

    await input.setValue('asdasd');

    expect(input.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });

  it('Test changing of value in input', async () => {
    const wrapper = mount(StoresSearch, {
      store,
      localVue,
    });

    const input = wrapper.find('input.stores-search');

    await input.setValue('Some value');

    expect(input.element.value).toBe('Some value');
  });
});
