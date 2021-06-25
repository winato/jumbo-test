import getters from '@/store/main/getters';

test('"getStoresByName" returns only array of strings of stores names', () => {
  const state = {
    searchData: [{
      addressName: "Jumbo 's-Gravendeel van der Hoek",
    }],
  }

  expect(getters.getStoresByName(state)).toEqual(["'s-Gravendeel van der Hoek"]);
});

test('"getStoresByName" returns only array of strings of stores names', () => {
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

test('"getStoresByName" returns only array of strings of stores names', () => {
  const state = {
    searchData: [],
  }

  expect(getters.getStoresByName(state)).toEqual([]);
});

test('"getStoresByCity" returns only array of strings of stores names', () => {
  const state = {
    searchData: [{
      city: "'s-Gravendeel",
    }]
  }

  expect(getters.getStoresByCity(state)).toEqual(["'s-Gravendeel"]);
})

test('"getStoresByCity" returns only array of strings of stores names', () => {
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

test('"getStoresByCity" returns only array of strings of stores names', () => {
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

test('"getStoresByCity" returns only array of strings of stores names', () => {
  const state = {
    searchData: [],
  }

  expect(getters.getStoresByCity(state)).toEqual([]);
})
