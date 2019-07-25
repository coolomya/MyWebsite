//skiils array, add skills and level as needed
var skills=[["java",9],["cpp",8],["python",8],["css3",5],["html5",3]]

//looping through skills and 
// creating div elements inside skills-graph id
// with dynamic width based on skills and 
// dynamic bottom margin based on number of skills
var margin_bot = (10/(skills.length +1)).toString(10).concat("vh");

for (var i = 0; i < skills.length ; i++) {
	var div = document.createElement("div");
	var div2= document.createElement("div");
	var width_final=(skills[i][1] * 10).toString(10).concat("%")
	div.innerHTML = skills[i][1];
	div.style.width=width_final;
	div.style.marginBottom=margin_bot;
	div.className="skillBar";
	div2.innerHTML=skills[i][0];
	div2.style.marginBottom=margin_bot;
	div2.className="skillName";
	document.getElementById("skills-graph").appendChild(div);
	document.getElementById("skills-title").appendChild(div2);
}


/*
div.style.margin-top=10;

div.innerHTML = skills[i][0];
div.className="skillBar-title";
//document.getElementById("skills-graph").appendChild(div);
*/