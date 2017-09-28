
var Pic=[];

$(document).ready(function() {

	$(".int_paint").each(function(){

		var currentColor;	//переменная для запоминания выбранного цвета
		var delFlag=false;	//флаг для белого цвета
		var paintFlag=false;
		var Num=0;
		var testCheck;

		if ($(this).attr("testCheck")=="true")
			testCheck=1;

		if (testCheck!=1) {
			$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").remove()
		}

		$(this).find(".object_for_painting").each(function(){
			$(Pic[0][Num]).appendTo(this)	//загружаем svg в шаблон
			Num++
		})

		$(this).find(".object_for_painting").find("g").each(function(){	//запоминаем первоначальные цвета заливки и обводки
			$(this).attr("StartFillColor", $(this).attr("fill"))
			$(this).attr("StartStrokeColor", $(this).attr("stroke"))
		})

		$(this).find(".color_paint").click(function(){	//при выборе цвета из палитры
			paintFlag=true;
			$(this).parent().find(".choosedColor").removeClass("choosedColor")
			$(this).addClass("choosedColor")	//выделяем выбранный цвет
			currentColor=$(this)	//запоминаем выделенный цвет
			if ($(this).hasClass("delete_color")) //если удаление цвета, то ставим флаг
				delFlag=true;
			else delFlag=false;

			var StartStrokeColor;

			$(this).parents(".int_paint").find("g").mouseover(function(){	//подсветка при наведении

				if ($(this).attr("stopPainting")!="true")	{	//если элемент должен раскрашиваться
					StartStrokeColor=$(this).attr("stroke")
					$(this).attr("stroke", "grey")
				}
			})

			$(this).parents(".int_paint").find("g").mouseout(function(){	//убираем подсветку
				$(this).attr("stroke", $(this).attr("StartStrokeColor"))
			})
		})


		$(this).find(".object_for_painting").find("g").click(function(){	//при клике на изображение заливаем его выбранным цветом
		//если выбран белый цвет, то воспринимаем это как удаление цвета
			if ($(this).attr("stopPainting")!="true") {
			if (paintFlag) {
				if (!delFlag)
					$(this).attr("fill", currentColor.css("background-color"))
				else $(this).attr("fill", $(this).attr("StartFillColor"))
				$(this).attr("color", currentColor.attr("number"))
				if (!delFlag) {	//если выбран не белый цвет
					$(this).attr("colored", "true")	//отмечаем, что изображение покрашено
					if (testCheck==1) {	//есил задание с проверкой
						$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
						$(this).parents(".int_paint").attr("name", 1)
					}
				}
				else {
					$(this).attr("colored", "false")	//либо цвет удален
					
				}
				if (($(this).parents(".int_paint").find("[colored = true]").length)==0)
					if (testCheck==1) {
						$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
						$(this).parents(".int_paint").attr("name", 0)
					}
			}
		}
		})

		$(this).parents(".interakt_zadanie").siblings(".head").find(".drop").click(function(){	//сброс шаблона в первоначальное состояние
			

			$(this).siblings(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})	//кнопка проверки неактивна
			$(this).siblings(".result").css({"background": "none"})	//убираем результат теста
			$(this).parents(".head").siblings(".interakt_zadanie").find(".int_paint").attr("name", 0)	//убираем отметку, что неокторые изображения были закрашены
			$(this).parents(".head").siblings(".interakt_zadanie").find(".object_for_painting").find("g").each(function(){
				$(this).removeAttr("color")	//убираем отметку каким цветом было залито изображение
			})
			$(this).parents(".head").siblings(".interakt_zadanie").find(".object_for_painting").find("g").each(function(){
				$(this).removeAttr("colored")	//убираем отметку, что изображение было раскрашено
			})

			$(this).parents(".head").siblings(".interakt_zadanie").find("g").each(function(){
				$(this).attr("fill", $(this).attr("StartFillColor"))	//меняем фон изображений на белый
				
			})
			$(this).parents(".head").siblings(".interakt_zadanie").find(".color_paint").each(function(){
				$(this).removeClass("choosedColor")	//снимаем выделение с цветов
				paintFlag=false;	//снимаем отметку, что ведется раскрашивание
				$(this).parents(".int_paint").find("g").mouseover(function(){	//убираем подсветку при наведении
					$(this).attr("stroke", $(this).attr("StartStrokeColor"))
				})
			})
		})   

		$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").click(function(){	//проверка правильности раскрашивания
			
			if ($(this).parents(".head").siblings(".interakt_zadanie").find(".int_paint").attr("name")==1) {	//если раскрашивание было
				var flag=1;
				$(this).parents(".head").siblings(".interakt_zadanie").find(".object_for_painting").find("g").each(function(){
					if ($(this).attr("stopPainting")!="true")
						if ($(this).attr("neededColor")!=$(this).attr("color"))	//если выбранный цвет совпадает с нужным цветом, то "молодец"
							flag=0;
				})

				if (flag==1)
					$(this).siblings(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"auto 100%", "background-position":"3em 0em"})	//молодец
				else $(this).siblings(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"auto 100%", "background-position":"0em 0em"})	//попробуй еще раз
			}
		})   




	})
})

