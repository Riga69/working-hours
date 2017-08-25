$(document).ready(function(){
    $('.description').hover(function(){	
	var alttext = $(this).attr('alt') 	
	$('.description-end').html(alttext).show();	
            $('.description-end').offset({top:$(this).offset().top+$(this).height(),left:$(this).offset().left});
	},function(){
            $('.description-end').hide();	
    });
});
		