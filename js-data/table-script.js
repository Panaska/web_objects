$(document).ready(function(){
    $(".sh_1").click(function(){
        $(".shown_1").toggle();
		$(".shown_2,.shown_3,.shown_4").css("display","none");
		$(".lefty").toggleClass("red_alert");
		$(".righty,.centry").removeClass("red_alert");
		
    });
	
	$(".sh_2").click(function(){
        $(".shown_2").toggle();
		$(".shown_1,.shown_3,.shown_4").css("display","none");
		$(".centry").toggleClass("red_alert");
		$(".righty,.lefty").removeClass("red_alert");
		
    });
	
	$(".sh_3").click(function(){
        $(".shown_3").toggle();
		$(".shown_1,.shown_2,.shown_4").css("display","none");
		$(".righty").toggleClass("red_alert");
		$(".centry,.lefty").removeClass("red_alert");
		
    });
	
	$(".sh_4").click(function(){
        $(".shown_4").toggle();	
		$(".shown_1,.shown_2,.shown_3").css("display","none");		
		$(".righty,.centry,.lefty").removeClass("red_alert");
    });
});