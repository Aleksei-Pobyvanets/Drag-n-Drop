document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  var dnd = document.getElementById('dnd')
  dnd.addEventListener("mousedown", dndZona, false)
  var target = this

  function dndZona(){

      console.log("dndZons")
      var contextmenu = document.getElementsByClassName('drag');
      var Xbtn = document.getElementsByClassName('x');
    
    var initX, initY, mousePressX, mousePressY;
    for(var i = 0;contextmenu.length > i; i++){
      var el = contextmenu[i]
      el.addEventListener('mousedown', function(event) {
        
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
           el.removeEventListener('mousemove', repositionElement, false);
         }, false);
        
        }, false);
        
      
        function repositionElement(event) {
          // this.mousePressX = event.touches[0].clientX;
          // this.mousePressY = event.touches[0].clientY;
          this.prevLeft = parseInt(this.style.left) || 0;
          this.prevTop = parseInt(this.style.top) || 0;

          this.style.left = initX + event.clientX - mousePressX + 'px';
          this.style.top = initY + event.clientY - mousePressY + 'px';

        if (parseInt(this.style.top) < 0) {
          this.style.top = '3px';
        }
        if (parseInt(this.style.left) > initX - 0) {
          this.style.left = initX - 0 + 'px'
        }
    
        if (parseInt(this.style.top) > initY - 0) {
          this.style.top = initY - 0 + 'px';
        }
        if (parseInt(this.style.left) < 0) {
          this.style.left = '0px';
        }
    
        }
    }
  
    function RemoveElem() {
      el.parentNode.removeChild(el)
    }
    
    
  }
});