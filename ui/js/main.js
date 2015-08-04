// 01
$(document).ready(function() {

	console.log('_____doc ready');

	// General
	$('html').removeClass('no-js');

});



//Do Code
clearTimeout(hasjsrm);
$('body').addClass('has-js');



// 02
$(window).load(function() {



	// executes when complete page is fully loaded, including all frames, objects and images
	console.log('______win ready');
	
	//$('.aha').visibility();
//	$(".aha").css('visibility', 'visible');





var time = 600;

	$(".aha").each(function(index, value) {

//	    console.log('div' + index + ':' + $(this).attr('id'));

		var _this = '#' + $(this).attr('id');


	  	setTimeout( function(){

//			$( _this ).fadeTo('fast', 0.2);
//			$( _this ).fadeOut('slow');
//			$( _this ).hide().fadeIn(300);
//			$( _this ).hide();
			$( _this ).css('opacity', 0.0).animate({opacity:1}, 300);



        if ($( _this ).is(":visible")) {
			console.log('div ' + _this + ' is visible'); 
        } 
        else {
			console.log('div ' + _this + ' is not visible');
        }




		console.log('div ' + _this ); 

	  	}, time)
	  	time += 600;

	});











 
 
 
 
});


