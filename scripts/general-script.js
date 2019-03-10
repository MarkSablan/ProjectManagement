$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('nav').addClass('scrolled');
	}else{
		$('nav').removeClass('scrolled');
	}
})

$("document").ready( function(){
	// $(".verify").flickity();
	// $('.carousel').flickity();
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

// Preview upload image

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInput").change(function() {
  readURL(this);
});