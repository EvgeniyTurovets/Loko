
$(document).ready(function(){
    $('.prof-top__tabs .tab').click(function(){
        if(!$(this).hasClass('active')){
            $('.prof-top__tabs .tab').removeClass('active')
            $(this).addClass('active')
            var index = $(this).index()
            $('.tabs-content-wrap .tabs-content').removeClass('active')
            $('.tabs-content-wrap .tabs-content').eq(index).addClass('active')
        }
    })

    
    const swiper = new Swiper('.bot-slider', {
        // Optional parameters
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
        },
      });
})