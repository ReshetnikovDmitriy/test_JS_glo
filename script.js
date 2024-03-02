'use strict';

const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',
	asking: function() {
		appData.title = prompt('как называется ваш проект?', 'Сила Бота');
		appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
	
		do {
			let tempStr = prompt('Сколько будет стоить данная работа?', 20000);
			if (tempStr != null) {
				appData.screenPrice = parseFloat(tempStr.trim());
			}
		} while (!appData.isNumber(appData.screenPrice));
	
		appData.adaptive = (prompt('Нужен ли адаптив на сайте? (да/нет)', "да") == 'да') ? true : false;
	},
	getAllServicePrices: function () {
		let sum = 0;
		for (let i = 0; i < 2; i++) {
			let price = 0;
			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация под телефоны');
			} else if (i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация под планшеты');
			};
			do {
				price = prompt('Сколько это будет стоить?', 2000);
			} while (!appData.isNumber(price));
	
			sum += +price;
		};
		return sum;
	},
	getRollbackMessage: function(price) {
		if (price >= 30000) {
			return 'Даем скидку в 10%';
		} else if (price >= 15000 && price < 30000) {
			return 'Даем скидку в 5%';
		} else if (price > 0 && price < 15000) {
			return 'Скидка не предусмотрена';
		} else {
			return 'Что то пошло не так';
		};
	},
	getServicePercentPrices: function () {
		return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
	},
	getFullPrice: function () {
		return +appData.screenPrice + appData.allServicePrices;
	},
	getTitle: function () {
		return appData.title.trim()[0].toUpperCase() + appData.title.trim()[1].toLocaleLowerCase();
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	start: function () {
		appData.asking();
		appData.getAllServicePrices();
		appData.getFullPrice();
		appData.getServicePercentPrices();
		appData.getTitle();
		appData.logger();
	},
	logger: function () {
		for (let key in appData) {
			console.log(appData[key]);
		}
	}
};

appData.start();



// console.log(getRollbackMessage(fullPrice));
// console.log(screens);
// console.log('allServicePrices ', allServicePrices);
// console.log(fullPrice);
// console.log(servicePercentPrice);
// console.log(screenPrice);

// console.log('Стоимость вёрстки экранов ', + screenPrice + ' рублей и стоимость разработки сайта ' + servicePercentPrice + ' рублей');