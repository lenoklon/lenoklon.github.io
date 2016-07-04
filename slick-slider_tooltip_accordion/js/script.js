$(document).ready(function () {
    var panel = $('.panel');

    $('.btn-slide').click(function () {
        if(panel.is(':hidden')) {       //проверяем видна ли у нас панель
            panel.slideDown();
        } else {
            panel.slideUp();
        }
    });

    $('.set a').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.content').slideUp();
        }
        else {
            $('.set a').removeClass('active');  //у всех .set a удаляем класс active
            $(this).addClass('active');         //на какой нажали - добавляем класс active
            $('.content').slideUp();
            $(this).siblings('.content').slideDown();
        }
    });

            // **Подключим плагин***
            // $('.tooltip').tooltipster();
            $('.tooltip').tooltipster({
                    theme: 'tooltipster-punk'
            });

            // ***SLIDER - SLICK - ***
        $('.your-class').slick({
            infinite:true,
            slidesToShow: 3,
            slidesToScroll: 2
        });
    });
