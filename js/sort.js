class Sort {
    constructor() {
        this.arr = [];
        this.sortStep = false;
        this.sorted = false;
        this.step = 0;
        this.delay = 1400;
    }

    // Функция сортировки
    bubbleSort(items) {
        if (!this.sorted) {
            let length = items.length;
            let n = length - 1;
            do {
                this.sortStep = false;
                for (var j = 0; j < (n); j++) {
                    if (items[j] > items[j + 1]) {
                        this.swapFunction(j);
                        this.sortStep = true;
                    }
                }
                this.doSetTimeout(this.markerCircleSort, n);
                n--;
            }
            while (this.sortStep);
            this.sorted = true;
            this.doSetTimeout(this.finishSort, this.step);
        }
    }

    // Индикация отсортированных кругов
    markerCircleSort(n) {
        let circle = $('.circle' + '#' + n);
        circle.css('background-color', '#5dd55d')
            .animate({"left": "+=17px"}, 150)
            .animate({"left": "-=34px"}, 150)
            .animate({"left": "+=17px"}, 150)
    }

    // Функция замены значений
    swapFunction(index) {

        let tmp = this.arr[index];
        this.arr[index] = this.arr[index + 1];
        this.arr[index + 1] = tmp;
        this.doSetTimeout(this.swapAnimation, index);
        this.step += 1;

    }

    // Анимация по окончанию всей сортировки
    finishSort() {

        $('.circle').each(function () {
            $(this).finish()
                .animate({"left": "+=17px"}, 150)
                .animate({"left": "-=17px"}, 150)
                .animate({"left": "-=17px"}, 150)
                .animate({"left": "+=17px"}, 150)
                .css('background-color', '#5dd55d');
        });

    }

    doSetTimeout(func, i) {
        setTimeout(func, (this.delay * this.step), i)
    }

    // Аниманция замены двух значений
    swapAnimation(index) {

        let firstCircle = $('.circle' + '#' + index);
        firstCircle.animate({"top": "-=200px"}, 500)
            .animate({"left": "+=107px"}, 300)
            .animate({"top": "+=200px"}, 500);

        let secondCircle = $('.circle' + '#' + (index + 1));
        secondCircle.animate({"top": "-=200px", "background-color": 'red'}, 500)
            .animate({"left": "-=107px"}, 300)
            .animate({"top": "+=200px"}, 500);

        firstCircle.attr("id", "" + (index + 1));
        secondCircle.attr("id", "" + index);
    }
}