import { shallowMount } from '@vue/test-utils';
import JumboButton from '@/components/general/JumboButton.vue';

describe('JumboButton.vue', () => {
  it('Should trigger the cleck event', async () => {
    const wrapper = shallowMount(JumboButton);
    const button = wrapper.find('button');

    await button.trigger('click');
    
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('Should render the slot with text', () => {
    const slot = 'Button'
    const wrapper = shallowMount(JumboButton, {
      slots: {
        default: [slot]
      }
    });
    
    expect(wrapper.text()).toBe(slot);
  });

  it('Should toggle the active class to button', async () => {
    const isActive = true;

    const wrapper = shallowMount(JumboButton, {
      propsData: {
        active: isActive,
      },
    });

    expect(wrapper.classes('active')).toBe(true)

    await wrapper.setProps({ active: false })

    expect(wrapper.classes('active')).toBe(false)
  });
});
