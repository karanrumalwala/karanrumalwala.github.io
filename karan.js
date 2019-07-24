var database=[
	{
		username: "karan",
		password:"rumalwala"
	}
];

var newsFeed=[
	{
	username: "boby",
	timeline: "aksldamkapsdo"  
	},
	{
	username: "ewfwe",
	timeline: "asd3323ssada"
	}
];

var userPrompt= prompt("tell me username");
var passPrompt= prompt("tell me password");

function signIn(user,pass) {
	if (user===database[0].username &&
		pass===database[0].password){
		console.log(newsFeed);
	}else{
		alert("sorry");
	}
}

signIn(userPrompt,passPrompt);