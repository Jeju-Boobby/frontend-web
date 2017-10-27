// $('div').css('background-color', 'black');

var $body = $(document.body);
var $top = "";

$top = $('<div>').text('^').addClass('top').hide().click(function() {
  $body.animate({'scrollTop' : '0'});
  console.log('scrollTop');
}).appendTo($body);

$(window).scroll(function() {
  var y = $(this).scrollTop();

  if (y > 100) {
    $top.fadeIn();
  } else {
    $top.fadeOut();
  }
})
