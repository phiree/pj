$('.carousel').bcSwipe({ threshold: 50 });
<!-- 返回顶部-->
$(function(){

    $(document).scroll(function() {
       var scrollDistance=$(document).scrollTop();

        if(scrollDistance>600)
       {
           $("#dvTop").fadeIn(500);

       }
        else
       {
           $("#dvTop").fadeOut(500);
       }
    });

});