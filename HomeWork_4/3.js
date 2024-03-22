"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr = [];

for (let i = 0; i < 5; i++) {
	const randomNumber = Math.floor(Math.random() * 10);
	arr.push(randomNumber);
}

console.log("arr: ", arr);

const sum1 = arr.reduce((a, b) => a + b, 0);
let sum2 = 0;
for (let n of arr) {
	sum2 += n;
}
console.log("sum: ", sum1, sum2);

const min1 = Math.min(...arr);
let min2 = arr[0];
for (let i of arr) {
	if (i < min2) {
		min2 = i;
	}
}
console.log("min: ", min1, min2);

const indexesOf3 = [];
arr.forEach((item, i) => {
	if (item === 3) {
		indexesOf3.push(i);
	}
});
console.log("array of indexes of 3: ", indexesOf3);