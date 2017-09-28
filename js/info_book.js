var Book=[];

$(document).ready(function(){

	$(".info_book").each(function(){
		
		var Num=10;		//переменная для z-index перелистываемых страниц
		var BookNum=$(".info_book").index(this);
		
		//-------Формируем книгу
		var bookHtml='<div class="right_podl_cover">'
		bookHtml+='</div>'
		bookHtml+='<div class="cover">'
		bookHtml+='<div class="book_cover">'
		bookHtml+=''+Book[BookNum][0]+''
		bookHtml+='</div>'
		bookHtml+='<div class="left_podl_cover">'
		bookHtml+='</div>'
		bookHtml+='</div>'
		bookHtml+='<div class="info_book_container">'

		//-------выгружаем контент в книгу

 		bookHtml+='<div class="page left flip not-transform" number=1 style="z-index: '+Num+'">'
		bookHtml+=''+Book[BookNum][1].text+''
		bookHtml+='</div>'
		Num++;
		bookHtml+='<div class="page right not-transform" style="z-index: '+Num+'">' //последняя страница - не переворачивается
		bookHtml+=''+Book[BookNum][Book[BookNum].length-1].text+''
		bookHtml+='</div>' 
		Num++;
		
		//последовательно выгружаем все страницы. Порядок обратный, чтобы первые страницы лежали сверху
		
		var Num_of_pages=Book[BookNum].length-2;
		
		for (var i=Book[BookNum].length-2; i>2; i=i-2) {		//идем от конца книги
			bookHtml+='<div class="page left" number='+Num_of_pages+' style="z-index: '+Num+'">'		//левая страница
			bookHtml+=''+Book[BookNum][i].text+''
			bookHtml+='</div>'
			bookHtml+='<div class="page right" number='+Num_of_pages+' style="z-index: '+Num+'">'	//правая страница
			bookHtml+=''+Book[BookNum][i-1].text+''
			bookHtml+='</div>'
			Num_of_pages=Num_of_pages-2;
			Num=Num+5	
		}
			
		bookHtml+='</div>'
			
		$(".info_book").eq(BookNum).html(bookHtml)	//выгружаем все в книгу
		
		$(this).find(".cover").click(function(){	//открывается книга
			$(this).addClass("open")	//обложка поворачивается
			$(this).animate({opacity: "0"}, 800)
			$(this).parents(".info_book").find(".info_book_container").animate({		//проявляется подложка с текстом
				opacity: "1",	
				zIndex:10,
			},600)
			$(this).css({"z-index": 5})
			$(this).parents(".info_book").find(".not-transform").find(".cursor").css({"cursor": 'url("../styles/img/lupa.cur"),url("../styles/img/lupa.cur"),pointer;'})
			$(this).parents(".info_book").find(".not-transform").addClass("openBook")
			//$(this).parents(".info_book").find("img").css({"cursor": "url('../styles/img/lupa.cur'),url('../styles/img/lupa.cur'),pointer;"})
		})
		
		
		/* $(this).find(".page.left.not-transform").find */

		$(this).find(".page").click(function(e){	//при клике на страницу
		
			if (($(this).hasClass("not-transform"))&&(!$(this).parents(".info_book").find(".cover").hasClass("open"))) {
				return false;
			}
	
			//если клик произошел не по картинке, не по аудио или видео
			if ((e.target.tagName!="IMG")&&(e.target.tagName!="AUDIO")&&(e.target.tagName!="VIDEO")) {
				//если клик не по первой левой странице
				if (!$(this).hasClass("not-transform")) {
					if ($(this).hasClass("right"))	//если клик по правой, то с задержкой изменяем прозрачность у содержимого предыдущей левой страницы
						setTimeout(changeOpacity, 490, this)
					if ($(this).hasClass("left")) //если клик по левой (не первой), то изменяем прозрачность у содержимого предыдущей левой страницы
						$(this).siblings("[class*='left'][number="+($(this).attr("number")-2)+"]").contents().css({"opacity": 1})
					$(this).css({"z-index": Num})	//меняем z-index у перелистываемых страниц
					$(this).siblings("[number="+$(this).attr("number")+"]").css({"z-index": Num})
					$(this).toggleClass("flip")	//переворачиваем страницу
					
					$(this).siblings("[number="+$(this).attr("number")+"]").toggleClass("flip")	//переворачиваем парную левую страницу
					Num++		
				}
				else {	//если клик по первой левой странице
					if ($(this).parents(".info_book").find(".cover").hasClass("open")) {
					if ($(this).hasClass("flip")) {
						$(this).parents(".info_book_container").animate({	//меняем прозрачность у книги
								opacity: "0",	
								//zIndex:10,
							},200)
						$(this).parents(".info_book").find(".cover").removeClass("open")	//закрываем обложку
						$(this).parents(".info_book").find(".cover").animate({opacity: "1"}, 250)
						$(this).parents(".info_book").find(".cover").css({"z-index": 100})
					}
					}
				}
			}
		})
	})
})

function changeOpacity(object){	//функция изменения прозрачности у предыдущей левой страницы
	$(object).siblings("[class*='left'][number="+($(object).attr("number")-2)+"]").contents().css({"opacity": 0})
}