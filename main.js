document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  document.onselectstart = function(e) {
    e.preventDefault();
    return false;
  }
  

var container = document.getElementById('container');
var element = document.querySelectorAll('.elem');

function dragEl(elemme){
  this.mouseState = 'up';
  elemme.mouseState = 'up';
  elemme.lastMousePosY = null;
  elemme.lastMousePosX = null;
  this.mouseState = 'up';


  elemme.onmousedown = function() {
    this.mouseState = 'down';
    elemme.mouseState = 'down';
  };
  elemme.onmouseup = function() {
    this.mouseState = 'up';
    elemme.mouseState = 'up';
  };
  elemme.onmousedown = function(e) {
    elemme.lastMousePosY = e.pageY;
    elemme.lastMousePosX = e.pageX;
    elemme.mouseState = 'down';
    this.mouseState = 'down';

    if(this.getElementsByClassName('x').length < 1){
    var item = document.createElement('button');
    item.classList.add('x');
    item.innerText = 'X';
    elemme.appendChild(item)  
    
    }  
    var Xbtn = document.getElementsByClassName('x')
    for(var i =0;i<Xbtn.length;i++){
      var remo = Xbtn[i]
    }

    remo.onmousedown = function RemoveElem(){
      elemme.remove(elemme)
    }
  };
  elemme.onmouseup = function(e) {
    elemme.mouseState = 'up';
    this.mouseState = 'up';
  };
  var getAtInt = function getAtInt(obj, attrib) {
    return parseInt(obj.style[attrib], 10);
  };
  elemme.onmousemove = function(e) {
    if ((this.mouseState === 'down') && (elemme.mouseState === 'down')) {
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
var two = document.getElementById('element2')
two.addEventListener('onmousedown', dragEl(two), false);

var one = document.getElementById('element1')
one.addEventListener('onmousedown', dragEl(one), false);
});