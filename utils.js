module.exports = formatTimestamp

function formatTimestamp(lastActivity) {
    var min = String(100+lastActivity.minute).substring(1);
    return '' + lastActivity.dayOfMonth + '-' + lastActivity.monthValue + '-' + lastActivity.year + ' om ' + lastActivity.hour + ':' + min;
}