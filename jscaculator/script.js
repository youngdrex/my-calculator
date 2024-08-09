
function popAlert() {
    alert("i just clicked a button");
};

var  sumValues = document.getElementById('addvalues');

sumValues.onclick = function(){
    alert("you just clicked an id")
}



//CALCULATOR 

var calc = document.getElementById('calculate');

calc.onclick = function(){

var numberOne = parseFloat(document.getElementById('number_one').value);

var numberTwo = parseFloat(document.getElementById('number_two').value);

 var sumResults = numberOne + numberTwo;

document.getElementById('results').innerHTML = sumResults;

}