/* feedback modal window */
const buttonFeedBack = document.querySelector(".button-contacts");
const body = document.querySelector(".page-body");
const feedBackWindow = document.querySelector(".feed-back-window");
const closeFeedBack = feedBackWindow.querySelector(".close-feedback");
const feedBackForm = feedBackWindow.querySelector(".feed-back-form");
const feedBackNameInput = feedBackWindow.querySelector(".name-input");
const feedBackEmailInput = feedBackWindow.querySelector(".email-input");
const feedBackTextInput = feedBackWindow.querySelector(".text-area");
const feedBackSubmit = feedBackForm.querySelector(".feed-back-submit");
const alert = feedBackWindow.querySelector(".alert");
let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
try {
	storageName = localStorage.getItem("name");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}
buttonFeedBack.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedBackWindow.classList.add("active");
	feedBackWindow.classList.add("active-animation");
	feedBackNameInput.focus();
	if (storageName) {
		feedBackNameInput.value = storageName;
		feedBackEmailInput.focus();
	} else {
		feedBackNameInput.focus();
	}
	if (storageEmail) {
		feedBackEmailInput.value = storageEmail;
		feedBackTextInput.focus();
	} else {
		feedBacEmailInput.focus();
	}
	body.classList.add("body-blocked");
});
feedBackForm.addEventListener("submit", function (evt) {
	if (!feedBackNameInput.value || !feedBackEmailInput.value) {
		evt.preventDefault();
		alert.classList.add("active-block");
		feedBackWindow.classList.remove("modal-error");
		feedBackWindow.offsetWidth = feedBackWindow.offsetWidth;
		feedBackWindow.classList.add("modal-error");
		feedBackNameInput.addEventListener("focus", function () {
			alert.classList.remove("active-block");
		});
		feedBackEmailInput.addEventListener("focus", function () {
			alert.classList.remove("active-block");
		});
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", feedBackNameInput.value);
			localStorage.setItem("email", feedBackEmailInput.value);
		}
	}
});
feedBackSubmit.addEventListener("blur", function () {
	feedBackNameInput.focus();
});
closeFeedBack.addEventListener("click", function () {
	feedBackWindow.classList.remove("active");
	feedBackWindow.classList.remove("active-animation");
	body.classList.remove("body-blocked");
	feedBackWindow.classList.remove("modal-error");
	alert.classList.remove("active-block");
});
window.addEventListener("keydown", function (evt) {
	if (evt.code === "Escape") {
		if (feedBackWindow.classList.contains("active")) {
			evt.preventDefault();
			feedBackWindow.classList.remove("active");
			feedBackWindow.classList.remove("active-animation");
			body.classList.remove("body-blocked");
			feedBackWindow.classList.remove("modal-error");
		}
	}
});
