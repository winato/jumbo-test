import { shallowMount } from '@vue/test-utils';
import JumboListItem from '@/components/common/JumboListItem.vue';

describe('JumboListItem.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'new message';
    const wrapper = shallowMount(JumboListItem, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
