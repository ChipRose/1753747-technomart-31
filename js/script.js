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
/* feedback modal window */
const buttonFeedBack = document.querySelector(".button-contacts");
const body = document.querySelector(".page-body");
const feedBackWindow = document.querySelector(".feed-back-window");
const closeFeedBack = feedBackWindow.querySelector(".close-feedback");
const feedBackForm = feedBackWindow.querySelector(".feed-back-form");
const feedBackNameInput = feedBackWindow.querySelector(".name-input");
const feedBackEmailInput = feedBackWindow.querySelector(".email-input");
const alert = feedBackWindow.querySelector(".alert");
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
	if (storage) {
		feedBackNameInput.value = storage;
		feedBackEmailInput.focus();
	} else {
		feedBackNameInput.focus();
	}
	body.classList.add("body-blocked");
});
closeFeedBack.addEventListener("click", function () {
	feedBackWindow.classList.remove("active");
	body.classList.remove("body-blocked");
});
 feedBackForm.addEventListener("submit", function (evt) {
	if (!feedBackNameInput.value || !feedBackEmailInput.value) {
		evt.preventDefault();
		alert.classList.add("active-block");
	} else {
		alert.classList.remove("active-block");
		if (isStorageSupport) {
			localStorage.setItem("name", feedBackNameInput.value);
		}
	}
});
window.addEventListener("keydown",function(evt){
	if(evt.code==="Escape"){
		if(feedBackWindow.classList.contains("active")){
			evt.preventDefault();
			feedBackWindow.classList.remove("active");
			body.classList.remove("body-blocked");
		}
	}
});
