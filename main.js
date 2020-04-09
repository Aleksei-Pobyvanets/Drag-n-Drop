document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    var dragElem = document.getElementById('object');
    var dragElem2 = document.getElementById('object2');
    var dragElem3 = document.getElementById('object3');
    
    function ff() {
        var a = dragElem;
        return move(a)
    }
    function ff2() {
        var a = dragElem2;
        return move(a)
    }
    function ff3() {
        var a = dragElem3;
        return move(a)
    }

    dragElem.onclick = ff();
    dragElem2.onclick = ff2();
    dragElem3.onclick = ff3();
    

    function move(a) {
        a.onmousedown = function(e) {
    
            var coords = getCoords(a);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;
          
            a.style.position = 'absolute';
            document.body.appendChild(a);
            moveAt(e);
          
            a.style.zIndex = 1000; 
          
            function moveAt(e) {
                a.style.left = e.pageX - shiftX + 'px';
                a.style.top = e.pageY - shiftY + 'px';
            }
          
            document.onmousemove = function(e) {
              moveAt(e);
            };
          
            a.onmouseup = function() {
              document.onmousemove = null;
              a.onmouseup = null;
            };
          
          }
          
          a.ondragstart = function() {
            return false;
          };
          
          function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
              top: box.top + pageYOffset,
              left: box.left + pageXOffset
            };
          }
    }
    

    // Element.prototype.makeDraggable=function(){
    //     var o=this
    //     o.onmousedown=function(e){
    //       var offsetX=e.pageX-parseInt(o.style.left)
    //       var offsetY=e.pageY-parseInt(o.style.top)
    //       document.onmousemove=function(e) {
    //         o.style.left=Math.max(Math.min(e.pageX-offsetX,o.parentNode.clientWidth-o.clientWidth),0)+'px'
    //         o.style.top=Math.max(Math.min(e.pageY-offsetY,o.parentNode.clientHeight-o.clientHeight),0)+'px'
    //       }
    //       document.onmouseup = function(e) {
    //         document.onmousemove=o.onmouseup=null
    //       }
    //     }
    //     o.ondragstart = function(){return 0}
    //   }
    //   document.getElementById('object1').makeDraggable()
    
});