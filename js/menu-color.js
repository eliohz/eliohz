// Change Color Navbar Elements on Scroll

   $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
       $('.icon-bar').addClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo-light.png');
    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo.png');
    }
});



$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 4000) {
            $('#topbar, .cart-label').fadeOut('fast');
            $('.logo img')
                .attr('src','img/logo.png');
        }
        if($(this).scrollTop() < 4000) {
            $('#logo, #topbar, .cart-label').fadeIn('fast');
            $('.logo img')
                .attr('src','img/logo-light.png');
        }
    });
});
