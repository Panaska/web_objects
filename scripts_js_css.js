"use strict";



creatingPs();
boxShadowStyles();
wrappingDivs();
namesOfBlocks();
creatingPopups();
setClassesForOpenWindows();
allFresh();

/* function hideClass(m) {
	m.innerHTML = "DDD";
	m.style.visibility="hidden";
	}
	
	//Пример использования: <div class="n18" id="n7" onmouseover="expandClass(this)">httyty</div>
	
	function expandClass(n) {
	n.innerHTML = "DDD";
	n.style.backgroundColor="white";
	n.style.fontSize="2em";
	} */

function creatingPs() {

    for (var i = 0; i < 24; i++) {

        var mainPs = document.createElement("p");
		mainPs.className = "numberPs";
        var ze = i + 1;
        var numbering = document.createTextNode("Example №" + ze);
        var att = document.createAttribute("id");
        var pId = "n" + i;

        att.value = pId;

		document.body.appendChild(mainPs).appendChild(numbering);
		

        var mainPsIds = mainPs.setAttributeNode(att);
    }
}

function boxShadowStyles() {
    var nodelist = document.getElementsByClassName("numberPs").length;
    //console.log(nodelist);
    for (var i = 0; i < nodelist; i++) {
        var k = "n" + i;
        var node = document.getElementById(k);
        var colorAuto = "#";

        for (var f = 0; f < 6; f++) {
            var rand = Math.floor(Math.random() * 10);
            if (rand > 5 && f == 0) {
                rand = "B";
            } else if (rand > 2 && f == 3) {
                rand = "E";
            } else if (rand > 7 && f < 2) {
                rand = "A";
            } else if (rand > 8 && f < 5) {
                rand = "C";
            } else if (rand > 3 && f < 1) {
                rand = "D";
            } else if (rand == 4 && f < 7) {
                rand = "F";
            }
            colorAuto += rand;
        }
        //console.log(colorAuto);

        node.style.backgroundColor = colorAuto;

       // console.log(node.style.backgroundColor);

        node.style.boxShadow = '2px 2px 5px 1px ' + colorAuto + ',  4px 4px 2px 0px black';

    }
}

function wrappingDivs() {
    var nodelist = document.getElementsByClassName("numberPs").length;
    //console.log(nodelist);

    for (var i = 0; i < nodelist; i++) {
        var k = "n" + i;
        //console.log(k);
        var node = document.getElementById(k);

        var wrapA = document.createElement("a");
		
		//div.className = k;

        var att1 = document.createAttribute("class");
        var att2 = document.createAttribute("href");
        var att3 = document.createAttribute("target");
        att1.value = "wrapper";
        att2.value = "#twh"+i;
        att3.value = "_self";

        document.body.appendChild(wrapA).appendChild(node);

        var wrapAClass = wrapA.setAttributeNode(att1);
		var wrapAHref = wrapA.setAttributeNode(att2);
		var wrapATarget = wrapA.setAttributeNode(att3);
		

    }

}


function namesOfBlocks() {
	var nodelist = document.getElementsByClassName("numberPs").length;
    
var namesArray = [ "English. Word Grid", "English. Table Scheme", "English. Spoiler Scheme", "English. The Book", "English. Tabs", "English. Colors", "English. Riddles", "English. Crossword", "English. New Words", "English. Slide-Show", "English. Highlighting", "English. Connections", "English. Drag-in-Table", "English. Drag-in-Picture","English. Drag-in-Order", "Chemistry. Table", "History. SVG Picture", "History. SVG Scheme", "Geography. SVG River Map", "Geography. Map with Layers", "Maths. Coloring",  "Maths. Addition and subtraction", "Maths. Fractions", "Maths. Checkbox" ];
//var [name0, name1, name2, ...rest] = namesArray;
    for (var i = 0; i < nodelist; i++) {
	var spans = document.createElement("span");
	
	spans.innerHTML = "<br>";
	//document.getElementById("n" + i).getElementsByTagName("span").innerHTML = "i";
	//spans.className = "num" + i;

    var nameing = document.createTextNode(namesArray[i]);
	 	
		document.getElementById("n" + i).appendChild(spans).appendChild(nameing);
		//document.getElementsByClassName("wrapper" + i).appendChild(secondPs).appendChild(nameing);
       // f.appendChild(secondPs));
	//var newContent0 = "name0".replace("name0",name0);
	//var newContent1 = "name1".replace("name1",name1);
	//spans.innerHTML = "<br>"+newContent;
}

	
    //"name1".replace(name1);
}

