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
    var input = document.getElementById("userInput").value;
    var fahrResult = (input * 9/5) + 32;
    displayResult.innerHTML = input + " &#8451; = " + fahrResult + " &#8457;.";
};

tempFToC.onclick = function(){
    var input = document.getElementById("userInput").value;
    var celsResult = (input - 32) * 5/9;
    displayResult.innerHTML = input + " &#8457; = " + celsResult + " &#8451;.";
};

lengthFToM.onclick = function(){
    var input = document.getElementById("userInput").value;
    var meterResult = input / 3.281;
    displayResult.innerHTML = input + "ft = " + meterResult + "m.";
};

lengthMToF.onclick = function(){
    var input = document.getElementById("userInput").value;
    var footResult = input * 3.281;
    displayResult.innerHTML = input + "m = " + footResult + "ft.";
};

lengthInToCm.onclick = function(){
    var input = document.getElementById("userInput").value;
    var cmResult = input * 2.54;
    displayResult.innerHTML = input + "in = " + cmResult + "cm."
};

lengthCmToIn.onclick = function(){
    var input = document.getElementById("userInput").value;
    var inResult = input / 2.54;
    displayResult.innerHTML = input + "cm = " + inResult + "in."
};

weightLbToKg.onclick = function(){
    var input = document.getElementById("userInput").value;
    var kgResult = input / 2.205;
    displayResult.innerHTML = input + "lbs = " + kgResult + "kgs."
};

weightKgToLb.onclick = function(){
    var input = document.getElementById("userInput").value;
    var lbResult = input * 2.205;
    displayResult.innerHTML = input + "kgs = " + lbResult + "lbs."
};
