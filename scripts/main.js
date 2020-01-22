/*var myHeading=document.querySelector('h1');
myHeading.textContent='Hello world!';*/

var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/firefox-icon.jpeg'){myImage.setAttribute('src','images/firefox2.gif');}
	else{myImage.setAttribute('src','images/firefox-icon.jpeg');}
};
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName1=prompt('Please enter your name.');
	localStorage.setItem('named',myName1);
	myHeading.textContent='Mozilla is cool3,'+myName1;		
	  
};
if(!localStorage.getItem('named')) {
  setUserName();
} else {
  var storedName1 = localStorage.getItem('named');
  myHeading.textContent = 'Mozilla is cool3-f,   ' + storedName1;
};
myButton.onclick = function() {
  setUserName();
};
