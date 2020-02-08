test.only ('parse time', ()=> {


    var user = {
        "name": "dick",
        "lastActivity": "2020-01-27T09:58:43.011"
    }

    var orig = [
        {
            "name": "Administrator",
            "lastActivity": {
                "hour": 10,
                "minute": 8,
                "second": 42,
                "nano": 283000000,
                "year": 2020,
                "month": "JANUARY",
                "dayOfMonth": 27,
                "dayOfWeek": "MONDAY",
                "dayOfYear": 27,
                "monthValue": 1,
                "chronology": {
                    "id": "ISO",
                    "calendarType": "iso8601"
                }
            }
        }
    ];

    var newFormat = [{"name":"Administrator","lastActivity":[2020,1,27,10,13,52,166000000]}]

    expect(user.name).toEqual('dick');

    var ts = parse(user.lastActivity);
    expect(ts).toEqual('2020');
})


const parse = (ts) => {

    return ts.substring(0, 4);
}