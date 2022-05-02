'use strict';

function createTable(rows, cols) {
	let table = document.createElement('table');
	for (let i = 0; i < rows; i++) {
		let TR = document.createElement('tr');
		table.appendChild(TR);
		for (let j = 0; j < cols; j++) {
			let TD = document.createElement('td');
			TD.innerHTML = 'hi';
			TR.appendChild(TD);
		}
	}
	return table;
}

let elem1 = document.querySelector('#elem1');
let table = createTable(3, 7);
elem1.appendChild(table);
table.style.color = 'red';