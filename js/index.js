(function(win){
  setTimeout(function(){
    $('.cover').css({
      transform:'scaleX(0)',
      transition:'all 3s',
      transitionTimingFunction:'steps(28)'
    });
  },200);
  setTimeout(function(){
    $('.text').css({
      display: 'none'
    });
    $('.container').css({
      display: 'block'
    })
  },5000);
  $(".common-btn").click(function () {
      $(".common-box").toggleClass("open");
  })
    $(".common-box").click(function () {
        $(".icon_like").addClass('click');
        setTimeout(function () {
            $(".icon_like").removeClass('click');
        },2000)
    })
})(window)