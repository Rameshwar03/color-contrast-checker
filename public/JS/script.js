/************************************************************/
setInterval(function () {
  $('.color').each(function () {
    var rColor = '#' + Math.random().toString(16).substr(2, 6);
    $(this).css('background-color', rColor);
    $(this).children('.color--').text(rColor);
  });
}, 1500);

$('.color').click(function () {
  var input = $('<input>');
  var color = $(this).children('.color--').text();
  $('body').append(input);
  input.val(color).select();
  document.execCommand('copy');
  input.remove();
  $('.copied').fadeIn().delay(500).fadeOut();
});

/*****************************************************************/

// $('.refresh')
//   .click(function () {
//     $('.color2').each(function () {
//       var rColor = '#' + Math.random().toString(16).substr(2, 6);
//       $(this).css('background-color', rColor);
//       $(this).children('.color--1').text(rColor);
//     });
//   })
//   .trigger('click');

// $('.color2').click(function () {
//   var input = $('<input>');
//   var color = $(this).children('.color--1').text();
//   $('body').append(input);
//   input.val(color).select();
//   document.execCommand('copy');
//   input.remove();
//   $('.copied').fadeIn().delay(500).fadeOut();
// });

/***********************************************************/

// setInterval(function () {
//   document.querySelector('.social-follow').textContent = 'Follow';
// }, 1000);
// setInterval(function () {
//   document.querySelector('.social-follow').textContent = '🤗🤗🤗';
// }, 2000);
