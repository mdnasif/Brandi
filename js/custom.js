$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()>=800 && !$('#site-header').hasClass('sticky')){
            $('#site-header').addClass('sticky'); 
        }
        else if($(window).scrollTop()<800 && $('#site-header').hasClass('sticky')){
           $('#site-header').removeClass('sticky') 
        }
    });
});

// memu js
// jQuery(document).ready(function () {
// 	jQuery('header nav .collapse').meanmenu();
// });

// Preloader

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

    // portfolio filtering

    var mixer = mixitup('.portfolio-wrapper');
    	// Timer count 

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });


    