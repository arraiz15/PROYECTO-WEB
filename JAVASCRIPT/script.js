// selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

// slide imagenes

var cons = 1;
function slide_show(){
var elemento = document.getElementById('galeria').getElementsByTagName('li');	
for(var n=cons; n <= elemento.length; n++){		
 elemento[n].className = 'selected';
 for(var i = 0; i<elemento.length; i++){
  if(i!=cons){
   elemento[i].className = 'noselected';
  }		
 }
  cons++;							
  break;
 }	
 if(cons >= elemento.length){
  cons = 0;		
 }
 return false;
}
window.onload = function(){
 setInterval(slide_show, 5000);
}

