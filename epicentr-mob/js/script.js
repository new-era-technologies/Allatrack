'use strict';


var mesBox = document.querySelector('.messages_box__chat_box');
var body = document.querySelector('body');

/*scroll messages_box by use wheel in window*/
window.addEventListener('wheel', function(e) {
	var y = e.deltaY;

	// if (y > 0) {
	// 	if (window.scrollY === document.body.scrollHeight) {
	// 		mesBox.scrollTop += y;
	// 		console.log('as')
	// 	}
	// } else {
	// 	mesBox.scrollTop -= y;
	// }

	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		mesBox.scrollTop += y;
	}
});


/* fetch api data */
var req = new Request('https://darmen.app/servicesapi/v1/ru/notification/all?api_token=SjzwVPmw86z3Mdm8Vv06WsWSXSf9ElssQSkoqQBtJISu2Pg9pq4jmRHOEKE4&limit=10');

fetch(req)
.then(function(response) { 
	return response.json(); 
})
.then(function(data) {
	console.log(data)
	// for (var i = 0; i <= 9; i++) {
	// 	mesBox.innerHTML += ""
	// }
});

var wrap = document.querySelector('.wrapper');
var contBox = document.querySelector('.info_box__contacts_box');
var container = document.querySelector('.container');
var back = document.querySelector('.messages_box__outer__img_box__img');
if (window.innerWidth < 1150) {
	/*height of display*/
	container.style.height = 'calc(100vh + ' + contBox.offsetTop + 'px' + ' - 10px)';
	/*height of wrapper*/
	wrap.style.height = 'calc((' + container.offsetHeight + 'px + 40px) - 2%)';
	/*height of box-shadow messages-box*/
}
back.style.height = mesBox.offsetHeight + 'px';
/*left pos wrapper*/
if ((1330 < window.innerWidth && window.innerWidth < 1600) || (1630 < window.innerWidth && window.innerWidth < 2000) || (2230 < window.innerWidth && window.innerWidth < 2500)) {
var ghgh = (window.innerWidth - container.offsetWidth)/2;
wrap.style.left = ghgh + 'px';
wrap.style.width = 'calc(100% - ' + ghgh + 'px)';
}

/*show popup*/
var opacity = 0;
var popupHeight = 0;
function FadePopup() {
	if (opacity < 1) {
		opacity += .1;
		setTimeout(function(){FadePopup()},10);
	}
	document.querySelector('.popup').style.opacity = opacity;
}
function AnimatePopup() {
	if (popupHeight < 1) {
		popupHeight += 272;
	} else {
		popupHeight -= 272;
	}
	document.querySelector('.popup__outer').style.height = popupHeight + 'px';
}
var popLink = document.querySelector('.popup__link');
popLink.addEventListener('click', function(e) {
	e.preventDefault();
	document.querySelector('.popup').style.display = 'block';
	FadePopup();
	document.querySelector('.popup__link_box').style.display = 'none';
	setTimeout(AnimatePopup, 100);
});

/*close popup*/
var popLink = document.querySelector('.popup__inner__but_cl_box');
popLink.addEventListener('click', function(e) {
	e.preventDefault();
	AnimatePopup();
	setTimeout(function(){document.querySelector('.popup').style.display = 'none'}, 500);
});