import { shallowMount } from '@vue/test-utils';
import JumboListItem from '@/components/general/JumboListItem.vue';

describe('JumboListItem.vue', () => {
  it('Should render the prop text in component', () => {
    const label = 'new message';
    const wrapper = shallowMount(JumboListItem, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
