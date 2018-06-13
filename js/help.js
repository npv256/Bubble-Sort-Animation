    // Обработчик нажатия "Помощь"
    $(document).ready(function () {
        $('.help').hide();
        $('.helpButton').on("click", function () {
            if ( $('.help').is(':visible'))
            $('.help').hide(300);
            else
                $('.help').show(300);
            });
    });