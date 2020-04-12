document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");


    var contextmenu = document.getElementsByClassName('drag');
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
      el.addEventListener('click', function(e){ 
        console.log('click')}, false);
    }
    
    


    var dragElem = document.getElementsByClassName('draggable');
    for(var i = 0;dragElem.length > i; i++){
      if(!!dragElem[i]){
        dragElem[i].addEventListener('mousedown', mousdown(event,dragElem[i]));

        dragElem[i].addEventListener('mouseup', mousup(dragElem[i], false));
      }      
    }
    function mousdown(event, el) {
      console.log('mousedown', el )
      var coords = getCoords(dragElem[i]);
      var shiftX = event.pageX - coords.left;
      var shiftY = event.pageY - coords.top;
    
      el.classList.add('active')
      dragElem[i].style.position = 'absolute';
      document.body.appendChild(dragElem[i]);
      moveAt(event, dragElem[i]);
    
      dragElem[i].style.zIndex = 1000; 

      dragElem[i].ondragstart = function() {
        return true;
      };
      
    
      function moveAt(event, el) {
        // console.log(dragElem[i])
        dragElem[i].style.left = event.pageX - shiftX + 'px';
        dragElem[i].style.top = event.pageY - shiftY + 'px';
      }
    
      dragElem[i].addEventListener('mousemove', moveAt(event, el), false);
    }
    function mousup(el, event) {
        el.removeEventListener('onmousdown', mousdown(el, event));
        document.onmousemove = null;
        event.onmouseup = null;    
    }
  
    // var remD = document.getElementsByClassName('x')
    // remD.forEach(element => {
    //   console.log(element)
    //   element.addEventListener('click', remove(element))
    // });
    
    function remove(element){
      var parent = element.parentNode.parentNode;
      parent.removeChild(element.parentNode);
      console.log('gg2')
    }

      
      
      function getCoords(el) {
        var box = el.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
    });


