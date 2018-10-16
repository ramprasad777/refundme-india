$(function () {
    var headerHeight = $('.navbar-fixed-top').height();
    var ourObjectsMessageSection = $('.ourObjectsMessage').height();
	var $paymentTypeOption = $('input[name="paymentType"]');

    if ($(window).width() > 768) {
         $('body').css({'padding-top':headerHeight+40});
         $('.donatationMessageHome').css({'height':ourObjectsMessageSection});
    }
    else {
       $('body').css({'padding-top':headerHeight});
    }
	
	//device menu icon change
	$('#ChangeToggle').click(function() {
		$('#navbar-hamburger').toggleClass('hidden');
		$('#navbar-close').toggleClass('hidden');  
	});
	
	//changing payment input value
	$(document).on('click', '.paymentType input:radio', function(){
		var value = $(".paymentType input[type='radio']:checked").val();
		$('#enterotheramount').val(value);
	})
	/*
	$('.paymentType input:radio').change(function(){
		var value = $(".paymentType input[type='radio']:checked").val();
		$('#enterotheramount').val(value);
	});
	*/
	
	//setting time for testimonial
	$('#quote-carousel').carousel({
		pause: true, interval: 10000,
	});
	
});
$(window).resize(function(){
	if ($(window).width() > 768) {
         $('body').css({'padding-top':headerHeight+40});
         $('.donatationMessageHome').css({'height':ourObjectsMessageSection});
    }
    else {
       $('body').css({'padding-top':headerHeight});
    }
});
$(document).ready(function(){
  $("#navbar").find("li").on("click", "a", function () {
     $('.navbar-collapse.in').collapse('hide');
 });
 if ($(window).width() > 768) {
    $('.navbar-collapse.in').collapse('show');
 }
})
