'use strict';

$(function(){

// que.html 選択肢labelクリックで発火
$('label').on('click', function(){
  var index = $('li.active .que__btn label').index(this) + 1,
      li = 'li.active .que__btn label:nth-of-type(' + index + ')';
      console.log(index);
  $('li.active .que__btn label').removeClass('active');
  $(li).addClass('active');
});


// que.html submitボタンクリックで発火
$('.submit').on('click', function(e){
  var val = parseInt($('li.active input[type=radio]:checked').val()) + 1,
      li = 'li:nth-of-type(' + val + ')';

  // 発火した時クリック
  if (val < 20){
    $('ul#que > li').removeClass('active');
    $(li).addClass('active');
  } else {
    val -= 1;
    location.href = '../html/result/result_' + val + '.html';
  }
});


var resultHeight = $('.result-area__image').width();
console.log(resultHeight);
$('.js-height').css('height', resultHeight);


});