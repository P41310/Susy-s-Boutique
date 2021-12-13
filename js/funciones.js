$(document).ready(listo);


function listo(){
	/*alert("Hola Mundo")*/
	jQuery(".hamb").click(function(e){
		e.preventDefault();
	jQuery("header .container nav").toggleClass("open");
	jQuery(".hamb i").toggleClass("fa-times");	
	});

	jQuery("header .container nav a").click(function(){

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");
		/*alert(dev);*/
		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top -60
		})
	})
}

/* ***************************SLIDER**************************** */


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast =  sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);


function Next(){
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.Transition = "all 0.5s";
	setTimeout(function(){
		slider.style.Transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
		}, 500);
}



function Prev() {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast =  sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.Transition = "all 0.5s";
	setTimeout(function(){
		slider.style.Transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider.style.marginLeft = "-100%";
		}, 500);
}

