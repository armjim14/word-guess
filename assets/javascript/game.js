var time = 12;
var li = 0;
var start = 0
var arr = [];

var other = document.getElementById("left-text");
var gues = document.getElementById("guess");
var dots = document.getElementById("show");

document.onkeyup = function(e) {
    var letter = e.key.toUpperCase();

    if ( start == 0 ){
        start =+ 1;
        nextLevel(letter);
        getword();
    } else {
        nextLevel(letter);
    }
}

function simple() {
    li +=1
    press();
}

function press() {  

    document.getElementById("number").innerHTML = time;
    
    if ( time >= 1 ){
        time -= 1;
    } else {
        time = 12;
        arr = [];
        gues.textContent = " ";
        start -= 1;
    }
}

function nextLevel(norm) {

    if ( (norm == "A") || (norm == "B") || (norm == "C") || (norm == "D") || (norm == "E") || (norm == "F") || (norm == "G") || (norm == "H") || (norm == "I") || (norm == "J")
        || (norm == "K") || (norm == "L") || (norm == "M") || (norm == "N") || (norm == "O") || (norm == "P") || (norm == "Q") || (norm == "R") || (norm == "S") || (norm == "T")
        || (norm == "U") || (norm == "V") || (norm == "W") || (norm == "X") || (norm == "Y") || (norm == "Z") ) {
        
        other.style.display = "none";

        var userchoice = " " + norm;
        arr[li] = userchoice;

        gues.textContent = arr;

        simple(); 
    } else {
        other.style.display = "block";
        other.textContent = "Not a valid key";
    }
}

function getword() {
    var choice = ["KitKat", "Twix", "Hershey", "Snickers", "Crunch", "Pay", "Reeses", "mnms", "kinder", "cocoa"];
    var what = Math.floor(Math.random() * 10);
    var last = (choice[what].toUpperCase());

    for ( var i = 0; i < last.length; i++ ) {
        var span = document.createElement("Span");
        span.setAttribute("id", i );
        span.textContent = last[i];
        dots.appendChild(span);
    }
}