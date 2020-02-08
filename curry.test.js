const curry  = require('./curry')

test ('verify curry sum', () =>{


    let curriedFie = curry((x, y, z)=> Number(x)+Number(y)+Number(z));
    expect(curriedFie(1)(2)(3)).toEqual(6);
})

test ('verify curry sum , all args at once', () =>{


    let curriedFie = curry((x, y, z)=> Number(x)+Number(y)+Number(z));
    expect(curriedFie(1,2,3)).toEqual(6);
})
test ('verify curry multiply', () =>{


    let curriedFie = curry((x, y, z )=> Number(x)*Number(y)*Number(z));
    expect(curriedFie(2)(3)(4)).toEqual(24);
})

test ('verify curry multiply, all args at once', () =>{


    let curriedFie = curry((x, y, z )=> Number(x)*Number(y)*Number(z));
    expect(curriedFie(2,3,4)).toEqual(24);
})