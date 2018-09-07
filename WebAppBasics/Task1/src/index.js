import { parseData } from './formatData';
import { getSumByField } from './proccessing';
import { totalSum } from './proccessing';
import { getAvr } from './proccessing';
import { formatNumber } from './formatData';
import printResults from './printResults';

const data = parseData();
const departmentSum = getSumByField('department');
const monthSum = getSumByField('month');

document.getElementById('total').innerText = formatNumber(totalSum(data));
printResults(getAvr(monthSum(parseData())), {id: 'monthPayment', header: 'Month'});
printResults(getAvr(departmentSum(parseData())), {id: 'departmentPayment', header: 'Department'});