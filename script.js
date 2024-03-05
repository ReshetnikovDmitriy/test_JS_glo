'use strict';

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	start: function () {
		appData.asking();
		appData.addPrices();
		appData.getFullPrice();
		appData.getServicePercentPrices();
		appData.getTitle();
		appData.logger();
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	isStr: function (str) {
		return isNaN(str);
	},
	asking: function() {
		appData.title = appData.askCheck('как называется ваш проект?', appData.isStr);


		for (let i = 0; i < 2; i++) {
			let name = appData.askCheck('Какие типы экранов нужно разработать?', appData.isStr);
			let price = +appData.askCheck('Сколько будет стоить данная работа?', appData.isNumber);
			appData.screens.push({ id: i, name: name, price: price, });
		}

		for (let i = 0; i < 2; i++) {
			let name = appData.askCheck('Какой дополнительный тип услуги нужен?', appData.isStr);
			let price = +appData.askCheck('Сколько будет стоить данная работа?', appData.isNumber);
			appData.services[i + '-' + name] = price;
		}
		
		appData.adaptive = (prompt('Нужен ли адаптив на сайте? (да/нет)', "да") == 'да') ? true : false;
	},
	askCheck: function (question, callback) {
		let answer = '';
		do {
			let tempStr = prompt(question);
			if (tempStr != null && tempStr != '') {
				answer = tempStr.trim();
			}
		} while (answer == '' || !callback(answer));
		return answer;
	},
	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price;
		};
		for (let key in appData.services) {
		appData.allServicePrices += appData.services[key];
		};
	},
	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
	},
	getTitle: function () {
		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim()[1].toLocaleLowerCase();
	},
	getRollbackMessage: function (price) {
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
	logger: function () {
		for (let key in appData) {
			console.log(appData[key]);
		};
		console.log(appData.screens);
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