//=========== Left Side Accordion ============
if ($(".accordion__item__header").length > 0) {
  var active = "active";
  $(".accordion__item__header").click(function () {
    $(this).toggleClass(active);
    $(this).next("div").slideToggle(200);
  });
}
//=========== People Fillter ============
$(document).ready(function(){
	
    $(".filter-button").click(function(){
		if ($(".filter-button.active").removeClass("active")) {
			$(this).removeClass("active");
		}
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
			$(this).addClass("active");
        }
		
    });
    
	
});