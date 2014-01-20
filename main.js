var victimNumber = 1;

var nameArray = [];
var streetArray = [];
var phoneArray = [];

for (var i = 0; i<victimNumber; i++) {
	nameArray.push(prompt("What is the victim's name?"));
	streetArray.push(prompt("What is the victim's street?"));
	phoneArray.push(prompt("What is the victim's phone?"));
	if (confirm('Do you want to enter another victim?')) {
		victimNumber++;
	};
}; 

var volNumber = 1;

var nameArrayVol = [];
var streetArrayVol = [];
var phoneArrayVol = [];

for (var i = 0; i<volNumber; i++) {
	nameArrayVol.push(prompt("What is the volunteer's name?"));
	streetArrayVol.push(prompt("What is the volunteer's street?"));
	phoneArrayVol.push(prompt("What is the volunteer's phone?"));
	if (confirm('Do you want to enter another volunteer?')) {
		volNumber++;
	};
}; 

alert("There are "+victimNumber+" victims\n"+
	"There are "+volNumber+" volunteers\n"+
	"The victims are "+nameArray+".\n"+
	"The volunteers are "+nameArrayVol+".");

var searchName = prompt("Please enter the name of a person in need");

var victimIndex = nameArray.indexOf(searchName);
var victimStreet = streetArray[victimIndex];
var volNames = [];

for (var i=0; i<streetArrayVol.length; i++) {
	if (streetArrayVol[i] === victimStreet) {
		volNames.push(nameArrayVol[i]);
	}
}

alert("The volunteers available on " +searchName+"'s street are:\n"+
	volNames);


