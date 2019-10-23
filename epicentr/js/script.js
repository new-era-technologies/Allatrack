'use strict';


/*scroll messages_box by use wheel in window*/
var mesBox = document.querySelector('.messages_box__outer');

window.addEventListener('wheel', function(e) {

	var topPos = mesBox.offsetTop;

	var y = e.deltaY;

	if (y > 0) {
		mesBox.scrollTop += topPos;
	} else {
		mesBox.scrollTop -= topPos;
	}
});


/* fetch api data */
var outer = document.querySelector('.messages_box__outer');
var myRequest = new Request('https://darmen.app/servicesapi/v1/ru/notification/all?location_id=2&page=1&limit=10&api_token=BSOTc6vx8Wy5hA3hkRZZomfontRzt3XKuTsOAoXcIAMdgfUZwL9giASjqZJU');

fetch(myRequest)
.then(function(response) { 
	return response.json(); 
})
.then(function(res) {
	console.log(res);
	for (var i = 0; i <= res.length; i++) {
	outer.innerText('<div class="messages_box__outer__inner">' +
						'<div class="messages_box__outer__inner__logo">' + 
							'<div class="messages_box__outer__inner__logo__img_box">' + 
								'<img class="messages_box__outer__inner__logo__img_box__img" src="' + res[i].notifications.type.type_preview + '" alt="logo-pin">' +
							'</div>' +
							'<div class="messages_box__outer__inner__logo__info">' +
								'<p class="messages_box__outer__inner__logo__info__city">г. Алматы</p>' +
								'<p class="messages_box__outer__inner__logo__info__date">' + res[i].notifications.type.created_at + '</p>' +
							'</div>' +
						'</div>' +
						'<div class="messages_box__outer__inner__title">' + res[i].notifications.title + '</div>' +
						'<div class="messages_box__outer__inner__text">' + res[i].notifications.text + '</div>' +
					'</div>');
	}
});

var wrapInfo = document.querySelector('.wrapper__info');
var f = (this.innerWidth + 'px');
var s = (this.innerWidth / 87) + '%';
var str = f + ' - ' + s;
wrapInfo.style.width = 'calc(' + str + ')';
wrapInfo.style.width = '-webkit-calc(' + str + ')';
wrapInfo.style.width = '-o-calc(' + str + ')';