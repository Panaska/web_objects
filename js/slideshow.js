var ImgMas=[];

var Num=[];
var Number=[];

var slidesMas=[];//=document.getElementsByClassName("slides");
var showMas=[];
var b=[];

$(document).ready(function () { //загрузка при открытии страницы. устанавливаем первое изображение видимым

showMas=document.getElementsByClassName("show");
	
	for (var i=0; i<showMas.length; i++) {
	Num[i]=0;
	Number[i]=1;
	}
	for (var j=0; j<ImgMas.length; j++) {
		var slhtml='<h3 style="display:none;">'+ImgMas[j][0]+'</h3>'
		
		slhtml+='<div class="imageCount" class="imageCount" style="margin: 0 auto; margin-bottom: 0.5em; text-align: center">'+'Slide '+Number[0]+' of '+(ImgMas[j].length-2)+'</div> '
		slhtml+='<div class="button29" style="left:0em" name="back"><img src="img/prev.png" alt="" /></div>'
		slhtml+='<div class="button29" style="right:0em" name="next"><img src="img/next.png" alt="" /></div>'
		slhtml+='<div id="sl" class="slidelist">'
		
		//if(ImgMas[j][1]=="yes"){
		
		for (var i=2; i<ImgMas[j].length; i++) {
		slhtml+='<div class="slides">'
		if ((ImgMas[j][i].link!=" ")&&(ImgMas[j][i].link.length!=0)) {
			slhtml+='<figure>'
			slhtml+='<a href="'+ImgMas[j][i].link+'" data-lightbox="'+ImgMas[j][i].title+'" data-title="'+ImgMas[j][i].title+'"><img src="'+ImgMas[j][i].link+'" alt="" /></a>'
			
			slhtml+='<figcaption>'+ImgMas[j][i].title+''
			if ((ImgMas[j][i].href!=" ")&&(ImgMas[j][i].href.length!=0))
				slhtml+=' <a href="'+ImgMas[j][i].href+'" target="_blank"><img alt="link_ext" src="img/link_ext.png" /></a></figcaption>'
			slhtml+='</figure>' 
		}
		if ((ImgMas[j][i].audioname!=" ")&&(ImgMas[j][i].audioname.length!=0)) 
			slhtml+='<p style="text-align:center"><audio id="player2" src="../sound/'+ImgMas[j][i].audioname+'" type="audio/mp3" controls="controls"></p>'
		slhtml+='<p>'+ImgMas[j][i].text+'</p>'
		slhtml+='</div>'
		}
		
		slhtml+='</div>'
		showMas[j].innerHTML=slhtml;
		b[j]=showMas[j].getElementsByClassName("button29");
		b[j][0].style.display="none";
		slidesMas[j]=showMas[j].getElementsByClassName("slides");
		for (var k=1; k<slidesMas[j].length; k++) $(slidesMas[j][k]).css({"opacity":"0"});
		slidesMas[j][0].style.display="block";
	}
	
	$(".button29").click(function(){
		
		var show_indx=$(this).parent().index(".show");
		if ($(this).attr("name")=="next") slide(show_indx);
		if ($(this).attr("name")=="back") back(show_indx);
	
	});
});

function back(N){
	if(b[N][1].style.display=="none") b[N][1].style.display="block";
	$(slidesMas[N][Num[N]]).fadeTo("fast", 0);
	slidesMas[N][Num[N]].style.display="none";
	slidesMas[N][Num[N]-1].style.display="block";
	$(slidesMas[N][Num[N]-1]).fadeTo("fast", 1);
	Num[N]--;
	Number[N]--;
	var html='Slide '+Number[N]+' of '+slidesMas[N].length;
	var a=showMas[N].getElementsByClassName('imageCount');
	a[0].innerHTML=html;
	if (Num[N]==0) b[N][0].style.display="none"
}

function slide(N){
	if(b[N][0].style.display=="none") b[N][0].style.display="block";
	$(slidesMas[N][Num[N]]).fadeTo("fast", 0);
	slidesMas[N][Num[N]].style.display="none";
	slidesMas[N][Num[N]+1].style.display="block";
	$(slidesMas[N][Num[N]+1]).fadeTo("fast", 1);
	Num[N]++;
	Number[N]++;
	var html='Slide '+Number[N]+' of '+slidesMas[N].length;
	var a=showMas[N].getElementsByClassName('imageCount');
	a[0].innerHTML=html;
	if (Num[N]==slidesMas[N].length-1) b[N][1].style.display="none"
}
