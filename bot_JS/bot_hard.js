'use strict';
const getRandomInt = function (max) {
	return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function () {
	let numberR = getRandomInt(100);
	console.log('numberR: ', numberR);
	let attempts = 10;
	const game = function () {
		attempts--;
		if (attempts < 0) {
			if (confirm('Попытки закончились, хотите сыграть еще?')) {
				start();
			} else {
				alert('До свидания');
				return;
			};
		} else {
			const num = prompt('"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)');
			if (num === null) {
				alert('До свидания');
				game();
			};
			if (isNum(num)) {
				const realNum = +num;
				if (realNum > numberR) {
					alert(`Загаданное число меньше, осталось попыток: ${attempts}`);
					game();
				} else if (realNum < numberR) {
					alert(`Загаданное число больше, осталось попыток: ${attempts}`);
					game();
				} else {
					if (confirm('Вы угадали! Сыграем ещё?')) {
						start();
					} else {
						alert('До свидания');
						return;
					}
				};
			} else {
				alert('Введите число');
				game();
			};
		};
	};
	console.dir(game);
	game();
};

start();