// URL: http://jsfiddle.net/YtJcL/ , http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
// Retrieved on 1/29/17

$(".scroll").click(function(event){
event.preventDefault();
//calculate destination place
var dest=0;
if($(this.hash).offset().top > $(document).height()-$(window).height()){
  dest=$(document).height()-$(window).height();
} else{
  dest=$(this.hash).offset().top-50;
}
//go to destination
$('html,body').animate({scrollTop:dest}, 500,'swing');
});
