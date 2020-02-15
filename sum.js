module.exports = sum

function sum (array, sumField) {
    return array.reduce((acc, e) => Math.abs(e[sumField]) + acc, 0);
}