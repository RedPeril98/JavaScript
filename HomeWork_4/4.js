"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

const rows = 5;

for (let i = 1; i <= rows; i++) {
	console.log("x".repeat(i));
}

console.log("----------");

for (let i = 0; i < rows; i++) {
	let s = "";
	for (let j = 0; j <= i; j++) {
		s += "x";
	}
	console.log(s);
}
