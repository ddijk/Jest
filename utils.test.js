const formatTimestamp = require('./utils')


test ('format timestamp ', ()=>{

    var lastActivity =  {
        "year": 2019,
        "month": "DECEMBER",
        "dayOfMonth": 17,
        "dayOfWeek": "TUESDAY",
        "dayOfYear": 351,
        "monthValue": 12,
        "hour": 21,
        "minute": 5,
        "second": 8,
        "nano": 731000000,
        "chronology": {
            "id": "ISO",
            "calendarType": "iso8601"
        }
    }
    expect(formatTimestamp(lastActivity)).toBe('17-12-2019 om 21:05');
})
