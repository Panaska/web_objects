/*pakoc
Раскраска слов
*/

(function($)
		{
			$.fn.test_color_text = function(options)
			{
				var settings = $.extend({frameClass : '.wordColor',toggleClass : 'wordColorClick'},options);
				return this.each(function()
				{
					var container = $(this);
					var right_answers  = container.find(settings.frameClass + '[data-right="true"]');
					function activateCheck()
					{
						container.parents(".interakt_zadanie").siblings('.head').find('.check_your').css({'background': 'url("styles/img/5.png") no-repeat', 'background-size' : 'contain'});
					};
					function deactivateCheck()
					{
						container.parents(".interakt_zadanie").siblings('.head').find('.check_your').css({'background':'url(styles/img/6.png) no-repeat', 'background-size' : 'contain'});
					};
					container.parents(".interakt_zadanie").siblings('.head').find('.check_your').click(function()
					{
						var user_answers = container.find(settings.frameClass + '.' + settings.toggleClass);
						if (user_answers.length)
						{
							var flag = true;
							for (var i = 0; i < user_answers.length; i++)
								if (!$(user_answers[i]).attr('data-right')) { 
									flag = false;
									break;
								}
							for (var i = 0; i < right_answers.length; i++)	
							{
								if (!$(right_answers[i]).hasClass(settings.toggleClass)) { 
									flag = false;
									break;
								}
							}							
							(flag) ? (container.parents(".interakt_zadanie").siblings('.head').find('.result').css({"background": "url('styles/img/8.png') no-repeat", "background-size":"75%", "background-position":"3em 0em"})) : (container.parents(".interakt_zadanie").siblings('.head').find('.result').css({'background': 'url(styles/img/7.png) 0% 0% / auto 100% no-repeat'}));
						}
						
					});
					container.parents(".interakt_zadanie").siblings('.head').find('.drop').click(function()
					{
						container.find(settings.frameClass).removeClass(settings.toggleClass);
						container.parents(".interakt_zadanie").siblings('.head').find('.result').attr('style','');
						deactivateCheck();
					});
					
					container.find(settings.frameClass).click(function()
					{
						$(this).toggleClass(settings.toggleClass);
						(container.find(settings.frameClass + '.' + settings.toggleClass).length) ? (activateCheck()) : (deactivateCheck());
					});
				});
			}
		})(jQuery);
		$(document).ready(function()
		{
			$('.test_color_text').test_color_text();
		})