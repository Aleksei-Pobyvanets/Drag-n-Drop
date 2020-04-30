document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  var dnd = document.getElementById('dnd')
  dnd.addEventListener("mousedown", dndZona, false)
  var target = this

  function dndZona(){
      
      document.mouseState = 'down';
      console.log("dndZons")
      var contextmenu = document.getElementsByClassName('drag');
      var Xbtn = document.getElementsByClassName('x');
    
    var initX, initY, mousePressX, mousePressY;
    for(var i = 0;contextmenu.length > i; i++){
      var el = contextmenu[i]
      el.addEventListener('mousedown', function(event) {
        
        contextmenu.lastMousePosY = e.pageY; 
        contextmenu.lastMousePosX = e.pageX;
        contextmenu.mouseState = 'down';
        document.mouseState = 'down';

        if(Xbtn.length < 1){
        var item = document.createElement('button');
        item.classList.add('x');
        item.innerText = 'X';
        el.appendChild(item)  
        }else{
          console.log('allready')
        }
  
        initX = this.offsetLeft;
        initY = this.offsetTop;
        mousePressX = event.clientX;
        mousePressY = event.clientY;
  
        for(var i = 0;Xbtn.length > i; i++){
          var elem = Xbtn[i]
          elem.addEventListener('click', RemoveElem, false);
        }
        
        this.addEventListener('mousemove', repositionElement, false);
  
        window.addEventListener('mouseup', function() {
          contextmenu.mouseState = 'up';
          document.mouseState = 'up';
           el.removeEventListener('mousemove', repositionElement, false);
         }, false);
        
        }, false);
        
        document.mouseState = 'up';
        contextmenu.mouseState = 'up';
        contextmenu.lastMousePosY = null;
        contextmenu.lastMousePosX = null;
        contextmenu.proposedNewPosY = parseInt(contextmenu.style.top, 10);
        contextmenu.proposedNewPosX = parseInt(contextmenu.style.left, 10);

        var getAtInt = function getAtInt(obj, attrib) {
          return parseInt(obj.style[attrib], 10);
        };

        function repositionElement(event) {
        if ((document.mouseState === 'down') && (contextmenu.mouseState === 'down')) {
          contextmenu.proposedNewPosY = getAtInt(contextmenu, 'top') + e.pageY - contextmenu.lastMousePosY;
          contextmenu.proposedNewPosX = getAtInt(contextmenu, 'left') + e.pageX - contextmenu.lastMousePosX;
      
          if (contextmenu.proposedNewPosY < getAtInt(dnd, 'top')) {
            contextmenu.style.top = dnd.style.top;
          } else if (contextmenu.proposedNewPosY > getAtInt(dnd, 'top') + getAtInt(dnd, 'height') - getAtInt(contextmenu, 'height')) {
            contextmenu.style.top = getAtInt(dnd, 'top') + getAtInt(dnd, 'height') - getAtInt(contextmenu, 'height') + 'px';
          } else {
            contextmenu.style.top = contextmenu.proposedNewPosY + 'px';
          }
      
          if (contextmenu.proposedNewPosX < getAtInt(dnd, 'left')) {
            contextmenu.style.left = dnd.style.left;
          } else if (contextmenu.proposedNewPosX > getAtInt(dnd, 'left') + getAtInt(dnd, 'width') - getAtInt(contextmenu, 'width')) {
            contextmenu.style.left = getAtInt(dnd, 'left') + getAtInt(dnd, 'width') - getAtInt(contextmenu, 'width') + 'px';
          } else {
            contextmenu.style.left = contextmenu.proposedNewPosX + 'px';
          }
          contextmenu.lastMousePosY = e.pageY;
          contextmenu.lastMousePosX = e.pageX;
        }
        }
    }
  
    function RemoveElem() {
      el.parentNode.removeChild(el)
    }
    
    
  }
});