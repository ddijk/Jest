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


test ('"or" test GET', ()=>{
    expect(orFie('GET')).toEqual('GET');
})
test ('"or" test GET with content null', ()=>{
    expect(orFie(undefined, null)).toEqual('GET');
})
test ('"or" test GET with content undefined', ()=>{
    expect(orFie(undefined, undefined)).toEqual('GET');
})
test ('"or" test GET with content undefined 2', ()=>{
    expect(orFie()).toEqual('GET');
})
test ('"or" test DELETE', ()=>{
    expect(orFie('DELETE')).toEqual('DELETE');
})
test ('"or" test POST', ()=>{
    expect(orFie('POST')).toEqual('POST');
})
test ('"or" test default GET without content', ()=>{
    expect(orFie()).toEqual('GET');
})
test ('"or" test default POST with content', ()=>{
    expect(orFie(undefined,'body')).toEqual('POST');
})
test ('"or" test POST with content', ()=>{
    expect(orFie('POST','body')).toEqual('POST');
})
test ('"or" test DELETE with content', ()=>{
    expect(orFie('DELETE','body')).toEqual('DELETE');
})
const orFie=(method, content)=>{
     return method || ( !!content ? 'POST' : 'GET');

}