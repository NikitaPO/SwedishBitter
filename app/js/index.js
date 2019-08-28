$(function() {

  $('.list__wrapper .tab').on('click', function(event) {
    let id = $(this).attr('data-id');
    $('.list__wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.list__wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('.item-' + id).addClass('active-tab').fadeIn();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tab[data-id=' + id + ']:after').css('display', 'block');
    return false;
  });

  $('.comments__wrapper .categories__tab').on('click', function(event) {
    let commentsId = $(this).attr('data-id');
    $('.comments__wrapper').find('.comments__item').removeClass('active-tab').hide();
    $('.comments__wrapper .comments__categories').find('.categories__tab').removeClass('active');
    $(this).addClass('active');
    $('.comments__item-' + commentsId).addClass('active-tab').fadeIn(500);
    return false;
  });

  $('.slider__content').hover(function() {
    $('.slider__bg-pice').addClass('hover');
  }, function() {
    $('.slider__bg-pice').removeClass('hover');
  });

  $('.slider__content').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $(window).scroll(function() {
    let distanceToTop = $('html').scrollTop();
    if (distanceToTop !== 0) {
      $('.toTopBtn').fadeIn(300);

    } else {
      $('.toTopBtn').fadeOut(300);
    }
  });

  $(".toTopBtn").click(function() {
    $('html').animate({
      scrollTop: 0
    }, 800);
  });

  $('html').magnificPopup({
    delegate: '.popup__link',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
