/* slider buttons */
let buttonPrev = document.querySelector(".button-prev");
let buttonNext = document.querySelector(".button-next");
let slider = document.querySelectorAll(".slider-img");
let sliderBullets = document.querySelectorAll(".slider-bullet");
let addChecked = function (index) {
	sliderBullets[index].checked = true;
};
let delChecked = function (index) {
	sliderBullets[index].checked = false;
};
let sliderLength = slider.length;
var index = 0;
buttonNext.addEventListener("click", function () {
	if (index < sliderLength - 1) {
		delChecked(index);
		index++;
		addChecked(index);
	} else {
		delChecked(sliderLength - 1);
		index = 0;
		addChecked(index);
	}
});
buttonPrev.addEventListener("click", function () {
	if (index > 0) {
		delChecked(index);
		index--;
		addChecked(index);
	} else {
		delChecked(0);
		index = sliderLength - 1;
		addChecked(index);
	}
});
