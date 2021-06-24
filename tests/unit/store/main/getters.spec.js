import getters from '@/store/main/getters'

test('"getShopsByName" returns only array of strings of shops names', () => {
  const state = {
    initialData: [{
      addressName: "Jumbo 's-Gravendeel van der Hoek",
    }]
  }

  expect(getters.getShopsByName(state)).toEqual(["'s-Gravendeel van der Hoek"]);
});

test('"getShopsByName" returns only array of strings of shops names', () => {
  const state = {
    initialData: [
      {
        addressName: "Jumbo 's-Gravendeel van der Hoek",
      },
      {
        addressName: "Jumbo 's-Gravendeel van der Hoek",
      },
    ]
  }

  expect(getters.getShopsByName(state)).toEqual(["'s-Gravendeel van der Hoek"]);
});

test('"getShopsByName" returns only array of strings of shops names', () => {
  const state = {
    initialData: [
      {
        addressName: "Jumbo 's-Gravendeel van der Hoek",
      },
      {
        addressName: "Jumbo 's-Heerenberg Stadsplein",
      }
    ]
  }

  expect(getters.getShopsByName(state)).toEqual(["'s-Gravendeel van der Hoek", "'s-Heerenberg Stadsplein"]);
});

test('"getShopsByName" returns only array of strings of shops names', () => {
  const state = {
    initialData: [],
  }

  expect(getters.getShopsByName(state)).toEqual([]);
});

test('"getShopsByCity" returns only array of strings of shops names', () => {
  const state = {
    initialData: [{
      city: "'s-Gravendeel",
    }]
  }

  expect(getters.getShopsByCity(state)).toEqual(["'s-Gravendeel"]);
})

test('"getShopsByCity" returns only array of strings of shops names', () => {
  const state = {
    initialData: [
      {
        city: "'s-Gravendeel",
      },
      {
        city: "'s-Gravendeel",
      },
    ]
  }

  expect(getters.getShopsByCity(state)).toEqual(["'s-Gravendeel"]);
});

test('"getShopsByCity" returns only array of strings of shops names', () => {
  const state = {
    initialData: [
      {
        city: "'s-Gravendeel",
      },
      {
        city: "Aalten",
      }
    ]
  }

  expect(getters.getShopsByCity(state)).toEqual(["'s-Gravendeel", "Aalten"]);
})

test('"getShopsByCity" returns only array of strings of shops names', () => {
  const state = {
    initialData: [],
  }

  expect(getters.getShopsByCity(state)).toEqual([]);
})
