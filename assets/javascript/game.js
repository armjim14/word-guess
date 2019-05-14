var time = 12;
var li = 0;
var arr = [];
var choice = ["KitKat", "Twix", "Hershey", "Snickers", "Crunch", "Pay", "Reeses", "mnms", "kinder", "cocoa"];
var what = Math.floor(Math.random() * 10);
var last = (choice[what].toUpperCase());

var other = document.getElementById("left-text");

var dots = document.getElementById("show");
showword();

document.onkeyup = function(e) {
    var norm = e.key;
    if ( (norm == "a") || (norm == "b") || (norm == "c") || (norm == "d") || (norm == "e") || (norm == "f") || (norm == "g") || (norm == "h") || (norm == "i") || (norm == "j")
    || (norm == "k") || (norm == "l") || (norm == "m") || (norm == "n") || (norm == "o") || (norm == "p") || (norm == "q") || (norm == "r") || (norm == "s") || (norm == "t")
    || (norm == "u") || (norm == "v") || (norm == "w") || (norm == "x") || (norm == "y") || (norm == "z") ) {
    
    other.style.display = "none";

    var userchoice = " " + e.key;
    arr[li] = userchoice;

    var gues = document.getElementById("guess");
    gues.innerHTML = arr;

    simple();
    } else {
        other.style.display = "block";
        other.textContent = "Not a valid key";
    }
}

function simple() {
    li +=1
    press();
}

function press() {  

    document.getElementById("number").innerHTML = this.time;
    
    if ( time >= 1 ){
        time -= 1;
    } else {
        time =+ 1;
    }
}

function showword() {
    for ( var i = 0; i < last.length; i++ ) {
        var span = document.createElement("Span");
        span.textContent = "-"
        dots.appendChild(span);
    }
}