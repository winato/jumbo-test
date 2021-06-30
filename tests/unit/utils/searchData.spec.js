import searchData from '@/utils/searchData.js';

describe('searchData.js', () => {
  it('Should filter the list by substring', () => {
    const items = [
      {
        name: 'John',
      },
      {
        name: 'Jack',
      },
      {
        name: 'Lewis',
      }
    ];

    const searchedData = searchData({
      data: items,
      text: 'J',
      param: 'name',
    });

    expect(searchedData).toEqual([
      {
        name: 'John',
      },
      {
        name: 'Jack',
      },
    ]);
  })

  it('Shouldn`t fing any results', () => {
    const items = [
      {
        name: 'John',
      },
      {
        name: 'Jack',
      },
      {
        name: 'Lewis',
      }
    ];

    const searchedData = searchData({
      data: items,
      text: 'Some random string',
      param: 'name',
    });

    expect(searchedData).toEqual([]);
  })
})
