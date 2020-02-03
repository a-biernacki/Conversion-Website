//Initialize and declare the variables for the conversion buttons
var tempCToF = document.getElementById("celsToFahr");
var tempFToC = document.getElementById("fahrToCels");
var lengthFToM= document.getElementById("feetToMeters");
var lengthMToF = document.getElementById("metersToFeet");
var lengthInToCm = document.getElementById("inToCm");
var lengthCmToIn = document.getElementById("cmToIn");
var weightLbToKg = document.getElementById("lbToKg");
var weightKgToLb = document.getElementById("kgToLb");
var displayResult = document.getElementById("results");

//functions
tempCToF.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
    var fahrResult = (input * 9/8) + 32;
    displayResult.innerHTML=fahrResult;
    console.log(input);
};

tempFToC.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

lengthFToM.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

lengthMToF.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

lengthInToCm.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

lengthCmToIn.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

weightLbToKg.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};

weightKgToLb.onclick = function(){
    var input = document.getElementById("userInput").innerHTML;
};


