import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'magnific-popup';
import 'jquery-validation';
import tabs from '../blocks/categories/categories.js';

$(() => {
	svg4everybody();

	$(function () {

		// nav

		let $navTrigger = $('.nav__trigger');

		$navTrigger.on('click', function () {
			$(this).toggleClass('nav__trigger_active');
		});


		// Tabs
		tabs();

		// tabs mob

		let $tabLink = $('.tabs__link');
		let catMob = '.categories__category_mob';
		let catMobActive = 'categories__category_mob-active';

		if($(window).width() < 1170 ) {
			console.log('1024');

			// $tabLink.hasClass('tabs__link-active').next().addClass(catMobActive);
			$('.tabs__link_active').next().addClass(catMobActive);
			$tabLink.on('click', function () {
				$(this)
					.next(catMob)
					.addClass(catMobActive)
					.siblings(catMob)
					.removeClass(catMobActive);

			});

			console.log($('.tabs__link_active').next());

			// $('.categories__category_mob-active')
		}
		$(window).on('resize', function () {
			if($(window).width() < 1170 ) {
				$tabLink.on('click', function () {
				$(this)
					.next(catMob)
					.addClass(catMobActive)
					.siblings(catMob)
					.removeClass(catMobActive);

				});

			}

		});


	});

});
