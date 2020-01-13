
test('spread without space', () => {
    const a= [1,2,4];
    expect([1,2,4,6]).toEqual([...a, 6]);
})


test('spread with space', () => {
    const a= [1,2,4];
    expect([1,2,4,6]).toEqual([... a, 6]);
})

test('spread with space, nested array', () => {
    const a= [1,2,4];
   expect([[1,2,4],6]).toEqual([ a, 6]);
})