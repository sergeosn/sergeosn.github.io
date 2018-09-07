const totalSum = data => data.reduce(function(sum, cur) {
    sum += cur.amount;
    return sum;
}, 0);

const getSumByField = fieldName => data => data.reduce(function(array, cur) {
    let item = (array[cur[fieldName]]) ? array[cur[fieldName]] : {sum : 0, counts: 0};
    item.sum += cur.amount;
    item.counts += 1;
    array[cur[fieldName]] = item;
    return array;
}, []);

function getAvr(data) {
    let result = [];

    for(let item in data) {
        result[item] = data[item].sum / data[item].counts;
    }

    return result;
}

export { totalSum, getSumByField, getAvr }