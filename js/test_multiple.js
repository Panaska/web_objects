


$(document).ready(function() {

	$(".input_place").has("input[type='checkbox']").each(function(){
	 var CheckMult=0;
		var Answ_am=0;
	
   $(this).find("input[type='checkbox']").each(function(){// $(".input_place input[type='checkbox']").each(function(){
	  
         if ($(this).val()==1) Answ_am++;
   });
   	
  // $(".input_place input[type='checkbox']").click(function(){
	  $(this).find("input[type='checkbox']").click(function(){
		var aaa_Mult=$(this).parents(".interaktiv").find(".check_your")//.css({"backgroud": "url('../img/5.png') no-repeat;"})
		//console.log(($(this).parents(".input_place").find("input[type='checkbox']:checked")).length)
		if(($(this).parents(".input_place").find("input[type='checkbox']:checked")).length!=0) {
		
			$(aaa_Mult).css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
			CheckMult=1;
		}
		else {
			CheckMult=0;
			$(aaa_Mult).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
		}
	})
   
   $(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").click(function(){	//проверка ответа
		if(CheckMult!=0){
			var provOtw=0;
			var wrongMark=0;
			var changeBackMult=$(this).parents(".interaktiv");
			var otwMult=$(this).parents(".interaktiv").find("input[type='checkbox']:checked");
			for (var i=0; i<otwMult.length; i++) {
					if(otwMult[i].value==1)
					provOtw++;
					else wrongMark=1;
			}

			if((provOtw==Answ_am)&&(wrongMark==0))

   				{
   					changeBackMult.find(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"0em 0em"})
   				}
   			else changeBackMult.find(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"10px"})
		}
	});
	
	$(this).parents(".interakt_zadanie").siblings(".head").find(".drop").click(function(){
		$(this).parents(".interaktiv").find($(".input_place").has("input[type='checkbox']")).find("input[type='checkbox']:checked").removeAttr("checked")
		$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
		$(this).parents(".interaktiv").find(".result").css({"background":"none"});		
		CheckMult=0;		
	});
   
	});
	
});