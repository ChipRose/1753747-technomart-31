/* cart modal window */
const cart = document.querySelectorAll(".button-buy");
const cartWindow = document.querySelector(".cart-window");
const body = document.querySelector(".page-body");
const closeCart = cartWindow.querySelector(".close-cart");
const cartButtonContinue = cartWindow.querySelector(".cart-button");
for (let buyButton of cart) {
	buyButton.addEventListener("click", function () {
		cartWindow.classList.add("active");
		cartButtonContinue.focus();
		body.classList.add("body-blocked");
	});
}
closeCart.addEventListener("click",function(){
	cartWindow.classList.remove("active");
	body.classList.remove("body-blocked");
});
window.addEventListener("keydown", function (evt) {
	if (evt.code === "Escape") {
		if (cartWindow.classList.contains("active")) {
			evt.preventDefault();
			cartWindow.classList.remove("active");
			body.classList.remove("body-blocked");
		}
	}
});
cartButtonContinue.addEventListener("click",function(evt){
	evt.preventDefault();
	cartWindow.classList.remove("active");
	body.classList.remove("body-blocked");
})