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
	var myName=prompt('Please enter your name:');
	localStorage.setItem('nameg',myName);
	myHeading.textContent='Mozilla is cool,  '+myName;
};
if(!localStorage.getItem('nameg')){
setUserName();
}else{var storedName=localStorage.getItem('nameg');
myHeading.textContent='Mozilla is cool-o,  '+storedName;
};
myButton.onclick=function(){setUserName();};


