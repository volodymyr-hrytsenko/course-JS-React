let numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const name = prompt('Одинн з фільмів, переглянутих останнім часом?', ''),
        mark = prompt('Як його оціните?', '');
    if (name !== null && mark !== null && name != '' && mark != '' && name.length < 50) {
        personalMovieBD.movies[name] = mark;
    } else {
        i--;
    }
}

if (personalMovieBD.count < 10) {
    alert('Переглянуто досить мало фільмів');
} else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
    alert('Ви класичний глядач');
} else if (personalMovieBD.count >= 30) {
    alert('Ви кіноман');
} else {
    alert('Сталася помилка');
}

console.log(personalMovieBD);