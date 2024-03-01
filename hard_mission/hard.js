'use strict';
//занятие первое
// 1) Создать переменную num со значением 266219 (тип данных число)
// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
// 4) Вывести в консоль первые 2 цифры полученного числа

//вариант первый
let num = 266219;
let transformation = 1;

num.toString().split('').forEach(elem => transformation *= elem);
console.log(transformation);

const degree = transformation ** 3;
console.log(degree);
console.log(degree.toString().slice(0, 2));

// вариант второй
// let num = 266219;
// const result = str => {
// 	let number = 1;
// 	for (let i = 0; i < str.length; i++) {
// 		number *= str[i];
// 	}
// 	return number;
// };

// const resultShow = result(num.toString());

// console.log('2: ', resultShow);