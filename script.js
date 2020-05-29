let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const name = prompt('Одинн з фільмів, переглянутих останнім часом?', ''),
            mark = prompt('Як його оціните?', '');
        if (name !== null && mark !== null && name != '' && mark != '' && name.length < 50) {
            personalMovieBD.movies[name] = mark;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieBD.count < 10) {
        alert('Переглянуто досить мало фільмів');
    } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
        alert('Ви класичний глядач');
    } else if (personalMovieBD.count >= 30) {
        alert('Ви кіноман');
    } else {
        alert('Сталася помилка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieBD.genres.push(prompt(`Ваш улюблений жанр номером ${i}`, ''));
    }
}

writeYourGenres();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieBD);
    }
}

showMyBD(personalMovieBD.privat);