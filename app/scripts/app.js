import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import 'magnific-popup';
import 'h5validate';
import mask from "jquery-mask-plugin";


(function ($) {



	svg4everybody();

	$(function () {

		$('.form__form').h5Validate({});

		// mask

		$('.form__input_phone').mask("+ 7 (999) 999-99-99",
			{
				placeholder: "+ 7 (_ _ _) _ _ _  _ _  _ _"
			}
		);

		function popup() {
			$('.popup').magnificPopup({
				type: 'inline',
				midClick: true
			});
		}

		// nav

		let $navTrigger = $('.nav__trigger');

		$navTrigger.on('click', function () {
			$(this).toggleClass('nav__trigger_active');
		});

		// scrollAnimate

		$('.hero__links a , .header__address').on('click', function () {
			let sectionId = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);
		});

		$('.header__address').on('click', function () {
			let sectionId = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);
		});





		$('.footer__nav .nav__item_contacts a, .footer__nav .nav__item_exchange a').on('click', function () {
			let sectionId = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);

		});


		$('.contacts__button').on('click', function () {
			let sectionId = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);

			$(sectionId)
				.find('.form__input').eq(0)
				.attr('autofocus', true)
				.focus();
		});




		// Tabs

		function tabs() {
			const tabsNavLink = $('.tabs__link');
			const tabsNavLinkActive = 'tabs__link_active';
			const tab = $('.tabs__tab');
			const tabActive = 'tabs__tab_active';

			tabsNavLink.on('click', function (event) {
				event.preventDefault();
				$(this).addClass(tabsNavLinkActive);
				$(this).siblings().removeClass(tabsNavLinkActive);
				const tabCurrent = $(this).attr('href');
				tab.not(tabCurrent).removeClass(tabActive).hide();
				$(tabCurrent).fadeIn(200).addClass(tabActive).show();

			});

		}

		tabs();



		// tabs mob

		if ($(window).width() < 1024) {

			let $tL = $('.tabs__link');

			$tL.on('click', function () {

				let mobSecId = $(this).attr('href');
				let mobTLN = mobSecId.slice(5, 6);
				let mobTLNT = mobTLN - 1;

				$(mobSecId).insertAfter($tL.eq(mobTLNT));

				console.log($(this).eq(mobTLNT + 1).next());
			});

		}

		$(window).on('resize', function () {
			if ($(window).width() < 1024) {
				console.log('true');

				let $tL = $('.tabs__link');

				$tL.on('click', function () {

					let mobSecId = $(this).attr('href');
					let mobTLN = mobSecId.slice(5, 6);
					let mobTLNT = mobTLN - 1;
					let clonedTab = $(mobSecId);
					clonedTab.insertAfter($tL.eq(mobTLNT));

					console.log($(this).eq(mobTLNT + 1).next());
				});

			} else {

				// setTimeout('location.reload()', 100)
				location.reload();
			}


		});


		$('.header__nav .nav__item-b a, .header__nav .nav__item-c a, .header__nav .nav__item-d a, .header__nav .nav__item-e a, .footer__nav .nav__item_cat-b a, .footer__nav .nav__item_cat-c a, .footer__nav .nav__item_cat-d a, .footer__nav .nav__item_cat-e a').on( 'click' , function () {
			let sectionId = $(this).attr('href');
			let tabId = $(this).attr('href');
			let tabsLink = $('.tabs__link');
			let secTLN = tabId.slice(5, 6);
			let secTLNT = secTLN - 1;

			console.log(tabId);

			$(tabId)
				.insertAfter(tabsLink.eq(secTLNT));
			$(tabId)
				.prev()
				.addClass('tabs__link_active')
				.siblings()
				.removeClass('tabs__link_active');
			$(tabId)
				.addClass('tabs__tab_active')
				.siblings()
				.removeClass('tabs__tab_active');

			console.log($(this).eq(secTLNT + 1).next());

			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);

		});

		$('.header__nav .nav__item-exchange a, .header__nav .nav__item-contacts a').on('click', function () {
			let sectionId = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(sectionId).offset().top
			}, 500);
		});



	});


})(jQuery);
