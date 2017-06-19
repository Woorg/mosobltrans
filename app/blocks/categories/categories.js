export default function tabs () {
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
		$(tabCurrent).fadeIn(50).addClass(tabActive).show();

		// carouselSecond.reloadSlider();

		console.log(tabCurrent);

	});

}
