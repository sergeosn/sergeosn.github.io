import readFile from './data';

function parseData() {
    const fileData = readFile().trim().split('\n');

    let properties = fileData[0].toLowerCase().split(',');
    let result = [];

    for (let i = 1; i < fileData.length; i++) {
        result.push(fileData[i].split(',').reduce(function(array, cur, i) {
            array[properties[i]] = (properties[i] !== 'amount') ? cur : parseFloat(cur);
            return array;
        }, {}));
    }

    return result;
}

function formatNumber(number) {
    return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}

export { parseData, formatNumber};