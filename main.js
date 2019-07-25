//skiils array, add skills and level as needed
var skills=[["java",9],["cpp",8],["python",8],["css3",5],["html5",3],["html5",2]]

//looping through skills and 
// creating div elements inside skills-graph id
// with dynamic width based on skills and 
// dynamic bottom margin based on number of skills
for (var i = 0; i < skills.length ; i++) {
	var div = document.createElement("div");
	var width_final=(skills[i][1] * 10).toString(10).concat("%")
	var margin_bot = (100/(skills.length +1)).toString(10).concat("%");
	div.innerHTML = skills[i][0];
	div.style.width=width_final;
	div.style.marginBottom=margin_bot;
	div.className="skillBar";
	document.getElementById("skills-graph").appendChild(div);
}
/*
div.style.margin-top=10;

div.innerHTML = skills[i][0];
div.className="skillBar-title";
//document.getElementById("skills-graph").appendChild(div);
*/