"use strict"

document.getElementById('btn').addEventListener('click',Error);
document.getElementById('work').addEventListener('click', function(){
	let audio=new Audio("music/music1.mp3");
    if(audio.paused) {

       audio.play();
    } else {
       audio.pause();
    }

});

let int=document.getElementById('expanding');
int.addEventListener("transitionend", Error);

function Error(){
	alert('К сожалению, у нас возникли временные технические проблемы, пожалуйста, проверьте позже.');
}

let name = prompt("Please enter your name","");
let CurrentUser={
	username: name,
	greeting() {
		alert("Current user name is" + " " + this.username);
	}

}
CurrentUser.greeting();

let item = document.getElementById("btn");
item.addEventListener("mouseover", check, false);

function check()
{  
   var item = document.getElementById("btn");
   item.setAttribute("style", "background-color:blue;");
}

$( "#fading" ).click(function() {
		$( this ).fadeTo( "fast", 0 );
	});

