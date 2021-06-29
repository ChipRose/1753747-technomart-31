/* cart modal window */
const cart=document.querySelectorAll(".button-buy");
const windowCart=document.querySelector(".cart-window");
for(let buyButton of cart){
	cart.addEventListener("click", function(){
		windowCart.classList.add("active");
	});
}