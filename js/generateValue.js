

    // Анимация генерации значений
    $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: getRandomInt(10, 100)
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });

    // Функция возвращающая рандомное значение
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
