$(function() {
    var anchor = null,
        $audio1 = $('<audio src="MediaElement.js/point1sec.mp3"/>'),
        myPlayer1 = new MediaElement($audio1[0], {
            // method that fires when the Flash or Silverlight object is ready
            success: function (mediaElement, domObject) { 
                // окончание проигрывания звука
                mediaElement.addEventListener('ended', function(e) {
                    anchor.removeClass('playing');
                }, false);
            }
        });
    $('.play')
        .click(function(e) {
            if (anchor) anchor.removeClass('playing');
            anchor = $(e.currentTarget);
            anchor.addClass('playing');
            myPlayer1.setSrc(anchor.attr('href'));
            myPlayer1.play();
            e.preventDefault();
            e.stopPropagation();
        })
        .each(function() {
            $(this).prepend($("<span class='icon'></span>"));
        });
});
