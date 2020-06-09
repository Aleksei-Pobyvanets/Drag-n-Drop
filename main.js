document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  document.onselectstart = function(e) {
    e.preventDefault();
    return false;
  }
  

var container = document.getElementById('container');
var element = document.querySelectorAll('.elem');
console.log(element, "test")


for(var i = 0; i<element.length ;i++){
  var elemme = element[i]
console.log(elemme, "test222")



elemme.addEventListener('onmousedown', dragEl(elemme), false);

console.log(elemme.addEventListener('onmousedown', dragEl(elemme)), "test2232")

  function dragEl(elemme){
  document.mouseState = 'up';
  elemme.mouseState = 'up';
  elemme.lastMousePosY = null;
  elemme.lastMousePosX = null;
  document.mouseState = 'up';

  

  document.onmousedown = function() {
    document.mouseState = 'down';
    console.log(this)
  };
  document.onmouseup = function() {
    document.mouseState = 'up';
    elemme.mouseState = 'up';
  };
  elemme.onmousedown = function(e) {
    elemme.lastMousePosY = e.pageY;
    elemme.lastMousePosX = e.pageX;
    elemme.mouseState = 'down';
    document.mouseState = 'down';
    if(document.getElementsByClassName('x').length < 1){
    var item = document.createElement('button');
    item.classList.add('x');
    item.innerText = 'X';
    elemme.appendChild(item)  
    }  
    var Xbtn = document.getElementsByClassName('x')
    for(var i =0;i<Xbtn.length;i++){
      var f = Xbtn[i]
    }
    console.log(f, 'click')
    f.onmousedown = function RemoveElem(){
      elemme.remove(elemme)
    }
  };
  elemme.onmouseup = function(e) {
    elemme.mouseState = 'up';
    document.mouseState = 'up';
  };
  var getAtInt = function getAtInt(obj, attrib) {
    return parseInt(obj.style[attrib], 10);
  };
  document.onmousemove = function(e) {
    if ((document.mouseState === 'down') && (elemme.mouseState === 'down')) {
      elemme.proposedNewPosY = getAtInt(elemme, 'top') + e.pageY - elemme.lastMousePosY;
      elemme.proposedNewPosX = getAtInt(elemme, 'left') + e.pageX - elemme.lastMousePosX;
  
      if (elemme.proposedNewPosY < getAtInt(container, 'top')) {
        elemme.style.top = container.style.top;
      } else if (elemme.proposedNewPosY > getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(elemme, 'height')) {
        elemme.style.top = getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(elemme, 'height') + 'px';
      } else {
        elemme.style.top = elemme.proposedNewPosY + 'px';
      }
  
      if (elemme.proposedNewPosX < getAtInt(container, 'left')) {
        elemme.style.left = container.style.left;
      } else if (elemme.proposedNewPosX > getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(elemme, 'width')) {
        elemme.style.left = getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(elemme, 'width') + 'px';
      } else {
        elemme.style.left = elemme.proposedNewPosX + 'px';
      }
      elemme.lastMousePosY = e.pageY;
      elemme.lastMousePosX = e.pageX;
    }
  };
  elemme.removeEventListener('onmouseup', dragEl);
}

  
  
}
  
});