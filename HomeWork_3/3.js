"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function max(number1, number2, number3) {
	let maxNumber = number1;

	if (maxNumber < number2) {
		maxNumber = number2;
	}
	if (maxNumber < number3) {
		maxNumber = number3;
	}

	return maxNumber;
}

const number1 = prompt("Введите первое число");
const number2 = prompt("Введите второе число");
const number3 = prompt("Введите третье число");

const result = max(number1, number2, number3);
console.log(
	`Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${result}.`
);