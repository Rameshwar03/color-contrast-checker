$('.square').click(function () {
  var input = $('<input>');
  var color = $(this).children('.child--').text();
  $('body').append(input);
  input.val(color).select();
  document.execCommand('copy');
  input.remove();
  $('.copied-').fadeIn().delay(500).fadeOut();
});
