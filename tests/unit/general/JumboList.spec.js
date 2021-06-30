import { shallowMount } from '@vue/test-utils';
import JumboList from '@/components/general/JumboList.vue';
import JumboListItem from '@/components/general/JumboListItem.vue';
import faker from "faker";

describe('JumboList.vue', () => {
  it('Should render JumboList.vue when passed 3 items and is not loading', () => {
    const items = [
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
    ];

    const wrapper = shallowMount(JumboList, {
      propsData: { items, loading: false },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(3)
  });

  it('Should render JumboList.vue when passed 0 items and list is not loading', () => {
    const items = [];

    const wrapper = shallowMount(JumboList, {
      propsData: { items, loading: false },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(0)
  });

  it('Should render JumboList.vue when passed 0 items and list is loading', () => {
    const items = [];

    const wrapper = shallowMount(JumboList, {
      propsData: { items, loading: true },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(0)
    expect(wrapper.find('.no-results-alert').exists()).toBe(false);
    expect(wrapper.find('.loading-alert').exists()).toBe(true);
  });

  it('Should render JumboList.vue when passed 3 items but list is loading', () => {
    const items = [
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
    ];

    const wrapper = shallowMount(JumboList, {
      propsData: { items, loading: true },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(3)
    expect(wrapper.find('.no-results-alert').exists()).toBe(false);
    expect(wrapper.find('.loading-alert').exists()).toBe(false);
  });

  it('Should render JumboList.vue when passed 0 items and list is not loading', () => {
    const items = [];

    const wrapper = shallowMount(JumboList, {
      propsData: { items, loading: false },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(0)
    expect(wrapper.find('.no-results-alert').exists()).toBe(true);
    expect(wrapper.find('.loading-alert').exists()).toBe(false);
  });

  it('Should show no results when items prop didn`t passed', () => {
    const wrapper = shallowMount(JumboList, {
      propsData: { loading: false },
    });
    
    expect(wrapper.findAllComponents(JumboListItem).length).toBe(0)
    expect(wrapper.find('.no-results-alert').exists()).toBe(true);
    expect(wrapper.find('.loading-alert').exists()).toBe(false);
  });
});
