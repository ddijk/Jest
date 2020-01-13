
const floatParser = require('./FloatParser')

test ('handle NaN 1', () => {
    expect(floatParser(6,3)).toBe(2);
})

test ('handle NaN 2', () => {
    expect(floatParser(undefined,2)).toBe(NaN);
})

test ('handle NaN 3', () => {
    expect(floatParser(2,'')).toBe(Infinity);
})

test ('handle NaN 4', () => {
    expect(floatParser('',2)).toBe(0);
})