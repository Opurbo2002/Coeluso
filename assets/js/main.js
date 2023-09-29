$(document).ready(function(){

 
$('.user-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    autoplay:true,
    autoplaytimeout:5000,
    anitmateIn:true,
    anitmateOut:true,
    smartSpeed:500,
})

$('.menu-icon').on('click', function() {
  $(this).toggleClass("active");
  $('.main-menu').toggleClass("active").animate({
    scrollTop: 0
  });
  $('.navigation-sub-menu').slideUp();
});

$('.sub-menu-trigger').click(function() {
  $('.navigation-sub-menu').slideToggle(400);
});

$('html').on('click', function(e) {
  if (!$('.menu-icon').is(e.target) && $('.main-menu').has(e.target).length === 0) {
    $('.menu-icon').removeClass('active');
    $('.main-menu').removeClass('active');
  }
});


$('.menu-icon').on('click', function() {
  $(this).toggleClass("active");
  $('.main-menu').toggleClass("active").animate({
    scrollTop: 0
  });
  $('.navigation-sub-menu-2').slideUp();
});

$('.sub-menu-trigger-2').click(function() {
  $('.navigation-sub-menu-2').slideToggle(400);
});

$('html').on('click', function(e) {
  if (!$('.menu-icon').is(e.target) && $('.main-menu').has(e.target).length === 0) {
    $('.menu-icon').removeClass('active');
    $('.main-menu').removeClass('active');
  }
});


  // Swiper Slide
    var swiper = new Swiper(".mySwiper", {

        autoplay: {
          delay: 1200,
          disableOnInteraction: false
        },
        speed:600,

        effect:"coverflow",
        grabCursor:false,
        centeredSlides:true,
        slidesPerView:"auto",
        spaceBetween:0,
        loop:true,
        coverflowEffect:{
            rotate:0,
            stretch:0,
            depth:200,
            modifier:1,
            slideShadows:false,
        },
    });

  // Footer Swiper Slide
    var swiper = new Swiper(".phoneSwiper", {

        autoplay: {
          delay: 1200,
          disableOnInteraction: false
        },
        speed:600,

        effect:"coverflow",
        grabCursor:false,
        centeredSlides:true,        
        spaceBetween:0,
        loop:true,
        coverflowEffect:{
            rotate:0,
            stretch:0,
            depth:300,
            modifier:1,
            slideShadows:false,
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            575:{
                slidesPerView:2,
            },
            768:{
                slidesPerView:3,
            }
        }

    });

// Wow
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
    )
    new WOW().init();

});

$loading = $(".loading");
var svgStrokeLength = 400;

function loading(percent, delay) {
  var percent = svgStrokeLength - (svgStrokeLength * percent / 100)

  $loading.find("circle.circle-color").animate({
    'stroke-dashoffset': percent
  }, delay, function() {

    if (percent == 0) {
      setTimeout(function() {
        $loading.addClass("isComplated");
        $(".clicks").addClass("show");
        
      }, delay);
    }
  })
}

function run() {
  $loading.removeClass("isComplated");
  $(".click").removeClass("show");
  $loading.find("circle.circle-color")
    .css('stroke-dashoffset', svgStrokeLength)
  loading(10, 200);
  loading(15, 600);
  loading(42, 1200);
  loading(55, 400);
  loading(86, 2000);
  loading(100, 100);
};

run();