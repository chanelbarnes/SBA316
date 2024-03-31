const form = document.getElementById("form");

const totalInput = form.elements["total"];
const optionsSelect = form.elements["options"];
const rightContainer = document.getElementById("rightContainer");



form.addEventListener("submit", calculate);

function calculate (event) {
// prevent default submission
    event.preventDefault();
//get dropdown value
    var selectedValue = optionsSelect.value;

//get userInput total
    var bill = parseFloat(totalInput.value);

    let tip = selectedValue * bill;
    let tip1 = tip / 100;

//display tip amount    
    alert (`Tip $${tip1}`);

 //create paragraph node
 var paragraph = document.createElement("p");

 //create text node with tip amount
 var tipTextNode = document.createTextNode(`Tipped: $${tip1}`);

 //append text node to paragraph
 paragraph.appendChild(tipTextNode);

 //append paragraph to rightContainer
 rightContainer.appendChild(paragraph);
}



//QuerySelector color change
const h1 = document.querySelectorAll("h1");

h1.forEach(function(h1) {
//on hover
    h1.addEventListener("mouseenter", function() {

    h1.style.backgroundColor = "red";
})

//off hover
h1.addEventListener("mouseleave", function() {

    h1.style.backgroundColor = "";
});
})
