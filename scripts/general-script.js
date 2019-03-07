$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('nav').addClass('scrolled');
	}else{
		$('nav').removeClass('scrolled');
	}
})

$("document").ready( function(){
	$(".carousel").flickity();

	
})

function showDialog(dialog, width, height){
	$(dialog).dialog({
		minWidth: width,
		minHeight: height,
		dialogClass: "no-close",
		draggable: true,
		position: { my: "center", at: "center", of: window} 
	});
}

function closeDialog(dialog){
	$(dialog).dialog("destroy");
}