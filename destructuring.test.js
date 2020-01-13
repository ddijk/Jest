
test('research destructuring', () => {

    var p = { x: 'aap', y: 4 };

    var { x: a, y: b } = p;
    expect(a).toEqual('aap');
    expect(b).toEqual(4);

})


test('research destructuring array', ()=> {

    var a = [{naam:'dick', id: 1}, {naam:'jens', id: 2}];

    var actual = a.map(e=> ({ 'text': e.naam, 'id':e.id}));

    var expected = [{text: 'dick', id: 1}, {text: 'jens', id: 2}];

    expect(actual).toEqual(expected);
})