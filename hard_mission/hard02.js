'use strict';
//Задание 2
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
//  b) через switch-case
//  c) через многомерный массив без ифов и switch.
// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let lang = 'ru';
let dayRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let dayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//через if
if (lang === 'ru') {
	console.log(dayRu);
} else if (lang === 'en'){
	console.log(dayEn);
} else {
	console.log('Непредвиденное значение!');
};

// через switch
switch (lang) {
	case 'ru':
		console.log(dayRu);
		break;
	case 'en':
		console.log(dayEn);
		break;
	default:
		console.log('Непредвиденное значение!');
}

//через массив

//#1
const langArray = {
	ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]);

//#2
const langArray2 = [];
	langArray2.ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
	langArray2.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArray2[lang]);

//задание на имя
let namePerson = 'Dima';
console.log((namePerson === 'Dima') ? 'Boss' : (namePerson === 'GLO') ? 'teacher' : 'измени имя');
