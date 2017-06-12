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
})(window)