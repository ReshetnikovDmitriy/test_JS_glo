'use strict';

// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

//вариант 1
// function str(arg) {
// 	if (typeof arg !== 'string') {
// 		console.log('аргумент не строка');
// 		alert('аргумент не строка');
// 		return;
// 	}
// 	arg = arg.trim();
// 	return arg.length > 30 ? arg.slice(0, 30) + '...' : arg;
// }
// str('hi........................dima,how are you');
// console.log(str('hi........................dima,how are you'));

//вариант 2
let lineRandom = 'Строка более тридцати символов - реально очень длинная строка, ну очень';
const line = arg => {
	if (typeof arg !== 'string') {
		console.log('аргумент не строка');
		alert('аргумент не строка');
		return;
	} else {
		arg = arg.trim();
		const lengthMax = 30;
		if (arg.length > lengthMax) {
			arg = arg.slice(0, 30) + '...';
		}
	}
	return arg;
};
console.log(line(lineRandom));
