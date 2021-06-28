/* slider buttons */
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const slider = document.querySelectorAll(".slider-img");
const sliderBullets = document.querySelectorAll(".slider-bullet");
let addChecked = function (index) {
	sliderBullets[index].checked = true;
};
let delChecked = function (index) {
	sliderBullets[index].checked = false;
};
const sliderLength = slider.length;
let index = 0;
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
/* feedback modal window */
const buttonFeedBack = document.querySelector(".button-contacts");
const body = document.querySelector(".page-body");
const feedBackWindow = document.querySelector(".feed-back-window");
const closeFeedBack = feedBackWindow.querySelector(".close-feedback");
const feedBackForm = feedBackWindow.querySelector(".feed-back-form");
const feedBackNameInput = feedBackWindow.querySelector(".name-input");
const feedBackEmailInput = feedBackWindow.querySelector(".email-input");
let isStorageSupport = true;
let storage = "";
try {
	storage = localStorage.getItem("name");
} catch (err) {
	isStorageSupport = false;
}
buttonFeedBack.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedBackWindow.classList.add("active");
	if(storage){
		feedBackNameInput.value=storage;
	}
	feedBackNameInput.focus();
	body.classList.add("body-blocked");
});
closeFeedBack.addEventListener("click", function () {
	feedBackWindow.classList.remove("active");
	body.classList.remove("body-blocked");
});
feedBackForm.addEventListener("submit", function (evt) {
	if (!feedBackNameInput.value || !feedBackEmailInput.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", feedBackNameInput.value);
		}
	}
});
