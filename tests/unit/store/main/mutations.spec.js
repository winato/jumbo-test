import mutations from '@/store/main/mutations';
import faker from "faker";

test('Test "setInitialData" mutation', () => {
  const state = {
    initialData: [],
    listType: '',
  };

  const mockData = [{
    addressName: faker.datatype.string(),
    city: faker.address.city(),
    collectionPoint: faker.datatype.boolean(),
    complexNumber: faker.datatype.number(),
    latitude: faker.address.latitude(),
    locationType: faker.datatype.string(),
    longitude: faker.address.longitude(),
    postalCode: faker.address.zipCode(),
    sapStoreID: faker.datatype.string(),
    showWarningMessage: faker.datatype.boolean(),
    street: faker.datatype.string(),
    street2: faker.datatype.string(),
    street3: faker.datatype.string(),
    sundayOpen: faker.datatype.boolean(),
    todayClose: faker.datatype.datetime(),
    todayOpen: faker.datatype.datetime(),
    uuid: faker.datatype.uuid(),
  }];

  mutations.setInitialData(state, mockData);

  expect(state.initialData).toBe(mockData);
})

test('Test "setListType" mutation', () => {
  const state = {
    initialData: [],
    listType: '',
  };

  mutations.setListType(state, 'cities');
  expect(state.listType).toBe('cities');

  mutations.setListType(state, 'stores');
  expect(state.listType).toBe('stores');
})
