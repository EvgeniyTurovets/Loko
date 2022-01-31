
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

    $('.pre-total-open').on('click', function(){
        if($(this).hasClass('active')){
            $('.pre-total-open').removeClass('active')
            $('.prof-bot__pretotal').slideUp(300)
        }else{
            $('.pre-total-open').removeClass('active')
            $(this).addClass('active')
            $('.prof-bot__pretotal').slideUp(300)
            $(this).closest('.prof-bot__tbody__tr').next('.prof-bot__pretotal').slideDown(300)
        } 
    })

    $('.prof-bot__table--bileti .prof-bot__tbody__tr').on('click', function(e){
        if($(window).width() < 768){
            if($(this).hasClass('active')){
                $('.prof-bot__table--bileti .prof-bot__tbody__tr').removeClass('active')
                $('.prof-bot__pretotal').slideUp(300)
            }else{
                $(this).addClass('active')
                $('.prof-bot__pretotal').slideUp(300)
                $(this).next('.prof-bot__pretotal').slideDown(300)
            }
           
            
        }
    })
})