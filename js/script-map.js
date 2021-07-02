/* map modal window */
const map = document.querySelector(".map");
const mapWindow = document.querySelector(".map-window");
const closeMap = mapWindow.querySelector(".close-map");
	map.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapWindow.classList.add("active-block");
	mapWindow.classList.add("active-animation");
	body.classList.add("body-blocked");
});
closeMap.addEventListener("click",function(){
	mapWindow.classList.remove("active-block");
	mapWindow.classList.remove("active-animation");

	body.classList.remove("body-blocked");
});
window.addEventListener("keydown", function (evt) {
	if (evt.code === "Escape") {
		if (mapWindow.classList.contains("active-block")) {
			evt.preventDefault();
			mapWindow.classList.remove("active-block");
			mapWindow.classList.remove("active-animation");
			body.classList.remove("body-blocked");
		}
	}
});
