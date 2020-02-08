test ('doet map een deep or shallow copy', () =>{


    let a = [{ id: 1, val: "a"}, {id: 2, val: "b"}];

    let actual = a.map(e=>e);
    a[0].val="a1";

    expect(actual[0].val).toEqual("a1");
})