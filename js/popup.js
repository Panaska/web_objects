
function PopUp(obj,trig){
	var html = obj.html();
	obj.remove();
	var body = $('body')[0];
	var class_counter = obj.selector.slice(1);
	var HTML="<div id='popup_inside'><span id='cancel'></span>"+html+"</div>";
	var win = $("<div class="+ class_counter + "><div id='win'>"+HTML+'</div></div>');
	win.appendTo(body);
	
	function showWin(class_counter){	
		var childish = $("."+class_counter).find("#win");
		var child_childish = $("."+class_counter).find("#popup_inside");
		//$('.obj5 #win').css({display: 'block'});
		childish.css({display: 'block'});
		child_childish.css({
			display:'block', 
			opacity:0, 
			top: $(window).height()/2-child_childish.height()/2+'px', 
			left: $(window).width()/2-child_childish.width()/2+'px'
		});
		child_childish.css('opacity', 1);
		
		
		if(child_childish.find("#cancel")){
		child_childish.find("#cancel").click(function(){
			//$("."+class_counter).children().css('display', 'none');
			childish.css('display', 'none');
		});
	}			
	}
		
	if($(trig)){
		$(trig).click(function(){
			showWin(class_counter);//obj3
		});
	}	
}


 $(document).ready(
 function(){
	 for (var j=0; j<=9; j++) {
		 var all_trig = "#trigg" + j;
		 var all_name = ".naming" + j;
		 $(all_name).css({"display": "none"});
		var doing = function interior() {
			$(interior.all_trig).mouseover(function() {				
				$(interior.all_name).css("display", "block");
			});
			$(interior.all_trig).mouseout(function() {				
				$(interior.all_name).css("display", "none");
			});	
			}	
doing.all_trig=all_trig;			
doing.all_name=all_name;
doing();		
		}
	
			for (var i=0; i<=9; i++) {
				PopUp($('#obj'+i), $('#trigg'+i));				
			}
}
	
 

	
	);