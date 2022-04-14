 // using button press
 var numberofbuttons=document.querySelectorAll(".drum").length;
 for(i=0;i<numberofbuttons;i++){
 	document.querySelectorAll("button")[i].addEventListener("click",function(){
 		var a=this.innerHTML;
 		makesound(a);
 		addanimations(a);
 		
 });
}
// using key board
document.addEventListener("keypress",function(event){
makesound(event.key)
addanimations(event.key);
});
function makesound(key){
	switch(key){
 			case "w":
 				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();

			break;		
            case "a":
           		var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
			break;
			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
			break;
			case "d":
				var tom4=new Audio("sounds/tom-4.mp3");
				tom4.play();
			break;
			case "j":
				var kick = new Audio("sounds/Kick-bass.mp3");
				kick.play();
			break;
			case "k":
				var snare = new Audio("sounds/Snare.mp3");
				snare.play();
			break;
			case "l":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;
		}		
}

function addanimations(currentkey){
	var activebutton=document.querySelector("."+currentkey);
	activebutton.classList.add("pressed");


	setTimeout(function(){activebutton.classList.remove("pressed");},100);

}
















