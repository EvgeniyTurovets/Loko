function scrollToElement(el, offset)
{
	if (offset === undefined)
		offset = 0;

	var duration = 600;
	var element = $(el).offset();
	var pos = element.top + offset;
	$('html, body').animate({scrollTop: pos}, duration);
}


// document.addEventListener(
// 	"DOMContentLoaded", () => {
// 		new Mmenu( "#menu", {
// 			"navbar": {
// 				"title": 'Меню'
// 			}
// 		} );
// 	}
// );




$(document).ready(function(){

	// var fxdHeader = document.querySelector("header");
	// var headroom  = new Headroom(fxdHeader,{
	// 	offset : 80,
	// 	tolerance : {
	// 		up : 10,
	// 		down : 5
	// 	},
	// });
	// headroom.init();




	$('body').on('click','.anchor-link',function(e){
		e.preventDefault();
		targ = $(this).attr('href');
		scrollToElement(targ, -40)
	})
	.on('click',function(e){
		if( !$(e.target).closest('.header-search').length) {
			$('body').removeClass('search-active');
		}
		if( !$(e.target).closest('.right-menu-container').length) {
			$('.right-menu-container').removeClass('right-menu-active');
		}
		if( !$(e.target).closest('.detail-share').length) {
			$('.detail-share').removeClass('active');
		}
	})
	.on('click', '.search-toggle', function(e)
	{
		$('body').addClass('search-active');
	})
	.on('click', '.desktop-menu-toggle', function(e)
	{
		e.preventDefault();
		$('.right-menu-container').toggleClass('right-menu-active');
	})
	.on('click', '.header-nav-mobile', function(e)
	{
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active');
	})
	.on('click', '.detail-share-toggle', function(e)
	{
		e.preventDefault();
		$(this).parents('.detail-share').toggleClass('active');
	})
	.on('click', '.row-field-toggle', function(e)
	{
		e.preventDefault();
		$(this).parents('.expert-form-rating-row').toggleClass('active');
	})
	.on('click', '.dropdown-select .dropdown-menu a', function(e)
	{
		e.preventDefault();
		$(this).parents('.dropdown-menu').find('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).parents('.dropdown-select').find('input[type=hidden]').val($(this).data('val'));
		$(this).parents('.dropdown-select').find('[data-toggle="dropdown"]').html( $(this).html() );
	})
	.on('click', '.tournament-table-toggle', function(e)
	{
		e.preventDefault();
		$(this).toggleClass('active');
		$('.tournament-table').toggleClass('full-table');
	})
	.on('click', '.stat-row', function(e)
	{
		e.preventDefault();
		$(this).parents('.stat-group').toggleClass('active');
	})
	.on('keyup,change', '.print-input-field input', function (e) {
		if ($(this).val().length < $(this).data('max_size') + 1){
			$(this).parents('.input-field-with-counter').find('.counter-current').html( parseInt( $(this).val().length ) );
		}

	})
	.on('keypress', '.print-input-field input', function (e) {
		if ($(this).val().length > $(this).data('max_size') - 1) {
			return false;
		}
	})
	.on('click', '.tabs-nav-list a,.tabs-nav-list button', function (e) {
		e.preventDefault();
		$(this).parents('.tabs-nav-list').find('li').removeClass('active');
		$(this).parents('.tabs-wrap').find('.tab-pane').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).parents('.tabs-wrap').find('[data-tab="'+$(this).data('target')+'"]').addClass('active');
	})

	$('[data-fancybox="gallery"]').fancybox({
		btnTpl: {
			download:
			'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
			"</a>",

			zoom:
			'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
			"</button>",

			close:
			'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
			"</button>",

			// Arrows
			arrowLeft:
			'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
			'<span class="icon-arrow-left"></span>' +
			"</button>",

			arrowRight:
			'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
			'<span class="icon-arrow-right"></span>' +
			"</button>",
		},
	});


	$('.datepicker-input').datepicker({
		language: "ru",
		todayHighlight: true,
		autoclose: true,
		format: 'dd.mm.yyyy',
		container: '.datepicker-container'
	})

	$('.custom-select').chosen({
		width: "100%",
		disable_search: true,
		allow_single_deselect: true
	});

	const swiper = new Swiper('.main-slider', {
		spaceBetween: 0,
		effect: "fade",
		loop: false,
		navigation: {
			nextEl: ".main-slider-next",
			prevEl: ".main-slider-prev",
		},
	});
	const swiperPartners = new Swiper('.partners-slider', {
		spaceBetween: 30,
		slidesPerView: 'auto',
		mousewheel: true,
		loop: true,
		centeredSlides: true,
	});
	const swiperDetail = new Swiper('.detail-gallery-swiper', {
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".main-slider-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".detail-gallery-next",
			prevEl: ".detail-gallery-prev",
		},
	});
	const trophies = new Swiper('.player-trophies-slider', {
		spaceBetween: 15,
		loop: false,
		slidesPerView: '5',
		navigation: {
			nextEl: ".trophies-arrow-next",
			prevEl: ".trophies-arrow-prev",
		},
	});

	$('.custom-slider').each(function () {
		$(this).css({
			'min-width': $(window).width() - $('.custom-slider-wrap').offset().left
		})
	})

	$(window).resize(function () {
		$('.custom-slider').each(function () {
			$(this).css({
				'min-width': $(window).width() - $('.custom-slider-wrap').offset().left
			})
		})
	})

	const matchesSwiper = new Swiper('.matches-slider', {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		initialSlide: 3,
		loop: false,
		navigation: {
			nextEl: ".matches-slider-next",
			prevEl: ".matches-slider-prev",
		},
		breakpoints: {
			1000: {
				spaceBetween: 80,
			}
		}
	})
	.on('slideChange', function () {
		$('.matches-slider-nav-info .readmore-link').attr('href', $(this.el).find('.swiper-slide-active').data('link'))
	});

	const playerBck = new Swiper('.players-bck-slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		effect: "fade",
		loop: false,
	})

	const playersSwiper = new Swiper('.players-slider', {
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1,
		loop: false,
		navigation: {
			nextEl: ".players-section-next",
			prevEl: ".players-section-prev",
			disabledClass: 'disabled',
		},
		pagination: {
			el: ".players-section-pagination",
			clickable: true
		},
		thumbs: {
			swiper: playerBck,
		},
	})


	var libraryThumbs = new Swiper(".library-thumbs", {
		loop: true,
		spaceBetween: 25,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".thumbs-slider-next",
			prevEl: ".thumbs-slider-prev",
		},
	});
	var libraryGal = new Swiper(".library-gallery", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".main-slider-next",
			prevEl: ".main-slider-prev",
			disabledClass: 'disabled',
		},
		pagination: {
			el: ".main-slider-pagination",
			type: "fraction",
		},
		thumbs: {
			swiper: libraryThumbs,
		},
	});


	$('[data-toggle="tolltip"]').tooltip();

	if ($('.share-buttons').size() > 0){
		window.Sharer.init();
	}

	$('.rating-value').each(function () {
		var start = $(this).data('value') ? $(this).data('value') : 0,
			ro = $(this).data('readonly') ? true : false,
			elem = $(this);
		if (ro)
			elem.addClass('readonly')
		$(this).starrr({
			max: 10,
			rating: start,
			readOnly: ro,
			change: function(e, value){
				$(this).parents('.rating-container').find('.star-input').val(value)
			}
		})
	});


	$(".custom-slider").each(function(index, element){
		var $this = $(this)[0];
		var arrPrev = $(this).parents('.custom-slider-content').find('.swiper-prev')[0];
		var arrNext = $(this).parents('.custom-slider-content').find('.swiper-next')[0];
		var paging = $(this).parents('.custom-slider-content').find('.swiper-pagination')[0];
		var perView = $(this).data('per_view') ? $(this).data('per_view') : 'auto';
		var b_580 = $(this).data('b_580') ? $(this).data('b_580') : perView;
		var b_760 = $(this).data('b_760') ? $(this).data('b_760') : perView;
		var b_1000 = $(this).data('b_1000') ? $(this).data('b_1000') : b_760;


		var slider = new Swiper($this, {
			loop: false,
			spaceBetween: 30,
			slidesPerView: 'auto',
			pagination: {
				el: paging,
				clickable: true
			},
			navigation: {
				nextEl: arrNext,
				prevEl: arrPrev,
				disabledClass: 'disabled',
			},
			breakpoints: {
				1000: {
					slidesPerView: b_1000,
				},
				760: {
					slidesPerView: b_760,
				},
				1000: {
					slidesPerView: b_1000
				}
			}

		})
	});
});

