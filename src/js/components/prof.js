
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

    $('.phone-mask').inputmask({mask: "+7 999 999 9999", "placeholder": ""});
    $('.phone-mask-personal').inputmask({mask: "+7 (***) *** ** **","placeholder": "+7 (***) *** ** **"});
    $('.input-data').inputmask({mask: "99.99.9999"});
    $('.cart-input-mask').inputmask({mask: "999-999-999-999",});
    $('.input-tel-zero').inputmask({mask: "+7 999 999 99 99", "placeholder": "+7 000 000 00 00"});
    
    $('.personal__form__show-pass').on('click', function(){
        if($(this).hasClass('active')){
            $(this).closest('.personal__form__row--password').find('input').attr('type', 'password')
            $(this).toggleClass('active')
        }else{
            $(this).closest('.personal__form__row--password').find('input').attr('type', 'text')
            $(this).toggleClass('active')
        }
    })

    $('.upload input').on('change', function(e){
        var filename = $(this)[0].files.length ? $(this)[0].files[0].name : "";
        $(this).closest('.upload').find('.text').text(filename)
    })

    $('.faq__top').on('click', function(){
        $(this).next('.faq__content').slideToggle(300)
        $(this).toggleClass('active')
    })

    const big_foto_slider = new Swiper('.big-foto__slider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		initialSlide: 1,
		loop: false,
		navigation: {
			nextEl: ".big-foto__slider-next",
			prevEl: ".big-foto__slider-prev",
		},
	})
})