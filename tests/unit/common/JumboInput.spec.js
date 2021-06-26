import { shallowMount } from '@vue/test-utils';
import JumboInput from '@/components/common/JumboInput.vue';

describe('JumboInput.vue', () => {
  it('Test input', async () => {
    const wrapper = shallowMount(JumboInput);
    const textInput = wrapper.find('input[type="text"]');
    const value = 'Some value';

    await textInput.setValue(value);

    expect(textInput.element.value).toBe(value);
    expect(wrapper.emitted('input')[0]).toEqual([value]);
  });
  
  it('Test placeholder', () => {
    const placeholderText = 'Some placeholder'
    const wrapper = shallowMount(JumboInput, {
      propsData: {
        placeholder: placeholderText,
      }
    });
    const textInput = wrapper.find('input[type="text"]');

    expect(textInput.attributes('placeholder')).toBe(placeholderText);
  });
});
