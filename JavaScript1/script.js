
let num1, num2, suma, text;

function sumaNumeros(){
  num1 = document.getElementById('num1').value;
  num2=document.getElementById('num2').value;
 
  suma=parseFloat(num1) + parseFloat(num2);
  text=suma;
  
  document.getElementById("resultado").innerText =text;
}

function changeContent(){
  document.getElementById("demo").innerText="cambiado"; 
}
window.addEventListener("load", function(){
  this.document.getElementById("boton").onclick =changeContent;
});




