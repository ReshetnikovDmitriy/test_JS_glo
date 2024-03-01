'use strict';

// Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
const arr = ['112', '22', '333', '44', '555', '655', '777'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
		console.log(arr[i]);
	}
};

// Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Рядом с каждым числом написать оба делителя данного числа
// Например: “Делители этого числа: 1 и n”
// for (let i = 1; i <= 100; i++) {
// 	for (let j = 0; j < 0; j++) {
// 		if (i % j == 0) break;
// 		console.log(j);
// 	}
// 	console.log(i);
// };

const dividers = el => {
	let arres = [];
	if (el !== 1) {
		arres.push(1);
		for (let j = 2; j * j <= el; j++) {
			arres.push(j);
		};
	};
	arres.push(el);
	return arres;
};
for (let i = 1; i <= 100; i++) {
	const n = dividers(i);
	if (n.length <= 2) {
		console.log(`${i}: Простое число. Делители этого числа: ${n.join(', ')}`);
	};
};
for (let i = 1; i <= 100; i++) {
	console.log(`${i}: Делители этого числа: ${dividers(i).join(', ')}`);
};



