test ('test ternary' , ()=> {

    expect(fie('GET', null)).toEqual('GET');
    expect(fie('POST', 'mybody')).toEqual('POST');
    expect(fie('DELETE', null)).toEqual('DELETE');
    expect(fie(undefined, null)).toEqual('GET');
    expect(fie(undefined, 'mybody')).toEqual('POST');
})


const fie= (method, content) => {
    return method? method: content!=null?'POST':'GET';
}
