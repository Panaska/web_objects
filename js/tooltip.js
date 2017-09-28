
var floatTipElement = document.createElement("div"),
    floatTipStyle = floatTipElement.style;
    floatTipElement.id = "floatTip";

function moveTip(e) {
  w = 250; // Ширина подсказки

  // Для браузера IE6-8
  if (document.all)  { 
    x = event.clientX + document.body.scrollLeft; 
    y = event.clientY + document.body.scrollTop; 

  // Для остальных браузеров
  } else   { 
    x = e.pageX; // Координата X курсора
    y = e.pageY; // Координата Y курсора
  }

  // Показывать слой справа от курсора 
  if ((x + w + 10) < document.body.clientWidth) { 
    floatTipStyle.left = x + 'px';

  // Показывать слой слева от курсора
  } else { 
    floatTipStyle.left = x - w + 'px';
  }

  // Положение от верхнего края окна браузера
  floatTipStyle.top = y - 60 + 'px';
}

function toolTip(msg) {
  if (msg) {
    // Выводим текст подсказки
    floatTipElement.innerHTML = msg;
    // Показываем подсказку
    floatTipStyle.display = "inline-block";
    document.body.appendChild(floatTipElement);
    document.addEventListener('mousemove', moveTip);
  } else {
    // Прячем подсказку
    floatTipStyle.display = "none";
    floatTipElement.parentNode.removeChild(floatTipElement);
    document.removeEventListener('mousemove', moveTip);
  }
}