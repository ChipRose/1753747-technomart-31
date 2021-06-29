/* slider buttons */
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const slider = document.querySelectorAll(".slider-img");
const sliderBullets = document.querySelectorAll(".slider-bullet");
let index = 0;
buttonNext.addEventListener("click", function () {
	if (index === slider.length - 1) {
		sliderBullets[index].checked = false;
		sliderBullets[0].checked = true;
		index = 0;
		return;
	}
	sliderBullets[index].checked = false;
	index++;
	sliderBullets[index].checked = true;
});
buttonPrev.addEventListener("click", function () {
	if (index === 0) {
		sliderBullets[0].checked = false;
		sliderBullets[slider.length - 1].checked = true;
		index = slider.length - 1;
		return;
	}
	sliderBullets[index].checked = false;
	index--;
	sliderBullets[index].checked = true;
});
