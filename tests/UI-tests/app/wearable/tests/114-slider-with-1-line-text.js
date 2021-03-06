/*global tau */
(function () {
	/**
	 * page - Slider page element
	 * elSlider - Slider element
	 * slider - Slider component
	 * pageBeforeShowHandler - pagebeforeshow event handler
	 * pageHideHandler - pagehide event handler
	 */
	var page = document.getElementById("pageSlider-1line1"),
		elSlider = document.getElementById("slider1l"),
		slider,
		pageBeforeShowHandler,
		pageHideHandler;



	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	pageBeforeShowHandler = function () {
		slider = tau.widget.Slider(elSlider);
	};

	/**
	 * pagehide event handler
	 * Destroys and removes event listeners
	 */
	pageHideHandler = function () {
		slider.destroy();
	};

	page.addEventListener("pagebeforeshow", pageBeforeShowHandler, false);
	page.addEventListener("pagehide", pageHideHandler, false);
}());
