
 $(document).ready(function(){

$('#fig1').hover(function () {
 $(this).fadeTo(0.5, 1);
 $('#figd1').fadeTo(0, 1);
 },
function () {
 $(this).fadeTo(0.5, 0.5);
	$('#figd1').fadeTo(0, 0);
 }
 );

$('#fig2').hover(function () {
 $(this).fadeTo(0.5, 1);
	$('#figd2').fadeTo(0, 1);
 },
function () {
 $(this).fadeTo(0.5, 0.5);
	$('#figd2').fadeTo(0, 0);
  }
 );

$('#fig3').hover(function () {
 $(this).fadeTo(0.5, 1);
	$('#figd3').fadeTo(0, 1);
 },
function () {
 $(this).fadeTo(0.5, 0.5);
	$('#figd3').fadeTo(0, 0);
  }
 );

$('#fig4').hover(function () {
 $(this).fadeTo(0.5, 1);
	$('#figd4').fadeTo(0, 1);
 },
function () {
 $(this).fadeTo(0.5, 0.5);
	$('#figd4').fadeTo(0, 0);
  }
);

})



$(document).ready(function(){
    $(".button").click(function(){
        $("text").toggle();
    });
});