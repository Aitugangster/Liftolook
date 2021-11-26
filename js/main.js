// --ПЕРВЫЙ СЛАЙДЕР И ВТОРОЙ---------------------------

$(".regular").slick({
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1029,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

// --ДЛЯ КОГО ПОДХОДИТ---------------------------

$(".regular1").slick({
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 2048,
      settings: "unslick"
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

// --ТРЕТИЙ СЛАЙДЕР---------------------------

$(".regular2").slick({
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1029,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

// --ЧЕТВЕРТЫЙ СЛАЙДЕР---------------------------

$('.regular4').slick({
  rows: 2,
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
  infinite: true,
  // speed: 300,
  variableWidth: true,
  responsive: [{
      breakpoint: 767,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    },
  ]

});

// --ПЯТЫЙ СЛАЙДЕР---------------------------

$(".regular5").slick({
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1029,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

// ХОВЕР ЭФФЕКТ ДЛЯ ОТЗЫВОВ

$(function () {
  $(".zoomed").css("opacity", "0");
  $(".zoomed").hover(function () {
      $(this).stop().animate({
        opacity: 0.8
      }, "500");
    },

    function () {
      $(this).stop().animate({
        opacity: 0
      }, "500");
    });
});

// ПЛАВНЫЙ ЯКОРЬ

$("#menu").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top - 100
  }, 1500);
  $('.menu').removeClass('menu-visible');
  $('.header-burger').css('display', 'block');
});

// КНОПКА НАВЕРХ

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});

// ВЫБОР ФОРМАТОВ

$('.a2-row').hover(function () {
  $('.a2').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a2').css('border', 'none');
});

$('.a3-row').hover(function () {
  $('.a3').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a3').css('border', 'none');
});

$('.a4-row').hover(function () {
  $('.a4').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a4').css('border', 'none');
});

$('.a4-long-row').hover(function () {
  $('.a4-long').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a4-long').css('border', 'none');
});

$('.a5-row').hover(function () {
  $('.a5').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a5').css('border', 'none');
});

$('.a6-row').hover(function () {
  $('.a6').css('border', '1.5px solid #D13A52');
}, function () {
  $('.a6').css('border', 'none');
});

$('.bar-left-row').hover(function () {
  $('.bar-left').css('border', '1.5px solid #D13A52');
}, function () {
  $('.bar-left').css('border', 'none');
});

// БУРГЕР

$('.header-burger').on('click', function () {
  $('.header-burger__close').css('display', 'block');
  $('.menu').addClass('menu-visible');
  $('.phone_mini').css('display', 'none');
  $(this).css('display', 'none');
});

$('.header-burger__close').on('click', function () {
  $(this).css('display', 'none');
  $('.menu').removeClass('menu-visible');
  $('.phone_mini').css('display', 'block');
  $('.header-burger').css('display', 'block');
});