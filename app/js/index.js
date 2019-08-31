$(function() {


  // video jQuery is required to run this code
  $( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }


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

  $('.comments__btn-more').click(() => {
    $('.comments__item-box:nth-child(-n+2)').css('display', 'block');
  });

});
