// var button = document.getElementById("enter");
// var input = document.getElementById("inputuser");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode("testing"));
// 	ul.appendChild(li);
// })

// var button = document.getElementById("sys");
// var body= document.getElementById("body1");
// var isColor=true;

// button.addEventListener("click",function(){
// 	if (isColor) {
// 		document.body.style.background ="white";
// 		document.body.style.color ="black";
// 		isColor=false;
// 	}else{
// 		document.body.style.background ="black";
// 		document.body.style.color ="#d6cab0";
// 		isColor=true;
// 	}
// });

var items= document.getElementsByTagName('a');
	var button = document.getElementById("sys");
	var isColor=true;
	var bordr= document.getElementById("bordrcolor");
	var socialcolor0 = document.getElementsByClassName("lkicon")[0];
	var socialcolor1 = document.getElementsByClassName("lkicon")[1];
	var socialcolor2 = document.getElementsByClassName("lkicon")[2];
	var socialcolor3 = document.getElementsByClassName("lkicon")[3];
	// console.log(socialcolor);
	button.addEventListener("click",ch);

	function ch(){
		
		if (isColor) 
		{
			document.body.style.background ="white";
			document.body.style.color ="#CD853F";
		    for (var i =0;i< items.length; i++){
	 	    items[i].style.color="#CD853F";}
	 	    bordr.style.borderColor="#CD853F";
	 	    socialcolor0.className="lkiconfill";
	 	    socialcolor1.className="lkiconfill";
	 	    socialcolor2.className="lkiconfill";
	 	    socialcolor3.className="lkiconfill";
 		    isColor=false;
		}
			else
		{
 		    document.body.style.background ="black";
 		    document.body.style.color ="#d6cab0";
 		    for (var i =0;i< items.length; i++){
	 	    items[i].style.color="#d6cab0";}
	 	    bordr.style.borderColor="#d6cab0";
	 	    socialcolor0.className="lkiconfillc";
	 	    socialcolor1.className="lkiconfillc";
	 	    socialcolor2.className="lkiconfillc";
	 	    socialcolor3.className="lkiconfillc";
 		    isColor=true;
		}

}


// var counter=function () {
// 	var count =0;

// 	var alerter= function(){
// 		alert(++count);
// 	}
// 	return alerter;
// }

// var count1Fn= counter();
// var count2Fn= counter();