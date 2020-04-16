document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");


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
      console.log('click')
    }
    for(var i = 0;Xbtn.length > i; i++){
      var elem = Xbtn[i]
      elem.addEventListener('click', remove, false);
      console.log('click')
    }
    function gg(){
      var item = document.getElementsByClassName('x');
      item.classList.add('active')
    }

    function remove() {
      el.parentNode.removeChild(el)
    }
    
});


