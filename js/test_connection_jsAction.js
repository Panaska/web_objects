var connection={
    /*инициализация функционала теста*/
     screenResol:0,
     tableHeight:0,
     modeFlagCoach:0, /* 0 - тренировочный , 1 - контролирующий */
     numItem:0,
     workArea:{},
     test:{},
     initTest:   function(ob){
            this.firstJob(ob);
            var arKeyJobInd=Object.keys(this.test.job);
            var htmlInd='';
            for(var ind=0; ind<arKeyJobInd.length; ind++){
                var ball='';
                if(this.modeFlagCoach==1)ball=' data-ball="100"';
                htmlInd+='<div id="'+arKeyJobInd[ind]+'" class="light grey"'+ball+'></div>';
            }
            $('.indicate').html(htmlInd);
            $('.light#'+$('.tJob').data('job')).addClass('focus');
            var tmpOb=this;
            ob.on('click','.active', function(){
                if(ob.children('.tJob').attr('data-answer')==1)return false;//lock if answering yet
                if($(this).hasClass('linkItem') && $('.checkItem').length==0){//del link
                    var arClasses=$(this).attr('class').split(' ');
                    for(var k in arClasses){
                        var cls=arClasses[k];
                        if(cls.slice(0,3)=='num'){
                            ob.children('table').children('tbody').children('tr').children('td').children('div.'+arClasses[k]).remove();
                            ob.children('table').children('tbody').children('tr').children('td.'+arClasses[k]).each(function(){
                                var cnt=$(this).attr('class').split('num').length;
                                $(this).removeClass(arClasses[k]);
                                if(cnt==2){
                                    $(this).removeClass('linkItem');
                                }
                            });
                        }
                    }
                    return false;

                }

                if($(this).hasClass("checkItem")){
                    if(ob.children('table').children('tbody').children('tr').children('.checkItem').length==1){//del class checkItem
                        ob.children('table').children('tbody').children('tr').children('.checkItem').removeClass('checkItem');
                    }
                }else{//creating links
                    $(this).addClass("checkItem");
                    if(ob.children('table').children('tbody').children('tr').children('.checkItem').length==2){
                        if(tmpOb.creatLine(false, ob)==false)$(this).removeClass("checkItem");
                    }
                }

            });

            $(window).resize(function(){
                var arNum= new Array();
                ob.children('table').children('tbody').children('tr').children('td').children('.line').each(function(){
                    var ar=$(this).attr('class').split(' ');
                    for(var i in ar){
                        if(ar[i].slice(0,3)=='num'){
                            arNum[arNum.length]=ar[i];
                        }
                    }
                });
                for(var nd in arNum){
                    var cLine=0;
                    var rLine=0;
                    var arCord;
                    ob.children('table').children('tbody').children('tr').children('td.'+arNum[nd]).each(function(){
                        arCord=tmpOb.coordTd($(this));
                        rLine=arCord[0]-rLine;
                        cLine=arCord[1]-cLine;
                    });
                    var rl=parseInt(arCord[0])-(rLine/2);
                    var cl=parseInt(arCord[1])-(cLine/2);
                    //calc height in %
                    var lineHeight=0;
                    var rN=1;
                    var heightCorrect=0;/*коэф корректировки по высоте*/
                    var fHalfHeight=0;/*высота до линии*/
                    var sHalfHeight=0;/*высота после линии*/
                    var paddigCorr=0;
                    if(rLine<0){rN=-1;}
                    for(var n=1;n<rLine*rN;n++){
                        var idTr=arCord[0]-(n*rN);
                        lineHeight=lineHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();
                        if(idTr<rl){fHalfHeight=fHalfHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();}
                        if(idTr>rl){sHalfHeight=sHalfHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();}
                        paddigCorr=paddigCorr+5;
                    }
                    heightCorrect=(ob.children('table').children('tbody').children('tr.row'+rl).innerHeight()+sHalfHeight-fHalfHeight)/2;
                    lineHeight=lineHeight+paddigCorr/2;


                    //calc width in %
                    var lineWidth=0;
                    var cN=1;
                    if(cLine<0){cN=-1;}
                    for(var n=1;n<cLine*cN;n++){
                        var idTd=arCord[1]-(n*cN);
                        lineWidth=lineWidth+ob.children('table').children('tbody').children('tr').children('td.col'+idTd).innerWidth();
                    }

                    var rad=Math.atan2(lineHeight*rN, lineWidth*cN);
                    var grad=rad*360/6.28;
                    var flineWidth=100*Math.sqrt((lineWidth*lineWidth)+(lineHeight*lineHeight))/$('td.col'+cl).innerWidth();
                    var leftCorr=(flineWidth-100)/2;
                    ob.children('table').children('tbody').children('tr').children('td').children('div.'+arNum[nd]).css('width',flineWidth+'%');
                    ob.children('table').children('tbody').children('tr').children('td').children('div.'+arNum[nd]).css('left','-'+leftCorr+'%');
                    if(rad!=0){//горизонтальную линию не корректируем
                        ob.children('table').children('tbody').children('tr').children('td').children('div.'+arNum[nd]).css('top',heightCorrect+'px');
                    }
                    ob.children('table').children('tbody').children('tr').children('td').children('div.'+arNum[nd]).rotate(grad); //css('-webkit-transform','rotate('+rad+'rad)');
                }
            });
        },
     creatLine: function(flag,ob){
            if (typeof flag === 'undefined') flag = false;
            var cLine=0;
            var rLine=0;
            var arCord;
            var rightLinkNum=new Array();
            var rightLink=false;
            this.numItem++;
            var tmpOb=this;
            $('.checkItem').each(function(){
                $(this).addClass('num'+tmpOb.numItem);
                arCord=tmpOb.coordTd($(this));
                rLine=arCord[0]-rLine;
                cLine=arCord[1]-cLine;
                var compareLine=((1+parseInt(arCord[0]))/2)+','+((1+parseInt(arCord[1]))/2);
                if(rightLinkNum.length>0){//second iteration - do verify
                    if($(this).data('type')=='q'){
                        var arQ=new Array();
                        if($(this).data('right').indexOf(';')=='-1')arQ[0]=$(this).data('right');
                        else arQ=$(this).data('right').split(';');
                        console.log(arQ);console.log(rightLinkNum);
                        for(var qKey in arQ){
                            for(var lKey in rightLinkNum){
                                if(arQ[qKey]==rightLinkNum[lKey]) rightLink=true;
                            }
                        }
                    }else{

                        for(var lKey in rightLinkNum){
                            if(rightLinkNum[lKey]==compareLine) rightLink=true;
                        }
                    }
                }else{//first iteration - saving val
                    if($(this).data('type')=='q'){
                        var arQ=new Array();
                        if($(this).data('right').indexOf(';')=='-1')arQ[0]=$(this).data('right');
                        else arQ=$(this).data('right').split(';');
                        rightLinkNum=arQ;
                    }else{
                        rightLinkNum[rightLinkNum.length]=compareLine;
                    }
                }
            });
            //control limits creating
            if(this.test.onlyNext==1){//only next blocks
                if(rLine>3 || rLine<-3){return false;}
                if(cLine>3 || cLine<-3){return false;}
            }
            if(this.test.noCreatHorizont==1){
                if(rLine==0)return false;
            }
            if(this.test.noCreatVertical==1){
                if(cLine==0)return false;
            }
            if(this.test.noCreatDiagonal==1){
                if(rLine!=0&&cLine!=0)return false;
            }
            var rl=parseInt(arCord[0])-(rLine/2);
            var cl=parseInt(arCord[1])-(cLine/2);
            //calc height in %
            var paddigCorr=0;
            var lineHeight=0;
            var rN=1;
            var heightCorrect=0;/*коэф корректировки по высоте*/
            var fHalfHeight=0;/*высота до линии*/
            var sHalfHeight=0;/*высота после линии*/
            if(rLine<0){rN=-1;}
            for(var n=1;n<rLine*rN;n++){
                var idTr=arCord[0]-(n*rN);
                lineHeight=lineHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();
                if(idTr<rl){fHalfHeight=fHalfHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();}
                if(idTr>rl){sHalfHeight=sHalfHeight+ob.children('table').children('tbody').children('tr.row'+idTr).innerHeight();}
                paddigCorr=paddigCorr+5;
            }

            heightCorrect=(ob.children('table').children('tbody').children('tr.row'+rl).innerHeight()+sHalfHeight-fHalfHeight)/2;
            lineHeight = lineHeight+paddigCorr/2;
            //calc width in %
            var lineWidth=0;
            var cN=1;
            if(cLine<0){cN=-1;}
            for(var n=1;n<cLine*cN;n++){
                var idTd=arCord[1]-(n*cN);
                lineWidth=lineWidth+ob.children('table').children('tbody').children('tr').children('td.col'+idTd).innerWidth();
            }

            var rad=Math.atan2(lineHeight*rN, lineWidth*cN);
            var grad=rad*360/6.28;
            var flineWidth=100*Math.sqrt((lineWidth*lineWidth)+(lineHeight*lineHeight))/ob.children('table').children('tbody').children('tr').children('td.col'+cl).innerWidth();
            var leftCorr=(flineWidth-100)/2;
            leftCorr=leftCorr*(-1);
            if(flag==true){
                var zero=1;
                ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).children('div.line').each(function(){

                    if($(this).attr('style')=='left:'+leftCorr+'%;width:'+flineWidth+'%;'){
                        $(this).addClass('rightAnswer');
                        zero=0;
                    }

                });
                if(zero==1){
                    ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).css('position','relative');
                    ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).html(ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).html()+'<div class="line num'+this.numItem+' zeroAnswer" style="top:'+heightCorrect+'px;left:'+leftCorr+'%;width:'+flineWidth+'%;" data-right="'+rightLink+'"></div>');
                    ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).children('div.num'+this.numItem).rotate(grad);
                }
            }
            else{
                ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).css('position','relative');
                ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).html(ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).html()+'<div class="line num'+this.numItem+'" style="top:'+heightCorrect+'px;left:'+leftCorr+'%;width:'+flineWidth+'%;" data-right="'+rightLink+'"></div>');
                ob.children('table').children('tbody').children('tr.row'+rl).children('td.col'+cl).children('div.num'+this.numItem).rotate(grad);
            }
         ob.children('table').children('tbody').children('tr').children('.checkItem').addClass('linkItem');
         ob.children('table').children('tbody').children('tr').children('.checkItem').removeClass('checkItem');
            this.noFirstAnswer=1;
            /*add for working in lesson*/
            ob.parent('div').parent('div').children('div.head').children(".check_your").css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"});
         return true;
     },
        /*первое задание теста*/
     firstJob: function(ob){
        /*заполняем первым заданием*/
        this.publishJob(1, ob);
     },
        /*размещение задания в таблице рабочего поля*/
     publishJob:  function(num,ob) {
        this.noFirstAnswer=0;
        /*создаем таблицу рабочего поля*/
        /*add for working in lesson*/
         ob.parent('div').parent('div').children('div.head').children(".check_your").css({"background": "url('styles/img/6.png') no-repeat", "background-size":"auto 100%"});

        var nameJob='j'+num;
        var rowTable=1+2*(this.test.job[nameJob].row-1);
        var colTable=1+2*(this.test.job[nameJob].col-1);
        var jExer='<table class="tJob" data-job="'+nameJob+'" data-count-right="0" data-answer="0">';
        var th='<thead><tr>';
        var td='';
        var tr='';
        for(var i=1; i<colTable+1; i++){
            th+='<td class="th'+i+'"></td>';
            td+='<td class="col'+i+'"></td>';
        }
        th+='</tr></thead>';
        for(var l=1; l<rowTable+1; l++){
            tr+='<tr class="row'+l+'">'+td+'</tr>';
        }
        jExer+=th+tr+'</table>';
        ob.html(jExer);

        var techCol=this.test.job[nameJob].col-1;
        var widthEven=parseInt((100-(5*techCol))/this.test.job[nameJob].col);
        ob.children('.tJob').children().children('tr:first').children('td:even').css('width',widthEven+'%');
        ob.children('.tJob').children().children('tr:first').children('td:odd').css('width','5%');
        var arKeyJob=Object.keys(this.test.job);
        if(num<1)return false;
        if(num>arKeyJob.length)return false;
        var arJob=this.test.job[arKeyJob[num-1]];
        var countRight=0;
        for(var key in arJob.colTitle) {
            var iTh=1+2*(key-1);
            var classTh='th'+iTh;
            ob.children('table').children('thead').children('tr').children('td.'+classTh).html(arJob.colTitle[key]);
        }
        for(var key in arJob.jobData) {
            var curRJob=arJob.jobData[key];
            for(var id in curRJob){
                var r=1+2*(key-1);
                var c=1+2*(id-1);
                var e= ob.children('table').children('tbody').children('tr.row'+r).children('td.col'+c);
                e.html(curRJob[id].dataText);//console.log(this);
                if('dataImg' in curRJob[id]){
                    e.html('<img src="'+this.test.imgDir+curRJob[id].dataImg.src+'"><p>'+curRJob[id].dataText+'</p>');
                    if('width' in curRJob[id].dataImg){
                        if(curRJob[id].dataImg.width.length>0){
                            e.children('img').css('width',curRJob[id].dataImg.width);
                        }
                    }
                    if('height' in curRJob[id].dataImg){
                        if(curRJob[id].dataImg.height.length>0){
                            e.children('img').css('height',curRJob[id].dataImg.height);
                        }
                    }

                }
                e.attr('data-type',curRJob[id].dataType);
                if(curRJob[id].dataType=='q'){
                    var qRight='';
                    var curRight=curRJob[id].dataRight;
                    for(var nk in curRight){
                        countRight++;
                        qRight=qRight+';'+curRight[nk].row+','+curRight[nk].col;
                    }
                    e.attr('data-right',qRight.slice(1));
                }
                e.addClass('active');//
            }
        }
         ob.children('.tJob').attr('data-count-right', countRight);
         ob.children('.tJob').attr('data-job', arKeyJob[num-1]);
        $('.light').removeClass('focus');
        $('.light#'+ob.children('.tJob').attr('data-job')).addClass('focus');
    },

     coordTd: function (el){
        var arClass=el.attr('class').split(' ');
        var cordCol=arClass[0].substr(3);
        arClass=el.parent('tr').attr('class').split(' ');
        var cordRow=arClass[0].substr(3);
        return [cordRow, cordCol];
     },

     controlJob: function(ob){
        if(ob.children('.tJob').attr('data-answer')==1)return false;//lock if answering yet
         ob.children('.tJob').attr('data-answer','1');
         tdOb=ob.children('.tJob').children().children().children();
        var trueLine=tdOb.children('.line[data-right="true"]').length;
        var error=tdOb.children('.line[data-right="false"]').length;
        var countError=0;
        if(tdOb.children('.line').length!=ob.children('.tJob').data('count-right')) {error++;countError=tdOb.children('.line').length-ob.children('.tJob').data('count-right');}
        return [trueLine, error, ob.children('.tJob').data('count-right'), ob.children('.tJob').data('job')];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
     },
     viewRightAnswer:  function(){
        var idJob=$('.tJob').data('job');
        var arJob=test.job[idJob].jobData;
        for(var idRow in arJob){
            var arRow=arJob[idRow];
            for(var idItem in arRow){
                if(arRow[idItem].dataType=='q'){
                    var dataRight=arRow[idItem].dataRight;
                    for(var idR in dataRight){
                        var r=1+2*(idRow-1);
                        var c=1+2*(idItem-1);
                        var e1= $('tr.row'+r).children('td.col'+c);
                        e1.addClass('checkItem');
                        var r=1+2*(dataRight[idR].row-1);
                        var c=1+2*(dataRight[idR].col-1);
                        var e2= $('tr.row'+r).children('td.col'+c);
                        e2.addClass('checkItem');
                        creatLine(true);
                    }
                }
            }
        }
        $('.line[data-right="false"]').addClass('falseAnswer');
     },
            /*reset current job*/
     resetCurJob: function(ob,cTrue){
            var curNumJob=ob.children('.tJob').attr('data-job').slice(1);
            if(cTrue==1 || this.modeFlagCoach==1){
                this.slideOtherJob(curNumJob, ob);
            }else{
                this.slideRotateJob(curNumJob, ob);
            }
            this.publishJob(curNumJob, ob);
     },

     slideOtherJob: function(jnum){
        var idj='j'+jnum;
        if(idj in workArea){
            delete workArea[idj];
        }
        test.job[idj]=otherJob[idj];
     },
     slideRotateJob: function(jnum){

        var idj='j'+jnum;
        if(idj in this.workArea){
            delete this.workArea[idj];
        }
        var tmpJob=this.test.job[idj].jobData;

     }
}








