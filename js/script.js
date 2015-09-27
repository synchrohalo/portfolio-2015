function show(id,dispType){
	document.getElementById(id).style.display = dispType;
}

function hide(id){
	document.getElementById(id).style.display = 'none';
}

function changeTitle(title){
	document.title = title;
}

/********** PROJECTS **********/
document.getElementById("DT-thumb").onclick=function(){
	show("DT-details","block");
	show("DT-banner","block");
	hide("projects");
	changeTitle("Design Thinking Mobile App | Joanne Arboleda");
};

document.getElementById("TY-thumb").onclick=function(){
	show("TY-details","block");
	show("TY-banner","block");
	hide("projects");
	changeTitle("Business Travel Mobile App | Joanne Arboleda");
};

document.getElementById("MB-thumb").onclick=function(){
	show("MB-details","block");
	show("MB-banner","block");
	hide("projects");
	changeTitle("Food Delivery Webpage | Joanne Arboleda");
};


document.getElementById("DT-back").onclick=function(){
	show("projects","block");
	hide("DT-banner");
	hide("DT-details");
	changeTitle("Works | Joanne Arboleda");
};

document.getElementById("TY-back").onclick=function(){
	show("projects","block");
	hide("TY-banner");
	hide("TY-details");
	changeTitle("Works | Joanne Arboleda");
};

document.getElementById("MB-back").onclick=function(){
	show("projects","block");
	hide("MB-banner");
	hide("MB-details");
	changeTitle("Works | Joanne Arboleda");
};


//document.getElementById("DT-thumb").onmouseenter=function(){show("DT-title","inline");};