// МОДАЛЬНОЕ ОКНО ОБРАТНОЙ СВЯЗИ
function popup(title, tema) {

    $('.popup-block__title').text(title);
    $('.popup').addClass('popup-visible');

    $('html,body').css({
        'overflow-y': 'hidden'
    });

    $('input[name="topic"]').val(tema);
}

function closePopup() {
    $('.popup').removeClass('popup-visible');
    $('.popup-block__item').css({
        'border-bottom': '1px solid #DFDFDF'
    });
    $('.popup-block__item-input').val('');
    $('html,body').css({
        'overflow-y': 'auto'
    });
}

$('.popup')
    .click(function () { // вешаем основной обработчик на родителя
        closePopup();
    })
    .children()
    .click(function (e) { // вешаем на потомков
        e.stopPropagation(); // предотвращаем всплытие
    });

function fosPopupSend() {
    tema = $('input[name="topic"]').val();
    err = 0;

    t1 = $('input[name="name"]').val();
    t2 = $('input[name="phone"]').val();
    t3 = $('textarea[name="text"]').val();

    if (t1 == '') {
        $('input[name="name"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid red'
        });
        err = 1;
    } else {
        $('input[name="name"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid green'
        });
    }
    if (t2 == '') {
        $('input[name="phone"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid red'
        });
        err = 1;
    } else {
        $('input[name="phone"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid green'
        });
    }
    if (t3 == '') {
        $('textarea[name="text"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid red'
        });
        err = 1;
    } else {
        $('textarea[name="text"]').closest('.popup-block__item').css({
            'border-bottom': '1px solid green'
        });
    }

    if ($('#one').prop("checked")) {} else {
        alert('Вы должны согласиться с политикой конфиденциальности!');
        err = 1;
    }


    if (err == 0) {
        $("#alerter").fadeIn(250).delay(2000).fadeOut(250);
        closePopup();

        $.ajax({
            type: "POST",
            url: "ajax/fos-popup.php",
            data: 'name=' + $('input[name="name"]').val() + '&phone=' + $('input[name="phone"]').val() + '&text=' + $('textarea[name="text"]').val() + '&tema=' + tema,
            success: function (response) {
                $('.popup-block').html(response);
            }
        });
    }
}

// ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ
function fosInputSend() {
    tema = $('input[name="topic"]').val();
    err = 0;

    t4 = $('input[name="footer-phone"]').val();

    if (t4 == '') {
        $('input[name="footer-phone"]').closest('.footer-form').css({
            'border': '1px solid red'
        });
        err = 1;
    } else {
        $('input[name="footer-phone"]').closest('.footer-form').css({
            'border': '1px solid green'
        });
    }
    if (err == 0) {

        $("#alerter").fadeIn(250).delay(2000).fadeOut(250);

        $.ajax({
            type: "POST",
            url: "ajax/fos-popup.php",
            data: 'name=' + $('input[name="name"]').val() + '&phone=' + $('input[name="phone"]').val() + '&text=' + $('textarea[name="text"]').val() + '&tema=' + tema,
            success: function (response) {
                $('.popup-block').html(response);
            }
        });
    }
}

// Маска для номера телефона

$(function () {
    Inputmask({
        mask: '~ (%99) 999-99-99',
        autoUnmask: true,
        definitions: {
            '~': {
                validator: "[78]"
            },
            '%': {
                validator: "[9]"
            }
        },
        clearIncomplete: true,
        showMaskOnHover: false
    }).mask('input[type="tel"]');
});


// ПРЕДУПРЕЖДЕНИЕ О ГАЛОЧКЕ

// function fun1() {
// var chbox;
// chbox=document.getElementById('one');
//     if (chbox.checked) {
//     }
//     else {
//         alert ('Поставьте галочку');
//     }
// }