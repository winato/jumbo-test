import { mount } from '@vue/test-utils';
import Header from '@/components/features/Header.vue';

describe('Header.vue', () => {
  it('Test render', () => {
    const wrapper = mount(Header);
  
    const logo = wrapper.find('img.logo');
  
    expect(logo.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
  })
})
