var screenX;
var screenY;
var navchange;

function hubload(){
    screenY = screen.availHeight;
    navchange = screenY/3;
    var body = document.getElementsByTagName("body")[0];
    body.setAttribute("style", "height:" + (screenY * 5) + "px;");
    navSet();
    document.getElementsByClassName("who-am-i")[0].setAttribute("style","height:" + screenY + "px;");
    document.getElementsByClassName("bg-image")[0].setAttribute("style","height:" + screenY + "px;");
    document.getElementsByClassName("skills")[0].setAttribute("style","height:" + screenY + "px;");
    //gitConnection();
}

function loadRepo(){
    screenY = screen.availHeight;
    navchange = screenY/3;
    navSet();
    gitConnection();
}

function navSet(){
    document.getElementById("navLeftTitle").setAttribute("style","opacity:0; display:none;");
    
    window.addEventListener("scroll", function(){
        var scroll = window.scrollY;
        if(scroll>=navchange){
            document.getElementsByTagName("nav")[0].setAttribute("style","background-color:#181818;");
            document.getElementById("navLeftTitle").setAttribute("style","opacity:1;");
        }
        if(scroll<navchange){
            document.getElementsByTagName("nav")[0].setAttribute("style","background-color:#ffffff00;");
            document.getElementById("navLeftTitle").setAttribute("style","opacity:0;");
        }
    });
}


var mouseX = 0;
var mouseY = 0;
 
window.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - 22;
  mouseY = e.clientY - 20;
  document.getElementById("mousePointer").setAttribute("style", "top: " + mouseY + "px; left:" + mouseX + "px; display:;");
}


function scrolltoid(id) {
    let e = document.getElementById(id);
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}