import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Stores from '@/components/Stores.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Stores", () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      getInitialData: jest.fn(),
    }
    store = new Vuex.Store({
      modules: {
        namespaced: true,
        main: {
          actions,
        },
      },
    })
  });

  it("should call getInitialData methods when component is created", () => {
    const wrapper = mount(Stores, { store, localVue })
    expect(actions.getInitialData).toBeCalledTimes(1);
   })
})
