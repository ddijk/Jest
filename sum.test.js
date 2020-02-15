const sum = require('./sum')

test ('verify sum', () => {
   expect(sum([{amount: 1}, {amount: 4}], 'amount')).toEqual(5);
})

test ('verify sum with negative nubmers', () => {
    expect(sum([{amount: -1}, {amount: -4}], 'amount')).toEqual(5);
})