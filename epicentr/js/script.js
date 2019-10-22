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