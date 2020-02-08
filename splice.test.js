
test ('remove item from array', () => {

    let input = [{id: 2, name: 'dick'}, {id: 3, name: 'jens'}, {id: 4, name: 'lieve'}];

    let expected =[{id: 2, name: 'dick'},  {id: 4, name: 'lieve'}]; 

    let result = input.filter(i => i.id != 3);
    expect(result).toEqual(expected);
})