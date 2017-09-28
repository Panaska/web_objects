$(function() {
    var anchor = null,
        $wrapper = $('<div class="player_popup"></div>'),
        $audio1 = $('<audio src="MediaElement.js/point1sec.mp3"/>');
        $wrapper.append($audio1);
    var myPlayer1 = new MediaElementPlayer($audio1[0], {
            features: ['playpause','progress'],
            audioWidth: 300,
            // method that fires when the Flash or Silverlight object is ready
            success: function (mediaElement, domObject) { 
                // окончание проигрывания звука
                mediaElement.addEventListener('ended', function(e) {
                    anchor.removeClass('playing');
                }, false);
                // пауза
                mediaElement.addEventListener('pause', function(e) {
                    anchor.removeClass('playing');
                }, false);
                // начало проигрывания звука
                mediaElement.addEventListener('play', function(e) {
                    anchor.addClass('playing');
                }, false);
            }
        });
    $('.play_controls')
        .click(function(e) {
            if (anchor) anchor.removeClass('playing');
            if (anchor && anchor[0] == e.currentTarget) {
                if (!myPlayer1.media.paused) {
                    myPlayer1.pause();
                }
                else {
                    myPlayer1.play();
                }
            } else {
                anchor = $(e.currentTarget);
                anchor.after($wrapper);
                myPlayer1.setSrc(anchor.attr('href'));
                myPlayer1.play();
            }
            e.preventDefault();
            e.stopPropagation();
        })
        .each(function() {
            $(this).prepend($("<span class='icon'></span>"));
        });
});
