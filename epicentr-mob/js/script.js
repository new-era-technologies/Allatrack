'use strict';


var mesBox = document.querySelector('.messages_box__chat_box');
var body = document.querySelector('body');

/*scroll messages_box by use wheel in window*/
window.addEventListener('wheel', function(e) {

	// var topPos = mesBox.offsetTop;

	var y = e.deltaY;

	// if (y > 0) {
	// 	if (window.scrollY === document.body.scrollHeight) {
	// 		mesBox.scrollTop += y;
	// 		console.log('as')
	// 	}
	// } else {
	// 	mesBox.scrollTop -= y;
	// }

	console.log(window.scrollY, document.body.clientHeight)

	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		// if (y > 0) {
			mesBox.scrollTop += y;
		// 	console.log('as')
		// } else {
		// 	mesBox.scrollTop -= y;
		// 	console.log('sa')
		// }
	}
});


/* fetch api data */
var myRequest = new Request('https://darmen.app/servicesapi/v1/ru/notification/all?api_token=SjzwVPmw86z3Mdm8Vv06WsWSXSf9ElssQSkoqQBtJISu2Pg9pq4jmRHOEKE4&limit=10');

fetch(myRequest)
.then(function(response) { 
	return response.json(); 
})
.then(function(data) {
	console.log(data)
	// for (var i = 0; i <= res.length; i++) {
	// outer.innerText('<div class="messages_box__outer__inner">' +
	// 					'<div class="messages_box__outer__inner__logo">' + 
	// 						'<div class="messages_box__outer__inner__logo__img_box">' + 
	// 							'<img class="messages_box__outer__inner__logo__img_box__img" src="' + res[i].notifications.type.type_preview + '" alt="logo-pin">' +
	// 						'</div>' +
	// 						'<div class="messages_box__outer__inner__logo__info">' +
	// 							'<p class="messages_box__outer__inner__logo__info__city">г. Алматы</p>' +
	// 							'<p class="messages_box__outer__inner__logo__info__date">' + res[i].notifications.type.created_at + '</p>' +
	// 						'</div>' +
	// 					'</div>' +
	// 					'<div class="messages_box__outer__inner__title">' + res[i].notifications.title + '</div>' +
	// 					'<div class="messages_box__outer__inner__text">' + res[i].notifications.text + '</div>' +
	// 				'</div>');
	// }
});



// fetch(myRequest, {
// 					'Access-Control-Allow-Origin' : '*',
// 					dataType: 'jsonp',
//         		})
// 			.then(function(response) { 
// 				return response.json(); 
// 			})
// 			.then(function(data) {
// 				console.log(data)
// 			});




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

console.log(window.innerWidth)