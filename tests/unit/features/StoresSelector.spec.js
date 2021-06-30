import StoresSelector from '@/components/features/StoresSelector.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('StoresSelector.vue', () => {
  it('Should display component inself', () => {
    const wrapper = mount(StoresSelector, {
      localVue,
      store,
    });

    expect(wrapper.exists()).toBe(true)
  })
  
  it('Should display two buttons of selector', () => {
    const wrapper = mount(StoresSelector, {
      localVue,
      store,
    });

    const storesSelectorButton = wrapper.find('button.stores-button');
    const citiesSelectorButton = wrapper.find('button.cities-button');

    expect(storesSelectorButton.exists()).toBe(true);
    expect(citiesSelectorButton.exists()).toBe(true);
  })

  it('Should change active button', async () => {
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
