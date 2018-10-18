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
	
	//setting time for testimonial
	$('#quote-carousel').carousel({
		pause: true, interval: 10000,
	});

	//Start Header Search
	 $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Start our partners thumbnail
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );

    //Start Footer Tabs
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
      $("ul.tabs li").click(function() {
      
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn();    
      
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
      
      });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {
        
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel"); 
        $("#"+d_activeTab).fadeIn();
      
      $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");
      
      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
      });
    
    
    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");
    
	
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
