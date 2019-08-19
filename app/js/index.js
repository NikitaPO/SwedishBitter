$(function() {

  $('.list__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.list__wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.list__wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('.item-' + id).addClass('active-tab').fadeIn();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tab[data-id=' + id + ']:after').css('display', 'block');
    return false;
  });
  // 
  // $('.slider__content').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true
  // });

});
