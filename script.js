let numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let num = 0;

while (num < 2) {
    const name = prompt('Одинн з фільмів, переглянутих останнім часом?', ''),
        mark = prompt('Як його оціните?', '');
    personalMovieBD.movies[name] = mark;
    num++;
}

console.log(personalMovieBD);