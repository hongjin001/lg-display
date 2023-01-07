$(function(){


    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr > 0) {
            $('.header').addClass('scroll')
            $('.sc-visual').addClass('scroll')
            $('.logo').addClass('scroll')
            $('.util-area').addClass('scroll')

        } else {
            $('.sc-visual').removeClass('scroll')
            $('.header').removeClass('scroll')
            $('.logo').removeClass('scroll')
            $('.util-area').removeClass('scroll')
        }
    })

    $(window).trigger('scroll');



$('.header .gnb-item').hover(function(){
    $('.header').addClass('menu-active'); 
    $('.header .logo').addClass('active');
    $('.header .util-area').addClass('active');
    $(this).addClass('active');
    if($(this).find('.sub-list').length){
        $('.header').addClass('on');
        $(this).find('.sub-list').addClass('active');

    }
},function(){
    $('.header .gnb-item').removeClass('active');
    $('.header').removeClass('menu-active on');
    $('.sub-list').removeClass('active'); 
    $('.header .logo').removeClass('active');
    $('.header .util-area').removeClass('active');
})


$('.btn-menu').click(function(){
    $('.side-nav ,btn-close').toggleClass('active')


    
})

$('.btn-close').click(function(){
    $('.side-nav').toggleClass('active')

})

$('.gnb-item').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.header .gnb-item').hover(function(){
    $('.header').addClass('active');

},function(){
    $('.header').removeClass('active')
});



//**
//** visual


var slide1 = new Swiper(".main-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 
 
    autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
 
    pagination: {
       el: ".swiper-pagination",
     },

});
$('.sc-visual .autoplay').click(function(){

    if($(this).find('.blind').text() == '자동재생 적용'){
        slide1.autoplay.start();
        $(this).find('.blind').text('자동재생 정지');
        $(this).removeClass('active');
    } else {
        slide1.autoplay.stop()
        $(this).find('.blind').text('자동재생 적용');
        $(this).addClass('active');
    }
});






// gsap.to('.sc-visual',{
//     scrollTrigger:{
//         trigger:".sc-visual",
//         start:"top top",
//         end:"bottom top",
//         markers:true,
//         scrub:4,
//     },
//     height:'70vh'
    
// })





});