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
let allServicePrices;

const getAllServicePrices = function() {
	return servicePrice1 + servicePrice2;
};

function getFullPrice() {
	return screenPrice + allServicePrices;
};

function getTitle() {
	return title.trim()[0].toUpperCase() + title.trim().substr(1).toLocaleLowerCase();
};

function getServicePercentPrices() {
	return fullPrice - fullPrice * (rollback/100);
};
//функция для примера
const showTypeOf = function(variable) {
	console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
	if (price >= 30000) {
		return 'Даем скидку в 10%';
	} else if (price >= 15000 && price < 30000) {
		return 'Даем скидку в 5%';
	} else if (price <= 15000 && price >= 0) {
		return 'Скидка не предусмотрена';
	} else {
		return 'Что то пошло не так';
	}
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);

console.log(getRollbackMessage(fullPrice));
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(typeof title);
console.log(screens.length);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей ");
