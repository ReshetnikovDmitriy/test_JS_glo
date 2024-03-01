'use strict';
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const showTypeOf = function(variable) {
	console.log(variable, typeof variable);
};

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
	title = prompt('как называется ваш проект?', 'Сила Бота');
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

	do {
		let tempStr = prompt('Сколько будет стоить данная работа?');
		if (tempStr !== null) {
			screenPrice = parseFloat(tempStr.trim());
		}
	} while (!isNumber(screenPrice));
	// console.log(screenPrice);
	adaptive = (prompt('Нужен ли адаптив на сайте? (да/нет)', 'да') == 'да') ? true : false;
};

const getAllServicePrices = function () {
	let sum = 0;
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация под телефоны');
		} else if (i === 1) {
			service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация под планшеты');
		};
		sum += +prompt('Сколько это будет стоить?', 2000);
	};
	return sum;
};

const getFullPrice = function () {
	return screenPrice + allServicePrices;
};

const getTitle = function () {
	return title.trim()[0].toUpperCase() + title.trim()[1].toLocaleLowerCase();
};

const getServicePercentPrices = function () {
	return fullPrice - (fullPrice * (rollback / 100));
};

const getRollbackMessage = function(price) {
	if (price >= 30000) {
		return 'Даем скидку в 10%';
	} else if (price >= 15000 && price < 30000) {
		return 'Даем скидку в 5%';
	} else if (price > 0 && price < 15000) {
		return 'Скидка не предусмотрена';
	} else {
		return 'Что то пошло не так';
	};
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log('allServicePrices ', allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(screenPrice);

console.log('Стоимость вёрстки экранов ', + screenPrice + ' рублей и стоимость разработки сайта ' + servicePercentPrice + ' рублей');