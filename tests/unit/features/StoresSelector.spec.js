import StoresSelector from '@/components/features/StoresSelector.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresSelector.vue', () => {
  it('Test render of buttons', () => {
    const wrapper = mount(StoresSelector, {
      localVue,
      store,
    });

    const storesSelectorButton = wrapper.find('button.stores-button');
    const citiesSelectorButton = wrapper.find('button.cities-button');

    expect(storesSelectorButton.exists()).toBe(true);
    expect(citiesSelectorButton.exists()).toBe(true);
  
    expect(wrapper.exists()).toBe(true)
  })

  it('Test changing of class of active button', async () => {
    const wrapper = mount(StoresSelector, {
      localVue,
      store,
    });

    const storesSelectorButton = wrapper.find('button.stores-button');
    const citiesSelectorButton = wrapper.find('button.cities-button');

    expect(storesSelectorButton.classes('active')).toBe(true);
    expect(citiesSelectorButton.classes('active')).toBe(false);

    await citiesSelectorButton.trigger('click');

    expect(storesSelectorButton.classes('active')).toBe(false);
    expect(citiesSelectorButton.classes('active')).toBe(true);
  })
})
