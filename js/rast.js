

		
$(document).ready(function() {
	var clicked = false;
	 $("[href='#twh12']").click(function(event) {
		 clicked = true;
		if (clicked) {
	//--------------------------------с перемещением плашек-------------------------
	
	$(".test_drag_table").each(function(){
		
				var amount=0;
		
		var ProvZap=[];
		
		var number=[];
		
		var mixElements=[];
				

	
	
		$(this).find(".trow").each(function(){
			$(this).val($(this).index())
			$(this).find(".stolb").each(function(){
				$(this).val($(this).index())
			});
		});
		
		var Num=$(this).find(".rastask");

		for (var i=0; i<Num.length; i++)
			mixElements[i]=0;
	
		$(this).find(".rastask").each(function(){
			var randNum=Math.floor(Math.random()*Num.length)
			if (mixElements[randNum]==0)
				mixElements[randNum]=$(this)
			else {
				randNum=0;
				while (mixElements[randNum]!=0)
					randNum++;
				mixElements[randNum]=$(this)
			}
			
			$(this).remove();
			
		})
		for (var i=0; i<mixElements.length; i++)
			$(mixElements[i]).appendTo($(this).find(".vopr"))
		var Numlength=$(this).find("[class=rastask][name!=no]").length
		
		ProvZap[amount]=Numlength;	//для нового дизайна
		number[amount]=0;
		$(this).val(amount);
		amount++;
		otst=$(".rastask").eq(0).height()/2; //рассчитываем отступ
		var i=0;
	var max=$(".rastask").eq(0).height();

	var stolbKol=document.getElementsByClassName('stolb');
	
	var par;
	$(this).find(".rastask").mousedown(function(){ //при выборе элемента
		if ($(this).parents(".interaktiv").find(".test_drag_table").attr("work_stop")!='true')
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em #3899E9', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #3899E9',
						'-moz-box-shadow': '0 0 0.4em 0.1em #3899E9',
						"z-index": "5",
					});
		w1=$(".rastask").index(this);
					
		$(this).draggable("option", {
		
		helper: "clone",
		containment: $(".rastask").eq(w1).parents(".test_drag_table"), //определяем границы перетаскивания
		
	});

	});
	
	$(this).find(".rastask").mouseup(function(){	//элемент больше неактивен
	if ($(this).parents(".interaktiv").find(".test_drag_table").attr("work_stop")!='true')
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em black',
						'-webkit-box-shadow':'0 0 0.4em 0.1em black',
						'-moz-box-shadow': '0 0 0.4em 0.1em black',
						});
	});

   $(this).find(".rastask").draggable({//revert:true,	//перетаскиваемый эелемент

 
	drag:function(){
		object_rast=$(this);	//запоминаем эелемент в переменную
	},
	
   });
   $(this).find(".stolb").has(".sobir").droppable({	//контейнер для сброса
		drop:function(){
		if ($(object_rast).parent().hasClass("vopr")) var checkParent=1;
			else checkParent=0;

		$(object_rast).appendTo($(this).find(".sobir"))
		var current=$(this).parents(".test_drag_table").val(); 

		number[current]++;

		if(($(this).parents(".rasp").find(".rastask")).length!=0) 
			{
				var aaa=$(this).parents(".interaktiv").find(".check_your")
				$(aaa).css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
				$(this).parents(".test_drag_table").attr("name", 1)
			}
			else {
				var aaa=$(this).parents(".interaktiv").find(".check_your")
				$(aaa).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
				$(this).parents(".test_drag_table").attr("name", 0)
			}	

		if ($(object_rast).attr('name')!='no')	{
		if ((($(this).parents(".trow").val()==(($(object_rast).attr('name').split(', '))[0]-1))&&($(this).val()==(($(object_rast).attr('name').split(', '))[1])))) {	//в правильный ли контейнер помещен элемент
				$(object_rast).val(1);
		}
		else {$(object_rast).val(0); }
		}
		else $(object_rast).val(0)

	   $(object_rast).css({	//определяем стиль
			"width": "90%",
			"margin-top": "0.5em",
			"margin-left": "0em",
			"left": "0em",
			"display": "block",
			'box-shadow' : '0 0 0.2em 0.1em black',
			'-webkit-box-shadow':'0 0 0.2em 0.1em black',
			'-moz-box-shadow': '0 0 0.2em 0.1em black',
			"z-index": "2",

	   })
		    	//помещаем эелемент в контейнер
   }});
   
		$(this).find(".vopr").droppable({	//контейнер для сброса в первоначальное место. В этом контейнере не выполняется проверка на правильность ответа
		drop:function(){
		var current=$(this).parents(".test_drag_table").val();
		number[current]--;
			var aaa=$(this).parents(".interaktiv").find(".check_your")//.css({"backgroud": "url('img/5.png') no-repeat;"})
				$(aaa).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
					$(this).parents(".test_drag_table").attr("name", 0)
			//}
			 $(object_rast).css({	//меняем стиль на первоначальный
			"width": "15%",
			"display": "inline-block",
			"margin-top": "0.5em",
			"margin-left": "0.5em",
			'border':"0",
			'box-shadow' : '0 0 0.4em 0.1em black',
			'-webkit-box-shadow':'0 0 0.4em 0.1em black',
			'-moz-box-shadow': '0 0 0.4em 0.1em black',
	   })
	   
	   $(object_rast).appendTo($(this));	//помещаем элемент в контейнер
	   $(object_rast).removeAttr("value")	//удаляем атрибут для отключения проверки правильности ответа у этого элемента
		}});
   
   $(this).parent().siblings(".head").find(".check_your").click(function(){	//проверка ответа
		var answ=0;

		if ($(this).parents(".interaktiv").find(".test_drag_table").attr("name")==1){
			var t=$(this).parents(".interaktiv").find(".rasp").find(".rastask");
			var i=0;
			$(t).each(function(){
				k=$(t[i]).val();
				if ($(t[i]).val()==1) {	//проверяем правильность по атрибуту. Если ответ дан верно, то элемент попадает в зеленую рамку
		
					$(t[i]).css({'border':" solid green"})
					answ++;
				}
				if ($(t[i]).val()==0) 
					$(t[i]).css({'border':" solid red"})	//если ответ дан неверно, то элемент обводится красной рамкой
				i++;
			});
			var changeBack=$(this).parents(".interaktiv").find(".test_drag_table");
			//console.log(answ, ProvZap[changeBack.val()])
			if (answ==ProvZap[changeBack.val()]) {
				changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})
			}
			else changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"10px"})
			$(this).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			$(this).parents(".interaktiv").find(".test_drag_table").attr("work_stop", true)
			$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table").find(".rastask").each(function(){
				$(this).draggable('disable')
			})
		}
	});
 
	$(this).parent().siblings(".head").find(".drop").click(function() {
		
		$(this).parents(".interaktiv").find(".rasp").find(".rastask").each(function(){
			$(this).appendTo($(this).parents(".test_drag_table").find(".vopr"))
			 $(this).css({	//меняем стиль на первоначальный
				"width": "15%",
				"display": "inline-block",
				"margin-top": "0.5em",
				"margin-left": "0.5em",
				'border':"0",
				'box-shadow' : '0 0 0.4em 0.1em black',
				'-webkit-box-shadow':'0 0 0.4em 0.1em black',
				'-moz-box-shadow': '0 0 0.4em 0.1em black',
			});
		});
		
			$(this).parents(".head").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			number[$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table").val()]=0;
			$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table").attr("name", 0)
			 $(this).parents(".head").find(".result").css({"background": "none"})
			 $(this).parents(".interaktiv").find(".test_drag_table").attr("work_stop", false)
			$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table").find(".rastask").each(function(){
				$(this).draggable('enable')
			})
	 });
	 
	
	}); 
   
	
	//--------------------------Без перемещения самих плашек-----------------------	
	$(".test_drag_table_with_clones").each(function(){
		
		var amount=0;
		
		var ProvZap=[];
		
		var number=[];
		
		$(this).find(".trow").each(function(){
			$(this).val($(this).index())

			$(this).find(".stolb").each(function(){
				$(this).val($(this).index())

			});
		});
		
		var Num=$(this).find(".rastask");
		var mixElements=[];
		
		for (var i=0; i<Num.length; i++)
			mixElements[i]=0;
		
		//----------------------------Перемешивание элементов---------------------
		$(this).find(".rastask").each(function(){
			var randNum=Math.floor(Math.random()*Num.length)
			if (mixElements[randNum]==0)
				mixElements[randNum]=$(this)
			else {
				randNum=0;
				while (mixElements[randNum]!=0)
					randNum++;
				mixElements[randNum]=$(this)
			}
			$(this).remove();
		})
		
		
		for (var i=0; i<mixElements.length; i++)
			$(mixElements[i]).appendTo($(this).find(".vopr"))

		var Numlength=$(this).find("[class=rastask][name!=no]")	//выбираем все плашки, которые должны быть перемещены
		
		var Numamount=Numlength.length;		
		$(Numlength).each(function(){
			if ($(this).attr('name').split('; ').length>0){
				for (var i=1; i<($(this).attr('name').split('; ')).length; i++) {
					Numamount++
				}
			}
		})
		
		ProvZap[amount]=Numamount;	//для нового дизайна
		number[amount]=0;
		$(this).val(amount);

		amount++;

	var stolbKol=document.getElementsByClassName('stolb');
	
	var par;
	
	$(this).find(".rastask").mousedown(function(){ //при выборе элемента
		w1=$(".rastask").index(this);
		$(this).draggable("option", {
		
		helper: "clone",
		containment: $(".rastask").eq(w1).parents(".test_drag_table_with_clones"), //определяем границы перетаскивания
		
	});
		if ($(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop")!='true')
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em #3899E9', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #3899E9',
						'-moz-box-shadow': '0 0 0.4em 0.1em #3899E9',
						"z-index": "5",
						});
	});
		
	$(this).find(".rastask").mouseup(function(){	//элемент больше неактивен
	if ($(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop")!='true')
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em black',
						'-webkit-box-shadow':'0 0 0.4em 0.1em black',
						'-moz-box-shadow': '0 0 0.4em 0.1em black',
						});
	});

   $(this).find(".rastask").draggable({	//перетаскиваемый эелемент
 
	drag:function(){
		object_rast=$(this);	//запоминаем эелемент в переменную
	},
	
   });

   $(this).find(".stolb").has(".sobir").droppable({	//контейнер для сброса
		drop:function(){
			
			$(object_rast).css({	
						'box-shadow' : '0 0 0.4em 0.1em black',
						'-webkit-box-shadow':'0 0 0.4em 0.1em black',
						'-moz-box-shadow': '0 0 0.4em 0.1em black',
						});
			
		
		cloneObj=$("<div class='rastask clone' name='"+$(object_rast).attr("name")+"' >"+$(object_rast).html()+"</div>")	//копируем элемент
		$(cloneObj).mousedown(function(){ //при выборе элемента
		if ($(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop")!='true')
		$(this).css({	
						'box-shadow' : '0 0 0.4em 0.1em #3899E9', //меняется его стиль
						'-webkit-box-shadow':'0 0 0.4em 0.1em #3899E9',
						'-moz-box-shadow': '0 0 0.4em 0.1em #3899E9',
						'-webkit-border-radius': '0.5em',
						});
			w1=$(".rastask").index(this);		
			$(this).draggable("option", {
				helper: "clone",
				containment: $(".rastask").eq(w1).parents(".test_drag_table_with_clones"), //определяем границы перетаскивания
			});
		
		});
		
		$(cloneObj).mouseup(function(){ //при выборе элемента
		if ($(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop")!='true')
		$(this).css({	
						'border': 0,
						'box-shadow' : '0', //меняется его стиль
						'-webkit-box-shadow':'0',
						'-moz-box-shadow': '0',
						});
		});
		
		$(cloneObj).draggable({
			containment:$(this).parents(".test_drag_table_with_clones"),
			drag:function(){
				object_rast=$(this)

			}
		});
		
		$(cloneObj).appendTo($(this).find(".sobir"));
		
		var current=$(this).parents(".test_drag_table_with_clones").val();

		number[current]++;

			if(($(this).parents(".rasp").find(".rastask")).length!=0) 
			{
				var aaa=$(this).parents(".interaktiv").find(".check_your")
				$(aaa).css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
				$(this).parents(".test_drag_table_with_clones").attr("name", 1)
			}
			else {
				var aaa=$(this).parents(".interaktiv").find(".check_your")
				$(aaa).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
				$(this).parents(".test_drag_table_with_clones").attr("name", 0)
			}
		
		/*  if ((($(this).parents(".trow").val()==(($(cloneObj).attr('name').split(', '))[0]-1))&&($(this).val()==(($(cloneObj).attr('name').split(', '))[1])))) {	//в правильный ли контейнер помещен элемент
				$(cloneObj).val(1);
		}
		else {$(cloneObj).val(0); }  */
		var objFlag=0;
		//console.log($(cloneObj).attr('name').split('; '))
		if (($(cloneObj).attr('name').split('; ')).length>0) {
		for (var i=0; i<($(cloneObj).attr('name').split('; ')).length; i++) {
		if (($(this).parents(".trow").val()==(($(cloneObj).attr('name').split('; ')[i]).split(', ')[0]-1))&&($(this).val()==($(cloneObj).attr('name').split('; ')[i]).split(', ')[1])) {	//в правильный ли контейнер помещен элемент
				objFlag=1;
		}
		
	//	console.log(($(cloneObj).attr('name').split('; ')[0]).split(', ')[0])
		}
		if (objFlag==1)
			$(cloneObj).val(1)
		else {$(cloneObj).val(0); }
		}
		else {
			if ((($(this).parents(".trow").val()==(($(cloneObj).attr('name').split(', '))[0]-1))&&($(this).val()==(($(cloneObj).attr('name').split(', '))[1])))) {	//в правильный ли контейнер помещен элемент
				$(cloneObj).val(1);
			}
			else {$(cloneObj).val(0); }
		}
   }});
   
		$(this).find(".vopr").droppable({	//контейнер для сброса в первоначальное место. В этом контейнере не выполняется проверка на правильность ответа
		drop:function(){

			
		if ($(object_rast).hasClass("clone")) {
				
			if ($(this).parents(".interaktiv").find(".rasp").find(".rastask").length==2) {
			$(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("name",0)
			$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			}
			$(object_rast).remove();
		}
		
   }});
   
   
   $(this).parent().siblings(".head").find(".check_your").click(function(){	//проверка ответа
    var answ=0;
 	if ($(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("name")==1){
	var t=$(this).parents(".interaktiv").find(".rasp").find(".rastask");
	  var i=0;
	$(t).each(function(){
		k=$(t[i]).val();
		 if ($(t[i]).val()==1) {	//проверяем правильность по атрибуту. Если ответ дан верно, то элемент попадает в зеленую рамку
		
		$(t[i]).css({'border':" solid green"})
		answ++;
		}
	 if ($(t[i]).val()==0) 
	 		$(t[i]).css({'border':" solid red"})	//если ответ дан неверно, то элемент обводится красной рамкой
		i++;
		});
	var changeBack=$(this).parents(".interaktiv").find(".test_drag_table_with_clones");

		if (answ==ProvZap[changeBack.val()]) {
			changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})
		}
		else changeBack.parent().siblings(".head").find(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"10px"})
	}
	$(this).css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
	$(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("name",0)
	$(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop", true)
	$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table_with_clones").find(".rastask").each(function(){
				$(this).draggable('disable')
			})
   });
 
	 $(this).parent().siblings(".head").find(".drop").click(function() {
		 
		 $(this).parents(".interaktiv").find(".rasp").find(".rastask").each(function(){
			 $(this).remove()
		});
		
			$(this).parents(".head").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
			number[$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table_with_clones").val()]=0;
			$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table_with_clones").attr("name", 0)
			 $(this).parents(".head").find(".result").css({"background": "none"})
			 
			$(this).parents(".interaktiv").find(".test_drag_table_with_clones").attr("work_stop", false)
	$(this).parents(".head").siblings(".interakt_zadanie").find(".test_drag_table_with_clones").find(".rastask").each(function(){
				$(this).draggable('enable')
			})
			 
	 })


 });
 
 
 }
 
});



    });   

