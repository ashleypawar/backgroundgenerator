let css = document.querySelector("h3");
let color1 = document.querySelector(".color1"); // the JS query selector also acts just like the CSS class selector, 
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomColor = document.getElementById("mybutton");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	css.textContent = body.style.background + ";";
	//textContent adds the textContent to the DOM 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);