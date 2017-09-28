

$(document).ready(function() {
	var clicked = false;
		 $("[href='#twh22']").click(function(event) {
		 clicked = true;		 
		if (clicked) {
	
	
	
	var CheckDragWord;
	var cloneObj;
	var object;
	var par;
	var w1, h1,x1,y1;
	$(".test_drag_word").each(function(){
		var Num=$(this).find(".drop_drag_word");	//считаем количество пропусков
		$(this).val(Num.length);
	
		
	$(".rastask_word").mousedown(function(){ //при выборе элемента
	w1=$(".rastask_word").index(this);		
	
	$(this).draggable("option", {
		helper: "clone",
		containment: $(".rastask_word").eq(w1).parents(".test_drag_word"), //определяем границы перетаскивания
	});
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em #3899E9', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #3899E9',
						'-moz-box-shadow': '0 0 0.4em 0.1em #3899E9',
						//"z-index": "5",
						});
	});
	
		$(".rastask_word").mouseup(function(){	//элемент больше неактивен
		$(this).css({
							"border": "0em",
						});
	});
	
   $(".rastask_word").draggable({	//перетаскиваемый эелемент
   
	drag:function(){
		
		object=$(this);	//запоминаем эелемент в переменную
		 w1=$(".rastask_word").index(this);		
		 /*$(".drop_drag_word").mouseenter(function(){
			console.log("hover")
			$(object).css({	
						'box-shadow' : '0 0 0.4em 0.1em #80c468', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #80c468',
						'-moz-box-shadow': '0 0 0.4em 0.1em #80c468',
						//"z-index": "5",
						});
		});*/
	},
	

   });
   
  	$(".drop_drag_word").droppable({	//контейнер для сброса. В этом контейнере выполняется проверка на правильность ответа
		drop:function(){
			$(object).css({	
						'box-shadow' : '0 0 0.4em 0.1em', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em',
						'-moz-box-shadow': '0 0 0.4em 0.1em',
						//"z-index": "5",
						});
		cloneObj=$("<div class='rastask_word clone' name='"+$(object).attr("name")+"' >"+$(object).html()+"</div>")	//копируем элемент
		$(cloneObj).mousedown(function(){ //при выборе элемента
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em #3899E9', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #3899E9',
						'-moz-box-shadow': '0 0 0.4em 0.1em #3899E9',
						//"z-index": "5",
						});
			w1=$(".rastask_word").index(this);		
			$(this).draggable("option", {
				helper: "clone",
				containment: $(".rastask_word").eq(w1).parents(".test_drag_word"), //определяем границы перетаскивания
			});
		
		});
		
		$(cloneObj).mouseup(function(){ //при выборе элемента
		$(this).css({	
						'border': 0,
						'box-shadow' : '0', //меняется его стиль
						'-webkit-box-shadow':'0',
						'-moz-box-shadow': '0',
						//"z-index": "5",
						});
		});
		
		cloneObj.draggable({
			containment:$(this).parents(".test_drag_word"),
			drag:function(){
				object=$(this)
			}
		});
		
		cloneObj.appendTo(this);
		//console.log($(this).attr("name"), $(cloneObj).attr("name"))
		if ($(this).attr("name")==$(cloneObj).attr("name")) $(cloneObj).val(1);
		
		else {$(cloneObj).val(0); }
		//console.log($(cloneObj).val())
		$(this).droppable( "option", "disabled", true );
		
		var DisNum=$(this).parents(".test_drag_word").find(".ui-droppable-disabled")

		if (DisNum.length==$(this).parents(".test_drag_word").val())
			{var aaa=$(this).parents(".interaktiv").find(".check_your")
				$(aaa).css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
				CheckDragWord=1;
			}			
		
		$(this).css({
			"min-height": "1.5em",
			"max-width": "100%"
		});
			 $(cloneObj).css({	//меняем стиль на первоначальный
			"margin-top":"0em",
			'left':0,
			"top":"0",
			"max-width": "100%",
			"display": "block",
			'border':"0",
		 })
	 }});

   
   $(".vopr_drag_word").droppable({	//контейнер для сброса в первоначальное место. В этом контейнере не выполняется проверка на правильность ответа
		drop:function(){
		if ($(object).hasClass("clone")) {
			$(object).parent().droppable( "option", "disabled", false);
			$(object).parent().css( {"border": "1px solid #80c468"});
			CheckDragWord=0;
			$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			$(object).remove();
		}
		
	
   }});
   
   $(this).parent().siblings(".head").find(".check_your").click(function(){	//проверка ответа
   var answ=0;
   
   
   	if(CheckDragWord==1){
   		//answ=0;
	
	var t=$(this).parents(".interaktiv").find(".rasp_drag_word").find(".clone");
	  var i=0;
	$(t).each(function(){
	
		 if ($(t[i]).val()==1) {	//проверяем правильность по атрибуту. Если ответ дан верно, то элемент попадает в зеленую рамку
		
		$(t[i]).parent().css({'border':"0.2em solid #60bc57"})
		answ++;
		}
	 if ($(t[i]).val()==0) 
	 		$(t[i]).parent().css({'border':"0.2em solid #d34227"})	//если ответ дан неверно, то элемент обводится красной рамкой
		i++;
		});
	var changeBack=$(this).parents(".interaktiv").find(".test_drag_word");
	
		if (answ==changeBack.val()) {
			changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})
		}
		else changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"10px"})
	}
   });
      
		$(this).parent().siblings(".head").find(".drop").click(function() {	  
		
			$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			$(this).parents(".interaktiv").find(".result").css({"background":"none"});
			
			 $(this).parents(".interaktiv").find(".test_drag_word").find(".clone").each(function(){
				$(this).parents(".drop_drag_word").droppable( "option", "disabled", false );
				$(this).parents(".drop_drag_word").css({"border": "1px solid #0AB7D3"})
				$(this).remove()
				
			});
		});
	  
	 
	 });
   }});
});

