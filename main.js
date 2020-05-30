document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  document.onselectstart = function(e) {
    e.preventDefault();
    return false;
  }
  

var container = document.getElementById('container');
var element = document.getElementById('element1');

element.onmousedown = function frstDrag() {
  document.mouseState = 'up';
  element.mouseState = 'up';
  element.lastMousePosY = null;
  element.lastMousePosX = null;
  element.proposedNewPosY = parseInt(element.style.top, 10); 
  element.proposedNewPosX = parseInt(element.style.left, 10);
  document.mouseState = 'up';
  element.style.top = '40px';
  element.style.left = '40px';
  element.style.height = '60px';
  element.style.width = '60px';
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
    }  
    var Xbtn = document.getElementsByClassName('x')
    for(var i =0;i<Xbtn.length;i++){
      var f = Xbtn[i]
    }
    console.log(f, 'click')
    f.onmousedown = function RemoveElem(){
      element.remove(element)
    }
  };
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

  }
  
  
  var element2 = document.getElementById('element2');
  
    document.mouseState = 'up';
    element2.mouseState = 'up';
    element2.lastMousePosY = null;
    element2.lastMousePosX = null;
    element2.proposedNewPosY = parseInt(element2.style.top, 10); 
    element2.proposedNewPosX = parseInt(element2.style.left, 10);
    
  
    document.mouseState = 'up';
    element2.mouseState = 'up';
    element2.lastMousePosY = null;
    element2.lastMousePosX = null;
    element2.proposedNewPosY = parseInt(element2.style.top, 10); 
    element2.proposedNewPosX = parseInt(element2.style.left, 10);
    
  
    element2.style.top = '40px';
    element2.style.left = '40px';
    element2.style.height = '60px';
    element2.style.width = '60px';
    
    document.onmousedown = function() {
      document.mouseState = 'down';
    };
  
    document.onmouseup = function() {
      document.mouseState = 'up';
      element2.mouseState = 'up';
    };
    
    
  
    element2.onmousedown = function(e) {
      element2.lastMousePosY = e.pageY;
      element2.lastMousePosX = e.pageX;
      element2.mouseState = 'down';
      document.mouseState = 'down';
  
      if(document.getElementsByClassName('x1').length < 1){
      var item = document.createElement('button');
      item.classList.add('x1');
      item.innerText = 'X';
      element2.appendChild(item)  
      }
      var Xbtn1 = document.getElementsByClassName('x1')
      for(var i =0;i<Xbtn1.length;i++){
        var f2 = Xbtn1[i]
      }
      
      
      console.log(f2, 'click')
      f2.onmousedown = function RemoveElem(){
        element2.remove(element2)
      }
    };
    
    
    
  
  
    element2.onmouseup = function(e) {
      element2.mouseState = 'up';
      document.mouseState = 'up';
    };
    
    var getAtInt = function getAtInt(obj, attrib) {
      return parseInt(obj.style[attrib], 10);
    };
    
    document.onmousemove = function(e) {
      if ((document.mouseState === 'down') && (element2.mouseState === 'down')) {
        element2.proposedNewPosY = getAtInt(element2, 'top') + e.pageY - element2.lastMousePosY;
        element2.proposedNewPosX = getAtInt(element2, 'left') + e.pageX - element2.lastMousePosX;
    
        if (element2.proposedNewPosY < getAtInt(container, 'top')) {
          element2.style.top = container.style.top;
        } else if (element2.proposedNewPosY > getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(element2, 'height')) {
          element2.style.top = getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(element2, 'height') + 'px';
        } else {
          element2.style.top = element2.proposedNewPosY + 'px';
        }
    
        if (element2.proposedNewPosX < getAtInt(container, 'left')) {
          element2.style.left = container.style.left;
        } else if (element2.proposedNewPosX > getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(element2, 'width')) {
          element2.style.left = getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(element2, 'width') + 'px';
        } else {
          element2.style.left = element2.proposedNewPosX + 'px';
        }
        element2.lastMousePosY = e.pageY;
        element2.lastMousePosX = e.pageX;
      }
    };

});