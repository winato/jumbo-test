import App from '@/components/App.vue';
import { shallowMount } from '@vue/test-utils';
import Stores from '@/components/features/Stores.vue';

describe('App.js', () => {
  it('Test render', () => {
    const wrapper = shallowMount(App);

    const stores = wrapper.findComponent(Stores);

    expect(stores.exists()).toBe(true);
    expect(wrapper.attributes().id).toBe('app');
    expect(wrapper.exists()).toBe(true);
  })
})
