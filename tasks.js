module.exports = isRunning

function isRunning(task) {

    return task.start && !!!task.end;
}