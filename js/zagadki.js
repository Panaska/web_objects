	
	$(document).ready(function(){
	$(".flipcard").click(function(){ //по клику вызывает анонимную функцию с indx
	
	indx=$(".flipcard").index(this); //определяет порядковый номер контейнера(флип) с картой
	$('.flipcard').eq(indx).toggleClass('flip')  //берет конкретный флип с порядковым номером indx, внутри него находит дочерний эелемент кард и добавляет/убирает класс

	});
	})