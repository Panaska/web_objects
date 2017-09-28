var arTests=new Object();/*объект для хранения всех тестов и их методов*/



$(document).ready(function(){

    $('.job_exercises').each(function(){
        var testName=$(this).parent('div').parent('div.interaktiv').data('test-name');
        var controlDiv=$(this).parent('div').parent('div.interaktiv').children('div.head');
        var exer=$(this);
        arTests[testName]={
            description:'this is data for '+testName,
            test: jQuery.extend(true,{},window[testName]),
            method: jQuery.extend(true,{},window[window[testName].test_type]),
            noFirstAnswer:0,/*первого ответа не было*/
            clickTrue:0 /*была нажата кнопка Правильный ответ*/
        }
        arTests[testName].method.test=arTests[testName].test;
        arTests[testName].method.noFirstAnswer=arTests[testName].noFirstAnswer;
        //console.log(arTests[testName]);
        arTests[testName].method.initTest($(this)); /*инициализирует работу тести, д.б. описана в test/jsAction.js*/


        controlDiv.children('.send').on('click',function(){
            arTests[testName].method.controlJob();
        });

        controlDiv.children('.reset').on('click', function(){
            if(arTests[testName].method.noFirstAnswer==0)return false;
            arTests[testName].method.resetCurJob(arTests[testName].clickTrue);
        });

        /*дополнения для размещения в уроке*/
        controlDiv.children('.drop').on('click', function(){console.log(arTests[testName].method.noFirstAnswer);
            if(arTests[testName].method.noFirstAnswer==0)return false;

            arTests[testName].method.resetCurJob(exer, arTests[testName].clickTrue);
            controlDiv.children(".result").css("background","none");
        });

        controlDiv.children('.check_your').on('click',function(){
            var contr=arTests[testName].method.controlJob(exer);/*кол-во верных, кол-во неверных, д.б. верных, id задания*/
            if(contr==false)return false;
            if(contr[0]==contr[2] && contr[1]==0){
                controlDiv.children(".result").css({"background": "url('styles/img/8.png') no-repeat", "background-size":"auto 100%", "background-position":"3em 0em"});
            }else{
                controlDiv.children(".result").css({"background": "url('styles/img/7.png') no-repeat", "background-size":"auto 100%"});
            }
        });

    });
    $(window).resize(function(){
        $('.job_exercises').each(function(){
            var testName=$(this).parent('div').parent('div.interaktiv').data('test-name');
            arTests[testName].method.resizeTestWin($(this));
        });
    });
});
