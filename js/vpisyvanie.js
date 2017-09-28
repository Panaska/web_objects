"use strict"

$(document).ready(function(){
	
	$(".interaktiv_vpisyvanie").each(function(){
		
		var vpisAmount=0;
var CheckFullVpis=[];
var ChangeVpis=[];
		
		var Num=$(this).find(".write");
		
		$(this).find(".write").each(function(){	//принимает ширину самого большого ответа
			var nnn=$(this).attr("name").split("$")
			//console.log(nnn[0].length)
			var max=nnn[0].length;
			for (var i=0; i<nnn.length; i++)
				if (nnn[i].length>max) max=nnn[i].length
			$(this).css({"width": max+"em"});
			//$(this).css({"width": 2+"em"});
		});
		
		/*	$(this).find(".write").each(function(){
			$(this).css({"width": $(this).attr("name").length+"em"});
		});*/
				
		CheckFullVpis[vpisAmount]=Num.length;	//для нового дизайна
		ChangeVpis[vpisAmount]=0;
		$(this).val(vpisAmount);
		vpisAmount++;
		
	//$(this).find(".write").change(function(){
		$(this).find(".write").keyup(function(){
			
			var checkForFull=1;
			
			$(this).siblings(".write").each(function(){
				if ($(this).val().length==0)
					checkForFull=0;
			})
			
			//var lenWrite=$(this).val().length
		//$(this).css({"width": 2+lenWrite+"em"});

		//	if ($(this).css("width")=="2em")
			if ($(this).val().length==0)
				checkForFull=0;
			
			if (checkForFull!=0) {
			
		//var current=$(this).parents(".interaktiv_vpisyvanie").val();
		//ChangeVpis[current]++;

		//if (ChangeVpis[current]==CheckFullVpis[current]) {
				//console.log(1);
				//var aaa=$(this).parents(".interaktiv_trener").find(".check_your")//.css({"backgroud": "url('img/5.png') no-repeat;"})
				var aaa=$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your")//.css({"backgroud": "url('img/5.png') no-repeat;"})
				$(aaa).css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
				$(this).parents(".interaktiv_vpisyvanie").attr("name", 1)
		//}
		}
		
		else {
			$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			$(this).parents(".interaktiv_vpisyvanie").attr("name", 0)
		}
	});
		
	$(this).parent().siblings(".head").find(".check_your").click(function(){
		//alert(1)
		//$(if ($(this).parent().parent().find(".interaktiv_vpisyvanie").)
		if ($(this).parent().parent().find(".interaktiv_vpisyvanie").attr("name")==1){
			var answ=0;
		var down_par=$(this).parent().parent();
		var select=$(down_par).find('.write');
	/*	for (var i=0; i<select.length; i++) {
			if (select[i].value==select[i].name) {
				select[i].style.border="0.2em solid #60bc57";
				answ++;
			}*/
			
			$(select).each(function(){
				var flag1=0;
				var nnn=$(this).attr("name").split("$")
				for (var i=0; i<nnn.length; i++) {
					if ($(this).val()==nnn[i]) {flag1=1;answ++;break}
				}
				if (flag1==1)
					$(this).css({"border": "0.2em solid #60bc57"})
				else $(this).css({"border": "0.2em solid #d34227"})
				
			})
		
		var changeBack=$(this).parent().parent().find(".interaktiv_vpisyvanie");
		if (answ==CheckFullVpis[changeBack.val()]) {
			changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})
		}
		else changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"15px"})
		
		}
		})	
		
		$(this).parent().siblings(".head").find(".drop").click(function(){	//сброс ответа
			
			$(this).siblings(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			
			$(this).siblings(".result").css({"background": "none"})
			
			$(this).parents(".head").siblings(".interakt_zadanie").find(".interaktiv_vpisyvanie").find(".write").each(function(){
				$(this).css({"border": "border:1px solid #3b9d32"})
				$(this).val('')
				$(this).parents(".interaktiv_vpisyvanie").attr("name", 0)
				//$(this).css({"width": $(this).css("min-width")});
				ChangeVpis[$(this).parents(".interaktiv_vpisyvanie").val()]=0;
			})
		})
		
	});

});