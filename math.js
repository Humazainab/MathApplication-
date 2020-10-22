/*var myElement = document.getElementById("#firstNumber");
firstNumber.addEventListener("click", function addRandom () {
    var firstNumber = (Math.floor(Math.random() * 10));    
 } ); 


function random () {
    var first = (Math.floor(Math.random() * 10));
    } ;
 //console.log(Math.floor(Math.random() * 10))*/

 /*function random () {
     document.getElementById("#firstNumber").innerHTML = Math.floor (Math.random() *100) +1; 
 }*/
 var min = 0;
 var max = 100;
 function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
 }
    console.log(getRandomArbitrary(min, max), return Math.random() * (max - min) + min);
  