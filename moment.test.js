const moment = require('moment')

describe.only("Ternary tests", ()=> {
test ("play with moment JS, ref not equal?", () =>{


    expect(moment()).not.toBe( moment());
})

// test ("play with moment JS, value equal?", () =>{


//     expect(moment()).not.toEqual( moment());
// })
test ("play with moment JS, compare serialized to String", () =>{


    const today = moment().format("DD/MM/YYYY");
    const t2 = moment().format("DD/MM/YYYY");
    expect(today).toEqual(t2);
})

test ("play with moment JS, Tripple =?", () =>{
    const today = moment().format("DD/MM/YYYY");
    const t2 = moment().format("DD/MM/YYYY");
    console.log('equal with trippel ='+ today===t2);


    expect(today===t2).toBeTruthy();
})

test ("play with moment JS, Double =?", () =>{
    const today = moment().format("DD/MM/YYYY");
    const t2 = moment().format("DD/MM/YYYY");
    console.log('equal with trippel ='+ today===t2);


    expect(today==t2).toBeTruthy();
})

test.skip ("play with moment JS, hours", ()=>{
    const today = moment("0420", "HHmm");

    expect(String(Number(today.format('hh'))+1)).toEqual("4");
})

test ("play with moment JS, months", ()=>{
    const mon = moment("20200120").format("MM");

    expect(String(Number(mon))).toEqual("1");
})
});