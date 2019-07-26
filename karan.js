// var button = document.getElementById("enter");
// var input = document.getElementById("inputuser");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode("testing"));
// 	ul.appendChild(li);
// })

var button = document.getElementById("sys");
// var body= document.getElementById("body1");
var isColor=true;

button.addEventListener("click",function(){
	if (isColor) {
		document.body.style.background ="white";
		document.body.style.color ="black";
		isColor=false;
	}else{
		document.body.style.background ="black";
		document.body.style.color ="#d6cab0";
		isColor=true;
	}
});


