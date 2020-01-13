const isRunning = require('./tasks')

test('Verify grouping of tasks', ()=>{


    const tasks=[
        {
            "name": "Export uren",
            "id": 1,
            "start": "11-01-2020 12:00:00",
            "end": null,
            "status": "PLANNED",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        },
        {
            "name": "AV offline",
            "id": 2,
            "start": "13-01-2020 12:00:00",
            "end": null,
            "status": "PLANNED",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        },
        {
            "name": "Taak 3",
            "id": 3,
            "start": "08-01-2020 12:00:00",
            "end": "09-01-2020 12:00:00",
            "status": "COMPLETED",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        },
        {
            "name": "Taak 4",
            "id": 4,
            "start": "08-01-2020 12:00:00",
            "end": "09-01-2020 12:00:00",
            "status": "FAILED",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        },
        {
            "name": "Taak 5",
            "id": 5,
            "start": "09-01-2020 12:00:00",
            "end": null,
            "status": "RUNNING",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        },
        {
            "name": "Taak 6",
            "id": 6,
            "start": "10-12-2019 12:00:00",
            "end": "20-12-2019 12:00:00",
            "status": "COMPLETED",
            "jobDetail": "exp_uren",
            "planning": "Dagelijks om 14 uur"
        }
    ];

    expect(isRunning(tasks[0])).toBe(true);
    expect(isRunning(tasks[1])).toBe(true);
    expect(isRunning(tasks[2])).toBe(false);
    expect(isRunning(tasks[3])).toBe(false);
    expect(isRunning(tasks[4])).toBe(true);
    expect(isRunning(tasks[5])).toBe(false);
})