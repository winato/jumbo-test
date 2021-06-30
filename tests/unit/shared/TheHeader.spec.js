import { mount } from '@vue/test-utils';
import Header from '@/components/shared/TheHeader.vue';

describe('Header.vue', () => {
  it('Should render TheHeader component with logo and link', () => {
    const wrapper = mount(Header);
    const link = wrapper.find('a');
    const logo = link.find('img.logo');
  
    expect(link.exists()).toBe(true);
    expect(logo.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
  })
})
