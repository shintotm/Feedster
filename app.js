var main = function() {
	$('.notification img').click(function() {
		$('ul.notification-menu').toggle();
	});
	$('.post button.btn').click(function() {
		$(this).toggleClass('btn-like');
	});
};
$(document).ready(main);