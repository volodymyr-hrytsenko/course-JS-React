/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    ganre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => item.remove());

ganre.textContent = 'ДРАМА';

console.log(poster);
poster.style.backgroundImage = 'url("../img/bg.jpg")';

let generateListMovies = function () {
    movieList.innerHTML = '';
    movieDB.movies.sort().forEach((item, i) => {
        const li = document.createElement('li'),
            div = document.createElement('div');
        li.classList.add('promo__interactive-item');
        li.textContent = `${i+1}. ${item}`;
        div.classList.add('delete');
        li.append(div);
        movieList.append(li);
    });
}

generateListMovies();