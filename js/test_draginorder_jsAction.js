var draginorder={
    /*инициализация функционала теста*/
    screenResol:0,
    tableHeight:0,
    modeFlagCoach:0, /* 0 - тренировочный , 1 - контролирующий */
    numItem:0,
    workArea:{},
    test:{},
    initTest:   function(ob){
        var arKeyJobInd=this.mix(Object.keys(this.test.jobData)); /* mix - вызов функции, перемешивающей правильную послед-ть */
        var meth=this;
        ob.html('');
        ob.append("<div id='sortContainer'></div>");
        var htmlInd='';
        for(var ind=0; ind<arKeyJobInd.length; ind++){
            if('dataImg' in this.test.jobData[arKeyJobInd[ind]])
            {
                var obImg=this.test.jobData[arKeyJobInd[ind]].dataImg;
                if('src' in obImg){
                    var styleImg=' style="';
                    if('width' in obImg){if(obImg.width.length>0)styleImg=styleImg+"width:"+obImg.width+";";}
                    if('height' in obImg){if(obImg.height.length>0)styleImg=styleImg+"height:"+obImg.height+";";}
                    styleImg=styleImg+'"';
                    htmlInd+='<div id="fitem'+arKeyJobInd[ind]+'" class="droppable"></div><div id="item'+arKeyJobInd[ind]+'" class="sortable moving" data-stay="fitem'+arKeyJobInd[ind]+'">'+'<img src="'+this.test.imgDir+obImg.src+'"'+styleImg+'><p>'+this.test.jobData[arKeyJobInd[ind]].dataText+'</p></div>';
                }
            }
            else
            {
                htmlInd+='<div id="fitem'+arKeyJobInd[ind]+'" class="droppable"></div><div id="item'+arKeyJobInd[ind]+'" class="sortable moving" data-stay="fitem'+arKeyJobInd[ind]+'"><p>'+this.test.jobData[arKeyJobInd[ind]].dataText+'</p></div>';
            }

        }
        ob.children("#sortContainer").html(htmlInd);
        setTimeout(function(){
            meth.updateTopHeight(ob, 1);
            if(ob.css('overflow')){
               ob.css('height',ob.height());
                ob.css('overflow','hidden');
            }
            meth.indicateTrue(ob);
        },100);

        var mXY={};
        var flag={over:0,change:0};
        var drag={};
        ob.children('#sortContainer').children('div.droppable').addClass('ui-droppable');
        ob.children('#sortContainer').children('div.sortable').draggable({
                axis: "y",
                containment:"parent",
                start: function(event, ui){
                    $(this).css('z-index','999');
                    $(this).removeClass('moving');
                },
                stop: function(event, ui){
                    $(this).css('z-index','99');
                    $(this).addClass('moving');
                    meth.updateTopHeight(ob, 1);
                    meth.indicateTrue(ob);
                    if(meth.noFirstAnswer==0){
                        meth.noFirstAnswer=1;
                        ob.parent().parent().children('.head').children(".check_your").css({"background": "url('styles/img/5.png') no-repeat", "background-size":"auto 100%"});
                    }
                }
            });
        ob.children('#sortContainer').children('div.droppable').droppable({
                containment: "parent",
                accept:".sortable",
                tolerance:"touch",
                over:function(event, ui)
                {
                    if($(this).attr('id')!=$(ui.draggable).attr('data-stay'))
                    {
                        var moveId=$(this).attr("id");
                        var moveEl=ob.children('#sortContainer').children('div[data-stay="'+moveId+'"]');
                        moveEl.attr('data-stay',$(ui.draggable).attr('data-stay'));
                        $(ui.draggable).attr('data-stay', moveId);
                        meth.updateTopHeight(ob, 1);
                    }
                }

        });


    },
    mix: function(ar){
        var newAr=[];
        var tmpAr=[];
        var max=0;
        var randNum=0;
        if(ar.length>2){
            var oldAr=ar;
            for(var i=0;i<ar.length-1;i++){
                max=oldAr.length-1;
                randNum=Math.floor(Math.random() * (max  + 1));
                newAr[newAr.length]=oldAr[randNum];
                for(var j=0;j<oldAr.length;j++){
                   if(j!=randNum) tmpAr[tmpAr.length]=oldAr[j];
                }
                oldAr=tmpAr;
                tmpAr=[];
            }
            newAr[newAr.length]=oldAr[0];
        }else{
            newAr=ar;
        }
        return newAr;
    },
    indicateTrue: function(ob){
        var arAns=[];
        ob.children().children('.sortable').each(function(){
            arAns[arAns.length]=[$(this).attr('id').slice(4),parseInt($(this).css('top').slice(0,-2))];
        });
        arAns.sort(this.sSecArg);
        for(var k=0; k<arAns.length; k++){
            if(k+1==parseInt(arAns[k][0])){
                ob.children().children('#item'+arAns[k][0]).attr('data-right','true');
            }else{
                ob.children().children('#item'+arAns[k][0]).attr('data-right','false');
            }
        }
    },
    sSecArg: function(i, ii) { // sort по второму аргументу (возрастание)
    if (i[1] > ii[1])
        return 1;
    else if (i[1] < ii[1])
        return -1;
    else
        return 0;
    },
    controlJob: function(ob){
        if(this.noFirstAnswer==0)return false;
        if(ob.children('#sortContainer').attr('data-answer')==1)return false;//lock if answering yet
        ob.children('#sortContainer').attr('data-answer','1');
        var trueLine=ob.children().children('.sortable[data-right="true"]').length;
        var error=ob.children().children('.sortable[data-right="false"]').length;
        var countItem=ob.children().children('.sortable').length;
        var countError=error;
        ob.children('#sortContainer').children('.sortable').unbind();
        return [trueLine, error, countItem, countItem];/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
    },
    updateTopHeight: function(ob, full){
        if(full==1){
            ob.children("#sortContainer").children('.sortable').each(function(){
                var did=$(this).attr('data-stay');
               ob.children("#sortContainer").children('#'+did).height($(this).height());
            });
            ob.children("#sortContainer").children('.sortable').each(function(){
                if($(this).hasClass('moving')){
                    var did=$(this).attr('data-stay');
                    $(this).css('top',ob.children("#sortContainer").children('#'+did).position().top);
                }

            });
        }else{
            ob.children("#sortContainer").children('.sortable').each(function(){
                var did=$(this).attr('data-stay');
                ob.children("#sortContainer").children('#'+did).height($(this).height());
            });
            ob.children("#sortContainer").children('.sortable').each(function(){

                if(!$(this).hasClass('ui-draggble-dragging')){
                    var did=$(this).attr('data-stay');
                    $(this).animate({top:ob.children("#sortContainer").children('#'+did).position().top}, 200);
                }

            });
        }

    },
    resetCurJob: function(ob){
        this.initTest(ob);
    },
    resizeTestWin: function(ob){
        var meth=this;
            setTimeout(function(){
                meth.updateTopHeight(ob, 1);
                ob.css('height',ob.children().height()+2);
            },100);
    }
}


