function show(id,dispType){
	document.getElementById(id).style.display = dispType;
}

function hide(id){
	document.getElementById(id).style.display = "none";
}

function changeTitle(title){
	document.title = title;
}

function thumbnailHover(id,isHover){
	if(isHover){ document.getElementById(id).style.visibility = "visible"; }
	else { document.getElementById(id).style.visibility = "hidden"; }
}

/********** PROJECTS **********/
var dtThumb = document.getElementById("DT-thumb");
var dtBack = document.getElementById("DT-back");
var tyThumb = document.getElementById("TY-thumb");
var tyBack = document.getElementById("TY-back");
var mbThumb = document.getElementById("MB-thumb");
var mbBack = document.getElementById("MB-back");


dtThumb.onclick=function(){
	show("DT-details","block");
	show("DT-banner","block");
	hide("projects");
	changeTitle("Design Thinking Mobile App | Joanne Arboleda");
};

dtThumb.onmouseenter=function(){
	thumbnailHover("DT-overlay", true);
};

dtThumb.onmouseleave=function(){
	thumbnailHover("DT-overlay", false);
};

tyThumb.onclick=function(){
	show("TY-details","block");
	show("TY-banner","block");
	hide("projects");
	changeTitle("Business Travel Mobile App | Joanne Arboleda");
};

tyThumb.onmouseenter=function(){
	thumbnailHover("TY-overlay", true);
};

tyThumb.onmouseleave=function(){
	thumbnailHover("TY-overlay", false);
};

tyBack.onclick=function(){
	show("projects","block");
	hide("TY-banner");
	hide("TY-details");
	changeTitle("Works | Joanne Arboleda");
};

mbThumb.onclick=function(){
	show("MB-details","block");
	show("MB-banner","block");
	hide("projects");
	changeTitle("Food Delivery Webpage | Joanne Arboleda");
};

mbThumb.onmouseenter=function(){
	thumbnailHover("MB-overlay", true);
};

mbThumb.onmouseleave=function(){
	thumbnailHover("MB-overlay", false);
};

mbBack.onclick=function(){
	show("projects","block");
	hide("MB-banner");
	hide("MB-details");
	changeTitle("Works | Joanne Arboleda");
};


//document.getElementById("DT-thumb").onmouseenter=function(){show("DT-title","inline");};