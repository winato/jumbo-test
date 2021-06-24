import { shallowMount } from '@vue/test-utils';
import JumboList from '@/components/common/JumboList.vue';
import JumboListItem from '@/components/common/JumboListItem.vue';
import faker from "faker";

describe('JumboList.vue', () => {
  it('renders JumboList.vue when passed 3 items', () => {
    const items = [
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
    ];

    const wrapper = shallowMount(JumboList, {
      propsData: { items },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(3)
  });

  it('renders JumboList.vue when passed 0 items', () => {
    const items = [];

    const wrapper = shallowMount(JumboList, {
      propsData: { items },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(0)
  });
});
