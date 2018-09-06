import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

  /**
    * Block animate
    */

  if ($('.app-header').length > 0) {
    if ($(window).width() > 768) {

      if ($(window).scrollTop() < 200) {
        $('body').css('overflow', 'hidden');
      }

      setTimeout(function () {
        $('.menu').css('display', 'flex').addClass('slideInRight');
        $('body').css('overflow-y', 'visible');
      }, 1000);

    }
  }

  $('.header-banner-item').addClass('animated slideInLeft');


  var windowHeight = $(window).height();

  if ($('#course').length > 0) {
    console.log($('.app-header'));
  }

  $(window).on('scroll', function () {

    if ($('#course').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#course').offset().top) {
        $('.menu').removeClass('slideInRight');
        $('.course-item__img').eq(0).addClass('animated slideInLeft');
        $('.course-item__img').eq(1).addClass('animated slideInUp');
        $('.course-item__img').eq(2).addClass('animated slideInRight');
      }
    }
    if ($('#test').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#test').offset().top) {
        $('.test-img').addClass('animated zoomIn');
        $('.test-item').addClass('animated zoomIn');
      }
    }
    if ($('#events').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#events').offset().top) {
        $('.directions-content').addClass('animated bounceOutLeft').removeClass('active bounceInLeft');
        $('.directions').removeClass('active');
        $('#events').addClass('animated slideInRight');
      }
    }
    if ($('#blog').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#blog').offset().top) {
        $('.blog-item-img').addClass('animated zoomIn');
        $('.blog-item').addClass('animated slideInLeft');
      }
    }
    if ($('#reviews').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#reviews').offset().top) {
        $('.reviews-slider-item-img').addClass('animated zoomIn');
        $('.reviews-slider-item-content').addClass('animated slideInUp');
      }
    }
    if ($('#app-footer').length > 0) {
      if ($(this).scrollTop() + windowHeight >= $('#app-footer').offset().top) {
        $('.footer-item').addClass('animated slideInLeft');
        $('.footer-img').addClass('animated slideInRight');
      }
    }
  });

  /**
   * Burger Menu
   */
  var burgerMenu = $('.burger-menu');
  var burgerMenuSecondary = $('.burger-menu--secondary');
  var headerHeight = $('#header-banner').height();

  $(burgerMenu).on('click', function () {
    var menu = $('.menu');
    $(this).toggleClass('active');
    if (menu.is(':visible')) {
      menu.toggleClass('active slideInDown');
    }

    if (!$(this).hasClass('active')) {
      menu.addClass('slideInUp');
    } else {
      menu.removeClass('slideInUp');
    }
  })

  $(document).on('scroll', function () {
    if ($(this).scrollTop() > headerHeight) {
      $(burgerMenu).addClass('is-fixed');
    } else {
      $(burgerMenu).removeClass('is-fixed');
    }
  });

  if ($(window).width() < 768) {
    $('.menu').css('display', 'none');
    $(document).on('scroll', function () {
      if ($(this).scrollTop() > headerHeight) {
        $('.menu').css('display', 'flex');
      } else {
        $('.menu').css('display', 'none');
      }
    });
  }

  /**
   * Burger menu secondary
   */
  $(burgerMenuSecondary).on('click', function () {
    var menuSecondary = $('.menu--secondary');
    $(this).toggleClass('active');
    if (menuSecondary.is(':visible')) {
      menuSecondary.slideUp();
    } else {
      menuSecondary.slideDown().css('display', 'flex');
    }
  })




  /**
   * Tabs
   */
  $('ul.directions-content-list').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.directions-content').find('div.directions-content-item').removeClass('active animated zoomIn').eq($(this).index()).addClass('active animated zoomIn');
  });

  if ($(window).width() > 768) {
    $('.course-item').on('click', '.more-info', function (e) {
      e.preventDefault();
      $(this).closest('#course').find('div.directions-content').removeClass('bounceOutLeft active animated bounceInLeft').eq($(this).data('number')).addClass('active animated bounceInLeft');
      $('.directions').toggleClass('active');
    });
  }

  $('.directions-change__title').on('click', function () {
    $(this).closest('#course').find('div.directions-content').removeClass('bounceOutLeft active animated bounceInLeft').eq($(this).data('value')).addClass('active animated bounceInLeft');
    $('.directions').addClass('active');
  });


  $('.directions-content-img-return').on('click', function () {
    $(this).parents('.directions-content').addClass('animated bounceOutLeft').removeClass('active bounceInLeft');
    $(this).parents('.directions').removeClass('active');
  })

  $('.close-directions').on('click', function () {
    $(this).parents('.directions-content').addClass('animated bounceOutLeft').removeClass('active bounceInLeft');
    $(this).parents('.directions').removeClass('active');
  });

  /**
   * Scroll link
   */

  $(".scroll-link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id.length > 1) {

      var top = $(id).offset().top;

      $('body,html').animate({ scrollTop: top }, 1500);
    }
  });

  /**
   * Forms
   */
  $('.form-control').on('focus', function () {
    $(this).parent().addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('in-focus');
    } else {
      $(this).parent().removeClass('in-focus');
    }
  });

  $('#form-records').on('submit', function (e) {
    e.preventDefault();
    $('.form-modal').addClass('active');
    $('.form-modal-content').addClass('active');

    setTimeout(function () {
      $('.form-modal-content').removeClass('active');
    }, 2800)
  })

  /**
   * Tabs
   */
  $('ul.course-open-item-nav-list').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.course-open-item').find('div.course-open-item-content').removeClass('active animated slideInLeft').eq($(this).index()).addClass('active animated slideInLeft');
  });

})(jQuery)

