//skiils array, add skills and level as needed
var skills=[["java",9],["cpp",8],["python",8],["css3",5],["html5",3]]

//traits array, add traits as needed
var traits=["Developer", "Designer", "Photographer", "Learner", "Versatile", "Adaptable", "Dependable", "Funny", "Hardworking", "Friendly", "Diligent"];

//bottom margin calculation
var margin_bot = (10/(skills.length +1)).toString(10).concat("vh");

//looping through skills and 
// creating div elements inside skills-graph id
// with dynamic width based on skills and 
// dynamic bottom margin based on number of skills

for (var i = 0; i < skills.length ; i++) {
	var div = document.createElement("div");
	var div2= document.createElement("div");
	var width_final=(skills[i][1] * 10).toString(10).concat("%")
	div.innerHTML = skills[i][1];
	div.style.width=width_final;
	div.style.marginBottom=margin_bot;
	div.className="skillBar lavender-background ";
	div2.innerHTML=skills[i][0];
	div2.style.marginBottom=margin_bot;
	div2.className="skillName lavender-color";
	document.getElementById("skills-graph").appendChild(div);
	document.getElementById("skills-title").appendChild(div2);
}

/*Interval for text change loop*/
var t=window.setInterval(changeTraits,4000);
console.log('interval started');
//var od=new Date().getTime();
var i=1;
function changeTraits(){
	if(i>=traits.length){
		i=0;
	}
	document.getElementById("second-text").innerHTML=traits[i++];
	//var nd=new Date().getTime();
	//console.log(Math.abs(nd - od));
	//od=nd;
	return null;
}

//scroll down button script
mybutton = document.getElementById("scroll-down-button");

//button.onclick = function(){scrollFunction()};
function scrollFunction(){
	document.body.scrollTop = 1000;
	document.documentElement.scrollTop = document.documentElement.clientHeight;
}








/*var e = document.getElementById('second-text');

function whichAnimationEvent(){
  var t;
  var el = document.createElement("fakeelement");
  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}
window.onload=function(){
	var transitionEvent = whichAnimationEvent();
	transitionEvent && e.addEventListener(transitionEvent, function() {
	console.log('Transition complete!  This is the callback, no library needed!');
});

}*/

/* Listen for a transition! */

/*
div.style.margin-top=10;

div.innerHTML = skills[i][0];
div.className="skillBar-title";
//document.getElementById("skills-graph").appendChild(div);
*/