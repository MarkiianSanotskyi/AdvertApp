"use strict";

/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });


	
	(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		
		 $('#myTab a, #myTab2 a, #myTab3 a, #myTab4 a, #myTab5 a, #myTab6 a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    });
	
	
	 $( ".clone-select, .all-sections, .advances-search" ).click( function () {
        $( ".clone-select a.child-select, .advances-search a.search-advance-link" ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } );
	
	

	
	
	jQuery(function ($) {
    function fix_size() {
        var images = $('ul.filter-box-list li .image-box img, .header-search-box .image-box img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('ul.filter-box-list li .image-box, .header-search-box .image-box');
            if (img_dom.complete) {
                resize();
            } else img.one('ready', resize);

            function resize() {
                if ((container.width() / container.height()) > (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                img.height('100%');
                img.width('auto');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});

$(window).load(function() {
   
   

    $("#flexiselDemo3").flexisel({
		
        visibleItems: 4,
        animationSpeed: 500,
        autoPlay: false,
        autoPlaySpeed: 2000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 4
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 4
            },
            tablet: { 
                changePoint:768,
                visibleItems: 4
            }
        }
    });

 
    
});

$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		nav:false,
		pager:true
		
});
});

$(function () {
function breadcrumbInit() {
	var initialHeight = 32;
	var isTwoRow = $('ul.breadcrums-list').height() > initialHeight;

	isTwoRow ? $('ul.breadcrums-list').addClass('twoRowClass') : $('ul.breadcrums-list').removeClass('twoRowClass');
}

$(window).on('resize', breadcrumbInit);
breadcrumbInit();

});
