$('#testimonialCarousel').owlCarousel({
    loop:true,
    nav:false,
	autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('#galleryCarousel').owlCarousel({
    loop:true,
   
    nav:false,
	autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


$(document).ready(function() {
  $('select').niceSelect();


$('select').niceSelect('update');

});

$(function () {
    $.scrollUp({
       
        scrollImg: true           
      
    });
});

