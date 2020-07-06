'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add');

    adv.forEach(item => item.remove());

    ganre.textContent = 'ДРАМА';

    poster.style.backgroundImage = 'url("../img/bg.jpg")';

    const deleteMovie = (event) => {
        const movie = event.target.parentElement.textContent.split('. ');
        movieDB.movies.forEach((el, index) => {
            if (index === +movie[0] - 1) {
                movieDB.movies.splice(index, 1);
                generateListMovies();
            }
        });
    };

<<<<<<< HEAD
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
};
=======
    const addEvent = () => {
        movieList.querySelectorAll('.delete').forEach(el => {
            el.addEventListener('click', deleteMovie);
        });
    };

    const generateListMovies = function () {
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
        addEvent();
    };
>>>>>>> project_mBD

    generateListMovies();

    form.lastElementChild.addEventListener('click', (event) => {
        event.preventDefault();

        let input = form.querySelector('.adding__input'),
            favorite = form.querySelector('[type="checkbox"]').checked;

        if (input.value === '') {
            return false;
        }
        (input.value.length > 21) ? movieDB.movies.push(input.value.slice(0, 21) + '...'): movieDB.movies.push(input.value);
        input.value = '';
        generateListMovies();
        if (favorite) {
            console.log('Добавляємо улюблений фільм');
        }
    });
});