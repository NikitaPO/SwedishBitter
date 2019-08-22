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
  	$('.comments__item-'+ commentsId).addClass('active-tab').fadeIn();
  	return false;
  });
});
