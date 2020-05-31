const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieBD.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const name = prompt('Одинн з фільмів, переглянутих останнім часом?', ''),
                mark = prompt('Як його оціните?', '');
            if (name !== null && mark !== null && name != '' && mark != '' && name.length < 50) {
                personalMovieBD.movies[name] = mark;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieBD.count < 10) {
            alert('Переглянуто досить мало фільмів');
        } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            alert('Ви класичний глядач');
        } else if (personalMovieBD.count >= 30) {
            alert('Ви кіноман');
        } else {
            alert('Сталася помилка');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let ganer = prompt(`Ваш улюблений жанр номером ${i}`, '');
            // if (ganer === '' || ganer == null) {
            //     i--;
            // } else {
            //     personalMovieBD.genres.push(ganer);
            // }
            let ganer = prompt(`Введіть улюблені жанри чарез кому`, '').toLowerCase();
            if (ganer === '' || ganer == null) {
                i--;
            } else {
                personalMovieBD.genres = ganer.split(', ');
            }
        }

        personalMovieBD.genres.sort();
        personalMovieBD.genres.forEach((item, i) => console.log(`Улюблений жанр №${i+1} - це ${item}`));
    },
    toggleVisibleMyBD: function () {
        if (personalMovieBD.privat) {
            personalMovieBD.privat = false;
        } else {
            personalMovieBD.privat = true;
        }
    },
    showMyBD: function (hidden) {
        if (!hidden) {
            console.log(personalMovieBD);
        }
    }
};

personalMovieBD.start();
// personalMovieBD.rememberMyFilms();
// personalMovieBD.detectPersonalLevel();
personalMovieBD.writeYourGenres();
personalMovieBD.toggleVisibleMyBD();
personalMovieBD.showMyBD(personalMovieBD.privat);