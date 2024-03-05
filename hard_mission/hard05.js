'use strict';

// Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const weekAr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

document.addEventListener("DOMContentLoaded", (event) => {

	const weekList = document.querySelector(".week-list");

	let writeWeek = function () {
		const today = getCurrenDay();
		console.log(today);
		for (let i = 0; i < weekAr.length; i++) {
			if (i < 5) {
				if (weekAr[i] == today) {
					weekList.insertAdjacentHTML('beforeend', '<li><b>' + weekAr[i] + '</b></li>');
					console.log(weekAr[i]);
				} else {
					weekList.insertAdjacentHTML('beforeend', '<li>' + weekAr[i] + '</li>');
				}
			} else {
				if (weekAr[i] == today) {
					weekList.insertAdjacentHTML('beforeend', '<li style="font-style: italic\;"><b>' + weekAr[i] + '</b></li>');
				} else {
					weekList.insertAdjacentHTML('beforeend', '<li style="font-style: italic\;">' + weekAr[i] + '</li>');
				}
			}
		}
	}

	let getCurrenDay = function () {
		const date = new Date();
		const options = { weekday: 'long' };
		let dayOfWeek = date.toLocaleString('ru-RU', options);
		let char = dayOfWeek[0];
		dayOfWeek = char.toUpperCase() + dayOfWeek.substring(1);

		return dayOfWeek;
	}

	writeWeek();
});



