import mutations from '@/store/main/mutations';
import faker from "faker";

describe('main/mutations.js', () => {
  it('Should set data to state', async () => {
    const state = {
      initialData: [],
      searchData: [],
      isLoading: true,
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
  
    await mutations.setInitialData(state, mockData);
  
    expect(state.searchData).toBe(mockData);
    expect(state.isLoading).toBe(false);
    expect(state.initialData).toBe(mockData);
  })
  
  it('Should change listType in store', async () => {
    const state = {
      listType: '',
    };
  
    await mutations.setListType(state, 'cities');
    expect(state.listType).toBe('cities');
  
    await mutations.setListType(state, 'stores');
    expect(state.listType).toBe('stores');
  })
  
  it('Should set searchData depends on initial state', async () => {
    const state = {
      initialData: [
        {
          city: 'Amsterdam',
        },
        {
          city: 'Amersfoort'
        },
        {
          city: 'Utrecht',
        }
      ],
      listType: 'cities',
    };
  
    const searchString = 'Am';
  
    await mutations.setSearch(state, searchString);
    
    expect(state.search).toBe(searchString);
  
    expect(state.searchData).toEqual([
      {
        city: 'Amsterdam',
      },
      {
        city: 'Amersfoort',
      },
    ])
  })
  
  it('Should set empty array when searched value doesn`t excists', async () => {
    const state = {
      initialData: [
        {
          city: 'Amsterdam',
        },
        {
          city: 'Amersfoort'
        },
        {
          city: 'Utrecht',
        }
      ],
      listType: 'cities',
    };
  
    const searchString = 'New-York';
  
    await mutations.setSearch(state, searchString);
    expect(state.search).toBe(searchString);
  
    expect(state.searchData).toEqual([])
  });
  
  
  it('Should set empty array when data is empty', async () => {
    const state = {
      initialData: [],
      listType: 'cities',
    };
  
    const searchString = 'New-York';
  
    await mutations.setSearch(state, searchString);
    expect(state.search).toBe(searchString);
  
    expect(state.searchData).toEqual([])
  });
})

