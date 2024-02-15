'use strict';
let title = prompt('Как называется ваш проект');
let screens = prompt('Какие типы экранов нужно разработать: simple, difficult, interactive?');
let screenPrice = prompt('Сколько будет стоить данная работа');
let rollback = 10;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice * (rollback/100);

switch (true) {
	case fullPrice >= 30000:
		console.log('Даем скидку в 10%');
		alert('Даем скидку в 10%');
		break
	case fullPrice >= 15000 && fullPrice <= 30000:
		console.log('Даем скидку в 5%');
		alert('Даем скидку в 5%');
		break
	case fullPrice <= 15000 && fullPrice >= 0:
		console.log('Скидка не предусмотрена');
		alert('Скидка не предусмотрена');
		break
	default:
		console.log('Что то пошло не так');
		alert('Что то пошло не так');
};

// console.log('задание 1 выполнено');
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(typeof title);
// console.log(screens.length);
// console.log(screens.toLowerCase());//console.log(screens.toLowerCase().split(", "));
// console.log(screens.split());
// console.log(fullPrice * (rollback/100));//1000
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log('Откат посреднику', Math.floor(servicePercentPrice));
