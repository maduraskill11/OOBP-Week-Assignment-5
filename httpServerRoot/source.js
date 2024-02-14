/* Task 1 - Add a new div element to the div with the id "task1"
   The new div should contain the text "Task 1 Completed"
   You have access to the DOM via the variable "document".
*/
let task1Contents = '<div>Task 1 Completed</div>';
document.getElementById('task1').innerHTML = task1Contents;


/* Task 2 - Greeter
  Add a new input element with id "greeterName" and label text "Name:" to the div with the id "task2".
  Add a new button element with id "doGreet" to the div with the id "task2", next to the input element.
  Add a new div element with id "greetResult" to the div with the id "task2".
  When the button "doGreet" is clicked, the "greetResult" div should contain the text "Hello, "
  followed by the value of the input element "greeterName".
*/
let task2Contents = '<input type="text" id="greeterName" placeholder="Name:">';
task2Contents += '<button type="button" id="doGreet" onclick="getElementById(\'greetResult\').innerHTML = \'Hello, \' + document.getElementById(\'greeterName\').value;">My Button</button>';
task2Contents += '<div id="greetResult"></div>';
document.getElementById('task2').innerHTML = task2Contents;

/* Task 3 - Highlighter
  Add three new div elements with class "highlight" to the div with the id "task3".
  The background color of the divs should be white.
  Each div should contain the text "Click to highlight me".
  When a div with the class "highlight" is clicked, it should change its background color to yellow using inline css style.
  When a div with the class "highlight" is clicked again, it should change its background color to white.
*/
let divElements = '<div class="highlight" style="background-color: white;" onclick="changeColor(this)">Click to highlight me</div>'

for(let i=0;i<3;i++){
  document.getElementById('task3').innerHTML += divElements;
}

function changeColor(className){
  if(className.style.backgroundColor == "white"){
      className.style.backgroundColor = "yellow";
  } else {
      className.style.backgroundColor = "white";
  }
}

/* Task 4 - Sum Calculator
  Add a new input element with id "calcInput1" to the div with the id "task4".
  Add a new input element with id "calcInput2" to the div with the id "task4".
  Add a new button element with id "calcButton" to the div with the id "task4", next to the input elements.
  Add a new div element with id "calcResult" to the div with the id "task4".
  When the button "calcButton" is clicked, the "calcResult" div should contain the result of the calculation
  of the two input elements "calcInput1" and "calcInput2" summed together.
*/
let task4Contents = '<input type="text" id="calcInput1" />';
task4Contents += '<input type="text" id="calcInput2" />';
task4Contents += '<button id="calcButton" onclick="calculateSum()"> Claculate sum</button>';
task4Contents += '<div id="calcResult"> </div>';

document.getElementById('task4').innerHTML = task4Contents;

function calculateSum(){
  let val1 = document.getElementById('calcInput1').value;
  let val2 = document.getElementById('calcInput2').value;
  document.getElementById('calcResult').innerHTML = eval(Number(val1)+Number(val2));
  console.log(val1)
}
/* Task 5 - Hide and Show
  Add a new button element with id "hideButton" to the div with the id "task5".
  Add a new button element with id "showButton" to the div with the id "task5".
  Add a new div element with id "hideShowResult" to the div with the id "task5".
  The "hideShowResult" div should be 100px by 100px and have a background color of red and be hidden by default (display: none).
  When the button "hideButton" is clicked, the "hideShowResult" div should be hidden.
  When the button "showButton" is clicked, the "hideShowResult" div should be shown.
*/

let task5Contents = '<button type="button" id="hideButton" onclick="hideShow()"> Hide Button</button>';
task5Contents += '<button  type="button" id="showButton" onclick="hideShow()"> Show Button</button>';
task5Contents += '<div id="hideShowResult" style="background-color: red;display: none;width: 100px;height: 100px;"> fgfdg</div>';

document.getElementById('task5').innerHTML = task5Contents;

function hideShow(ele){
  let displayElement = document.getElementById('hideShowResult');
  console.log(displayElement);
  if (displayElement.style.display === "none") {
      displayElement.style.display = "block";
  } else {
      displayElement.style.display = "none";
  }
}
