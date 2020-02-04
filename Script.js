/*
 * Arianna Biernacki
 * Student ID: xxxxxxxxx
 * SYST10199 - Web Programming
 */

//Initialize and declare the variables for the conversion buttons
var clearData = document.getElementById("clear");
var tempCToF = document.getElementById("celsToFahr");
var tempFToC = document.getElementById("fahrToCels");
var lengthFToM= document.getElementById("feetToMeters");
var lengthMToF = document.getElementById("metersToFeet");
var lengthInToCm = document.getElementById("inToCm");
var lengthCmToIn = document.getElementById("cmToIn");
var weightLbToKg = document.getElementById("lbToKg");
var weightKgToLb = document.getElementById("kgToLb");
var displayResult = document.getElementById("results");
displayResult.style.color="white";
displayResult.style.fontSize="xx-large";
displayResult.style.textAlign="center";

//functions
clearData.onclick = function(){
    var input = document.getElementById("userInput").value = "";
    input = document.getElementById("userInput").focus();
    displayResult.innerHTML = "";
};

tempCToF.onclick = function(){
    var input = document.getElementById("userInput").value;
    var fahrResult = (input * 9/5) + 32;
    var fahrR = fahrResult.toFixed(2);
    displayResult.innerHTML = input + " &#8451; = " + fahrR + " &#8457;";
};

tempFToC.onclick = function(){
    var input = document.getElementById("userInput").value;
    var celsResult = (input - 32) * 5/9;
    var celsR = celsResult.toFixed(2);
    displayResult.innerHTML = input + " &#8457; = " + celsR + " &#8451;";
};

lengthFToM.onclick = function(){
    var input = document.getElementById("userInput").value;
    var meterResult = input / 3.281;
    var meterR = meterResult.toFixed(2);
    displayResult.innerHTML = input + "ft = " + meterR + "m";
};

lengthMToF.onclick = function(){
    var input = document.getElementById("userInput").value;
    var footResult = input * 3.281;
    var footR = footResult.toFixed(2);
    displayResult.innerHTML = input + "m = " + footR + "ft";
};

lengthInToCm.onclick = function(){
    var input = document.getElementById("userInput").value;
    var cmResult = input * 2.54;
    var cmR = cmResult.toFixed(2);
    displayResult.innerHTML = input + "in = " + cmR + "cm";
};

lengthCmToIn.onclick = function(){
    var input = document.getElementById("userInput").value;
    var inResult = input / 2.54;
    var inR = inResult.toFixed(2);
    displayResult.innerHTML = input + "cm = " + inR + "in";
};

weightLbToKg.onclick = function(){
    var input = document.getElementById("userInput").value;
    var kgResult = input / 2.205;
    var kgR = kgResult.toFixed(2);
    displayResult.innerHTML = input + "lbs = " + kgR + "kgs";
};

weightKgToLb.onclick = function(){
    var input = document.getElementById("userInput").value;
    var lbResult = input * 2.205;
    var lbR = lbResult.toFixed(2);
    displayResult.innerHTML = input + "kgs = " + lbR + "lbs";
};
