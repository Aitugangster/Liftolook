// ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ

function conf(title, tema) {

    $('.conf-title').text(title);
    $('.conf').addClass('conf-visible');

    $('html,body').css({
        'overflow-y': 'hidden'
    });

    $('input[name="topic"]').val(tema);
}

function closeConf() {
    $('.conf').removeClass('conf-visible');
    $('html,body').css({
        'overflow-y': 'auto'
    });
}

$('.conf')
    .click(function () { // вешаем основной обработчик на родителя
        closeconf();
    })
    .children()
    .click(function (e) { // вешаем на потомков
        e.stopPropagation(); // предотвращаем всплытие
    });