    // Время начала генерации значений
    let timeStartGenerate = new Date().getTime();
    let sort = new Sort();

    // Обработчик нажатия кнопки сортировки
    $(document).ready(function () {
        $('.sortButton').on("click", function () {
            if (new Date().getTime() > timeStartGenerate + 3000) {
                let index = 0;
                $('.count').each(function () {
                    $(this).text();
                    sort.arr[index] = $(this).text();
                    index++;
                });
                sort.bubbleSort(sort.arr);
            }
        });
    });
