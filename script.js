'use strict';
// let title = prompt('Как называется ваш проект?');
// let screens = prompt('Какие типы экранов нужно разработать?', "Simple, Heard, Interactive");
// let screenPrice = prompt('Сколько будет стоить данная работа?', "12000");
// let rollback = 12;
// let adaptive = confirm("Нужен ли адаптив на сайте?");
// let service1 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice1 = prompt("Сколько это будет стоить?");
// let service2 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice2 = prompt("Сколько это будет стоить?");
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

// switch (true) {
// 	case fullPrice >= 30000:
// 		alert("Даем скидку в 10%");
// 		console.log("Даем скидку в 10%");
// 		break
// 	case fullPrice >= 15000 && fullPrice < 30000:
// 		alert("Даем скидку в 5%");
// 		console.log("Даем скидку в 5%");
// 		break
// 	case fullPrice >= 0 && fullPrice < 15000:
// 		alert("Скидка не предусмотрена");
// 		console.log("Скидка не предусмотрена");
// 		break
// 	default:
// 		alert("Что то пошло не так");
// 		console.log("Что то пошло не так");
// };

//lesson01
// alert('Привет, меня зовут Дима, а тебя?');
// prompt('Смелее вводи своё имя, познакомимся поближе!');
// console.log('задание 1 выполнено');

//lesson02
// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log(screenPrice);
// console.log(fullPrice);
// console.log(screens.toLowerCase());
// console.log(screens.split(" "));
// console.log((fullPrice * (rollback/100)));

//lesson03

// console.log(title);
// console.log(screens);
// console.log(service1);
// console.log(servicePrice1);
// console.log(service2);
// console.log(servicePrice2);
// console.log("Откат посреднику", Math.floor(servicePercentPrice));

								//hard
let lang = 'ru';

if (lang = 'ru') {
	console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang = 'en') {
	console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
	console.log('неопределённое значение');
};

switch (true) {
	case lang = 'ru':
		console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
		break;
	case lang = 'en':
		console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
		break;
	default:
		console.log('неопределённое значение');
};

const langArray = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]);

let namePerson = '';
console.log((namePerson === 'Артём') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент');



