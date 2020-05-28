document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  document.onselectstart = function(e) {
    e.preventDefault();
    return false;
  }
  

  var element = document.getElementById('element'),
    container = document.getElementById('container');
    
  
  

  document.mouseState = 'up';
  element.mouseState = 'up';
  element.lastMousePosY = null;
  element.lastMousePosX = null;
  element.proposedNewPosY = parseInt(element.style.top, 10); 
  element.proposedNewPosX = parseInt(element.style.left, 10);
  

  element.style.top = '40px';
  element.style.left = '40px';
  element.style.height = '60px';
  element.style.width = '60px';
  container.style.top = '20px';
  container.style.left = '20px';
  container.style.height = '308px';
  container.style.width = '880px';
  
  document.onmousedown = function() {
    document.mouseState = 'down';
  };

  document.onmouseup = function() {
    document.mouseState = 'up';
    element.mouseState = 'up';
  };
  

  element.onmousedown = function(e) {
    element.lastMousePosY = e.pageY;
    element.lastMousePosX = e.pageX;
    element.mouseState = 'down';
    document.mouseState = 'down';

    if(document.getElementsByClassName('x').length < 1){
      var item = document.createElement('button');
      item.classList.add('x');
      item.innerText = 'X';
      element.appendChild(item)  
      console.log(Xbtn, "btn")
    }
  };
  document.getElementsByClassName('x').addEventListener('click', RemoveElem(), false);
  
  function RemoveElem(){
    document.getElementsByClassName('x').parentNode.removeChild(element)
  }

  element.onmouseup = function(e) {
    element.mouseState = 'up';
    document.mouseState = 'up';
  };
  
  var getAtInt = function getAtInt(obj, attrib) {
    return parseInt(obj.style[attrib], 10);
  };
  
  document.onmousemove = function(e) {
    if ((document.mouseState === 'down') && (element.mouseState === 'down')) {
      element.proposedNewPosY = getAtInt(element, 'top') + e.pageY - element.lastMousePosY;
      element.proposedNewPosX = getAtInt(element, 'left') + e.pageX - element.lastMousePosX;
  
      if (element.proposedNewPosY < getAtInt(container, 'top')) {
        element.style.top = container.style.top;
      } else if (element.proposedNewPosY > getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(element, 'height')) {
        element.style.top = getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(element, 'height') + 'px';
      } else {
        element.style.top = element.proposedNewPosY + 'px';
      }
  
      if (element.proposedNewPosX < getAtInt(container, 'left')) {
        element.style.left = container.style.left;
      } else if (element.proposedNewPosX > getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(element, 'width')) {
        element.style.left = getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(element, 'width') + 'px';
      } else {
        element.style.left = element.proposedNewPosX + 'px';
      }
      element.lastMousePosY = e.pageY;
      element.lastMousePosX = e.pageX;
    }
  };

});