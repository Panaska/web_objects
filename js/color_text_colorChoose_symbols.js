

$(document).ready(function() {
	
	$(".test_color_text_symbols").each(function(){
		var CheckColorWords;
		$(this).find("p").each(function(){
		$(this).attr("name", "")
			var vkjkvn=0;
			$(this).contents().each(function(){
				if ($(this).attr("name")=="true") {
					var findname=$(this).parents("p").attr("name")
						var textLength=$(this).text();
						vkjkvn=vkjkvn+1
						findname+=""+vkjkvn+" "
						if (textLength.length>1) {
						for (var i=1; i<textLength.length; i++) {
							vkjkvn+=1
							findname+=""+vkjkvn+" "
						}
					}
					$(this).parents("p").attr("name", findname)
					}
				else vkjkvn+=$(this).text().length;
			});

			var textLength=$(this).text();
			var csthtml="<p class='replaced_p' name='"+$(this).attr("name")+"'>";

			for (var i=0;i<textLength.length; i++){
				csthtml+="<span class='wordColor_symbols'>"+textLength[i]+"</span>"
			}
			csthtml+="</p>"
			$(csthtml).appendTo($(this).parents(".test_color_text_symbols"))
			$(this).remove()
		})
		
		$(this).find(".wordColor_symbols").click(function(){
			$(this).toggleClass("wordColorClick_symbol")
			var checkSelect=$(this).parents("p").find(".wordColorClick_symbol")			//проверка, что в каждой строке выделено слово
			
			if (checkSelect.length!=0) $(this).parents("p").val(1)
				else $(this).parents("p").val(0)
			
			$(this).val($(this).parent().find(".wordColor_symbols").index($(this)))
			
			var NumSelect=0;
			$(this).parents(".test_color_text_symbols").find("p").each(function(){
				if ($(this).val()==1) NumSelect++;
				
			});
			
			
			if($(this).parents(".test_color_text_symbols").find(".wordColorClick_symbol").length!=0) {
				$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"})
				CheckColorWords=1;
			}
			else {
				$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
				CheckColorWords=0;
				
			}
		});
		
		
		
		$(this).parents(".interakt_zadanie").siblings(".head").find(".check_your").click(function(){
			var flag=1;
			var paragrafAmount=0;
			if (CheckColorWords==1)	{
				$(this).parents(".head").siblings(".interakt_zadanie").find(".test_color_text_symbols").find("p").each(function(){
					
					var asnwpravNum=0;
					var bkbkbkbk=$(this).attr("name").split(" ")	//правильные ответы
					if ($(this).find(".wordColorClick_symbol").length!=bkbkbkbk.length-1)	//если количество ответов не совпадает с нужным количеством, то не молодец
						flag=0
					
					
					for (var i=0; i<bkbkbkbk.length; i++) {
					var colorNum=parseInt(bkbkbkbk[i])
					}
					for (var i=0; i<bkbkbkbk.length; i++) {
						var colorNum=parseInt(bkbkbkbk[i])
					$(this).find(".wordColorClick_symbol").each(function(){
							if($(this).index()==colorNum-1) 
								asnwpravNum++;	//считаем правильнвые ответы
					});
					}
					if (asnwpravNum!=bkbkbkbk.length-1) flag=0; 
				});
				
				if (flag!=0) {
						$(this).siblings(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})
				}
				else $(this).siblings(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"100%", "background-position":"0em 0em", "border-radius":"10px"})
			}
		});
		
		$(this).parents(".interakt_zadanie").siblings(".head").find(".drop").click(function(){
			$(this).parents(".head").siblings(".interakt_zadanie").find(".test_color_text_symbols").find("p").each(function(){
				$(this).find(".wordColorClick_symbol").each(function(){
					$(this).removeClass("wordColorClick_symbol")

				})
			});

				$(this).parents(".interaktiv").find(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"})
				CheckColorWords=0;
			$(this).siblings(".result").css({"background": "none"})
		})	
	})


});
