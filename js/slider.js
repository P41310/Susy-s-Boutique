const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast =  sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);


function Next(){
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.Transition = "all 3s";
	setTimeout(function(){
		slider.style.Transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
		}, 400);
}



function Prev() {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast =  sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.Transition = "all 3s";
	setTimeout(function(){
		slider.style.Transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
		}, 400);
}

btnRight.addEventListener('click',function(){
    Next();
});

btnLeft.addEventListener('click',function(){
    Prev();
});

setInterval(function(){
    Next();
},5000);

