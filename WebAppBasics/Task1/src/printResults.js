import { formatNumber } from "./formatData";

export default function printResults(data, properties) {
    let div = document.getElementById(properties['id']);
    let tbl  = document.createElement('table');
    tbl.className = "table table-striped table-bordered";
    tbl.style.width  = '400px';
    let tr = tbl.insertRow();
    let td = tr.insertCell();
    td.innerHTML = properties['header'];
    td.style.fontWeight = 'bold';
    td = tr.insertCell();
    td.innerHTML = 'Avg.Payment';
    td.style.fontWeight = 'bold';
    td.style.textAlign = 'right';

    for(let item in data) {
        tr = tbl.insertRow();
        td = tr.insertCell();
        td.innerText = item;
        td = tr.insertCell();
        td.style.textAlign = 'right';
        td.innerText = formatNumber(data[item]);
    }

    div.appendChild(tbl);
}