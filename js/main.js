$('.logoes').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

//  slide menu down
$("#barmenu").click(function(){
    $(".nav-menu").slideDown();
    $(".mainlogo").hide();
})

// close  menu up
$(".c-menu").click(function(){
    $(".nav-menu").slideUp();
    $(".mainlogo").show();
})
