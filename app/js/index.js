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

  $('.wrapper .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
  	$('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  	$('.wrapper .tabs').find('.tab').removeClass('active');
  	$(this).addClass('active');
  	$('#'+id).addClass('active-tab').fadeIn();
  	return false;
  });
});
