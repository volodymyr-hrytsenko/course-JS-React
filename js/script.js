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
    ],

    generateListMovies: function () {
        const promoInteractiveList = document.querySelector('.promo__interactive-list');
        movieDB.movies.forEach((item, i) => {
            const li = document.createElement('li'),
                div = document.createElement('div');
            li.classList.add('promo__interactive-item');
            li.textContent = `${i+1}. ${item}`;
            div.classList.add('delete');
            li.append(div);
            promoInteractiveList.append(li);
        });
    }
};

document.querySelector('.promo__bg').style.cssText = 'background: url(../img/bg.jpg) center center/cover; background-position: top;';

movieDB.generateListMovies();