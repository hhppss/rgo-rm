// $(document).ready(function(){
//   $(".banner-sliderq").owlCarousel({
//   });
// });
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// const swiper = new Swiper('.banner-slider', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


$(document).ready(function () {

  $('.advantages-count').each(function () {
     $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
       duration: 2500,
       easing: 'swing',
       step: function (now) {
          $(this).text(Math.ceil(now));
       }
      });
  });
  
  }); 

// $(document).ready(function() {
//   $('.header-burger').click(function(event) {
//       $('.header-burger, .header-menu').toggleClass('active');
//       $('body').toggleClass('lock');
//   })
//   $('.header-link').click(function(event) {
//       $('.header-burger, .header-menu').removeClass('active');
//       $('body').removeClass('lock');
//   })
//   $('.shop-item__visible').click(function(event) {
//       $('.closes').toggleClass('closeup');
//   })
// });