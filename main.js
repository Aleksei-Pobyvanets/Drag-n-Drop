document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");


  

  var dnd = document.getElementById('dnd')
  dnd.addEventListener("mousedown", dndZona, false)

  function dndZona(){
    console.log("dndZons")
    var contextmenu = document.getElementsByClassName('drag');
    var Xbtn = document.getElementsByClassName('x');
    

  var initX, initY, mousePressX, mousePressY;
  for(var i = 0;contextmenu.length > i; i++){
    var el = contextmenu[i]
    el.addEventListener('mousedown', function(event) {
      
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;
      
      this.addEventListener('mousemove', repositionElement, false);

      window.addEventListener('mouseup', function() {
         el.removeEventListener('mousemove', repositionElement, false);
       }, false);
      
      }, false);
      
      function repositionElement(event) {
       this.style.left = initX + event.clientX - mousePressX + 'px';
       this.style.top = initY + event.clientY - mousePressY + 'px';
      }
  }
  for(var i = 0;contextmenu.length > i; i++){
    var el = contextmenu[i]
    el.addEventListener('click', gg, false);
  }
  for(var i = 0;Xbtn.length > i; i++){
    var elem = Xbtn[i]
    elem.addEventListener('onclick', ggEl, false);
  }

  function ggEl() {
    el.parentNode.removeChild(el)
  }

  function gg(){
      var item = document.createElement('button');
      item.classList.add('x');
      item.innerText = 'X';
      el.appendChild(item)  
  }
    }
});