/**
 * Events Slider
 */
if ($('.events-slider')) {

  var elem1 = document.querySelector('.events-slider');
  if (elem1) {

    const flkty1 = new Flickity(elem1, {

      prevNextButtons: false,
      cellAlign: 'left',
      contain: false,
      draggable: false
    });


    var nextArrowEvents = document.querySelector('.slider-arrow-right');

    nextArrowEvents.addEventListener('click', function () {
      flkty1.previous(false, false);
    });

    var prevArrowEvents = document.querySelector('.slider-arrow-left');

    prevArrowEvents.addEventListener('click', function () {
      flkty1.next(false, false);
    });

  }
}

/**
 * Reviews Slider
 */
if ($('.reviews-slider')) {

  var elem2 = document.querySelector('.reviews-slider');
  if (elem2) {

    const flkty2 = new Flickity(elem2, {

      prevNextButtons: false,
      cellAlign: 'left',
      contain: false,
      draggable: true,
      cellSelector: '.reviews-slider-item'

    });

  }
}


/**
 * Secondary products Slider
 */
if ($('.secondary-products-slider')) {

  var elem3 = document.querySelector('.secondary-products-slider');
  if (elem3) {

    const flkty3 = new Flickity(elem3, {

      prevNextButtons: false,
      cellAlign: 'left',
      contain: false,
      draggable: true,
      cellSelector: '.secondary-products-slider-item'

    });

  }
}

/**
 * Secondary blog Slider
 */
if ($('.secondary-blog-slider')) {

  var elem4 = document.querySelector('.secondary-blog-slider');
  if (elem4) {

    const flkty4 = new Flickity(elem4, {

      prevNextButtons: false,
      cellAlign: 'left',
      contain: false,
      draggable: true,
      cellSelector: '.secondary-blog-slider-item'

    });

  }
}

/**
 * Events Slider
 */
if ($('.cooperation-slider')) {

  var elem5 = document.querySelector('.cooperation-slider');
  if (elem5) {

    const flkty5 = new Flickity(elem5, {

      prevNextButtons: false,
      cellAlign: 'center',
      contain: false,
      draggable: true,
      initialIndex: 1,
      wrapAround: true,
      adaptiveHeight: true,
      cellSelector: '.cooperation-slider-item'
    });


    var nextArrowCooperation = document.querySelector('.slider-arrow-right');

    nextArrowCooperation.addEventListener('click', function () {
      flkty5.previous(false, false);
    });

    var prevArrowCooperation = document.querySelector('.slider-arrow-left');

    prevArrowCooperation.addEventListener('click', function () {
      flkty5.next(false, false);
    });

  }
}


