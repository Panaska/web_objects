"use strict";




$(document).ready(function(){
	
	var fileArray = ["word_grid_0.html","table_scheme_1.html","spoiler_scheme_2.html","book_3.html","tabs_4.html","colors_5.html","riddles_6.html","crossword_7.html","new_words_8.html","slideshow_9.html","highlighting_10.html","connections_11.html","drag_in_table_12.html","drag_in_picture_13.html","drag_in_order_14.html","table_15.html","svg_picture_16.html","svg_scheme_17.html","svg_river_map_18.html","map_with_layers_19.html","coloring_20.html","addition_21.html","fractions_22.html","checkbox_23.html"];
	


	function loadDoc(url, cFunction) {		
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};


//for (var i=0; i<=23; i++) {	
	
function myFunction(xhttp) {	
 
for (var i=0; i<=23; i++) 
{
(function(i) { 

var classAjax = "ajax" + i;
var inside =  document.getElementsByClassName(classAjax);  
// console.log(i)
// console.log(classAjax)
// console.log(inside)
// console.log(inside[0])
inside[0].innerHTML = xhttp.responseText;;
})(i);
};

};
	
	for (var i=0; i<=23; i++) {	
	$("#n"+i).click(function(){
		var fileing = fileArray[i];
		return function() {
		loadDoc(fileing, myFunction);
		//console.log(fileing);
		};
	}(i));
}	  
});



/*$(document).ready(function(){
	$("#n0").click(function(){
        $(".ajax0").load("word_grid_0.html");
    });
	$("#n1").click(function(){
        $(".ajax1").load("table_scheme_1.html");
    });
	$("#n2").click(function(){
        $(".ajax2").load("spoiler_scheme_2.html");
    });
	$("#n3").click(function(){
        $(".ajax3").load("book_3.html");
    });
	$("#n4").click(function(){
        $(".ajax4").load("tabs_4.html");
    });
	$("#n5").click(function(){
        $(".ajax5").load("colors_5.html");
    });
	$("#n6").click(function(){
        $(".ajax6").load("riddles_6.html");
    });
    $("#n7").click(function(){
        $(".ajax7").load("crossword_7.html");
    });
	$("#n8").click(function(){
        $(".ajax8").load("new_words_8.html");
    });
	$("#n9").click(function(){
        $(".ajax9").load("slideshow_9.html");
    });
	$("#n10").click(function(){
        $(".ajax10").load("highlighting_10.html");
    });
	$("#n11").click(function(){
        $(".ajax11").load("connections_11.html");
    });
	$("#n12").click(function(){
        $(".ajax12").load("drag_in_table_12.html");
    });
	$("#n13").click(function(){
        $(".ajax13").load("drag_in_picture_13.html");
    });
	$("#n14").click(function(){
        $(".ajax14").load("drag_in_order_14.html");
    });
	$("#n15").click(function(){
        $(".ajax15").load("table_15.html");
    });
	$("#n16").click(function(){
        $(".ajax16").load("svg_picture_16.html");
    });
	$("#n17").click(function(){
        $(".ajax17").load("svg_scheme_17.html");
    });
	$("#n18").click(function(){
        $(".ajax18").load("svg_river_map_18.html");
    });
	$("#n19").click(function(){
        $(".ajax19").load("map_with_layers_19.html");
    });
	$("#n20").click(function(){
        $(".ajax20").load("coloring_20.html");
    });
	$("#n21").click(function(){
        $(".ajax21").load("addition_21.html");
    });
	$("#n22").click(function(){
        $(".ajax22").load("fractions_22.html");
    });
	$("#n23").click(function(){
        $(".ajax23").load("checkbox_23.html");
    });
});*/
