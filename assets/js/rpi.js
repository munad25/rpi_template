$(document).ready(function(){
    $('html, body').scrollTop(0);
    var nav = $(".fixed-top");
    var batas = $('#batas');
   
   
    $(document).scroll(function(){
        nav.toggleClass('scrolled', $(this).scrollTop() > batas.offset().top);
    });

    $('.navbar').on('click', '.nav-link', function(a){
        var tujuan = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop : $(tujuan).offset().top -20
        }, 1250, 'easeInCubic');

        a.preventDefault();
    });

   

});

