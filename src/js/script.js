$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                    arrows: false
              }
            }
        ]
    });
    //для переключения табов
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    //функция переключения карточки товара
    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

  //модальные окна
  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function(i){
      $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
          $('.overlay, #order').fadeIn('slow');
      })
  });

      //smooth scroller icon
      $(window).scroll(function(){
        if($(this).scrollTop()>1600){
            $('.pageup').fadeIn();
        }else{
            $('.pageup').fadeOut();
        }
    });

    //Валидация формы
    function valideForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2,
          },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите своё имя",
                  minlength: jQuery.validator.format("Введите {0} символов!")
              },
              phone: "Пожалуйста, введите свой телефон",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты: name@domain.com"
              }
          }
      });
  };

  valideForms('#consultation-form');
  valideForms('#order form');
  valideForms('#consultation form');

//Маска ввода телефона
  $("input[name=phone]").mask("+7 (999) 999-99-99");