function creatingPopups() {
    var nodelist = document.getElementsByClassName("numberPs").length;

    for (var i = 0; i < nodelist; i++) {
		 var divOverlay = document.createElement("div");
		var att1 = document.createAttribute("class");
        var att2 = document.createAttribute("id");
        var att3 = document.createAttribute("href");
         att1.value = "overlay";
         att2.value = "twh"+i;
         att3.value = "#x";
		
		var divPopup = document.createElement("div");
		 var att4 = document.createAttribute("class");
		 att4.value="popup"
		
		 var divAjax = document.createElement("div");
		 var att5 = document.createAttribute("class");
		 att5.value="ajax"+i;
		
		 var aClose = document.createElement("a");
		 var att6 = document.createAttribute("class");
        var att7 = document.createAttribute("title");
         var att8 = document.createAttribute("href");
		 att6.value = "close";
         att7.value = "Закрыть";
         att8.value = "#close";
		
		document.body.appendChild(divOverlay);
		document.body.appendChild(divPopup).appendChild(divAjax);
		document.body.appendChild(divPopup).appendChild(aClose);
		
		 var divClass = divOverlay.setAttributeNode(att1);
		 var divId = divOverlay.setAttributeNode(att2);
		 var divHref = divOverlay.setAttributeNode(att3);
		 var divClassNext = divPopup.setAttributeNode(att4);
		 var divClassIn = divAjax.setAttributeNode(att5);
		 var aClass = aClose.setAttributeNode(att6);
		 var aTitle = aClose.setAttributeNode(att7);
		 var aHref = aClose.setAttributeNode(att8);

    }

}

function setClassesForOpenWindows() {	
	
     // location.reload(true);
	// $("#body").load("index_grid.html")
	//$(".popup").hide();
	//$(".popup") = this;
	for (var i = 0; i < 24; i++) {
		var counting = "#twh" + i;		
		//console.log(counting +"+ .popup");
		//$(counting +"+ .popup").addClass("active"+i); 
	//console.log("[href="+"'"+counting+"']");
		 $("[href="+"'"+counting+"']").click(function(x) {
			 return function() {
				 counting = "#twh" + x;
         //console.log(counting +"+ .popup");
			// console.log("active"+x);
			$(counting +"+ .popup").addClass("active"+x);			
      };
    }(i));
	
	$(".close").click(function(x) {
		 return function() {
			  counting = "#twh" + x;
			  $(counting +"+ .popup").removeClass("active"+x);
			  // location.reload(true);
			  };
		 
	}(i));
			 
		 };	
		
		
	//if($("active"+i).css("visibility") == "visible") {
	//$(".popup","active"+i).css("visibility", "hidden"); 
	//$("active"+i ".close").attr("href", "#close");
 // }
	}
	
	
/* 	console.log($(".popup").css("visibility"));
if(window.reload && $(".popup").css("visibility") == "visible") {$(".popup").css("visibility","hidden")} */

// if(window.reload) {$("[href^='#twh']").css("href","#close")}

// if(location.reload (true)) {location.href = "#close";break;}

function allFresh() {
 //location.href = "#close";
// window.addEventListener("load", location.href = "index_grid.html");
 window.addEventListener("load", location.href = "#close");
 // $("#body").onunload = function(){location.href = "#close"};
}

