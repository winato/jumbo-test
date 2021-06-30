import getters from '@/store/main/getters';

describe('main/getters/js', () => {
  it('Should return only array of strings of stores names', () => {
    const state = {
      searchData: [{
        addressName: "Jumbo 's-Gravendeel van der Hoek",
      }],
    }
  
    expect(getters.getStoresByName(state)).toEqual(["'s-Gravendeel van der Hoek"]);
  });
  
  it('Should return only array of strings of stores names', () => {
    const state = {
      searchData: [
        {
          addressName: "Jumbo 's-Gravendeel van der Hoek",
        },
        {
          addressName: "Jumbo 's-Heerenberg Stadsplein",
        }
      ]
    }
  
    expect(getters.getStoresByName(state)).toEqual(["'s-Gravendeel van der Hoek", "'s-Heerenberg Stadsplein"]);
  });
  
  it('Should return empty array of strings of stores names', () => {
    const state = {
      searchData: [],
    }
  
    expect(getters.getStoresByName(state)).toEqual([]);
  });
  
  it('Should return only array of strings of stores names', () => {
    const state = {
      searchData: [{
        city: "'s-Gravendeel",
      }]
    }
  
    expect(getters.getStoresByCity(state)).toEqual(["'s-Gravendeel"]);
  })
  
  it('Should return only array of strings of stores names', () => {
    const state = {
      searchData: [
        {
          city: "'s-Gravendeel",
        },
        {
          city: "'s-Gravendeel",
        },
      ]
    }
  
    expect(getters.getStoresByCity(state)).toEqual(["'s-Gravendeel"]);
  });
  
  it('Should return only array of strings of stores names', () => {
    const state = {
      searchData: [
        {
          city: "'s-Gravendeel",
        },
        {
          city: "Aalten",
        }
      ]
    }
  
    expect(getters.getStoresByCity(state)).toEqual(["'s-Gravendeel", "Aalten"]);
  })
  
  it('Should return empty array of strings of stores names', () => {
    const state = {
      searchData: [],
    }
  
    expect(getters.getStoresByCity(state)).toEqual([]);
  })
})

