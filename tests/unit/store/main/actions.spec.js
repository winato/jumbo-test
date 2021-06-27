import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/main/actions';

Vue.use(Vuex);

describe('actions', () => {
  let store;
  let setDataMock;

  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { 
        initialData: []
      },
      mutations: {
        setInitialData: setDataMock,
      },
      actions: {
        getInitialData: actions.getInitialData,
      }
    })
  })
  
  it('tests using a mock mutation but real store', async () => {
    store.hotUpdate({
      mutations: { setInitialData: setDataMock }
    });
    await store.dispatch('getInitialData');

    expect(setDataMock.mock.calls).toHaveLength(1);
  })
})
