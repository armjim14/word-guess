var time = 12;
var li = 0;
var start = 0
var keeptrack = 0;

var choice = ["KitKat", "Twix", "Hershey", "Snickers", "Crunch", "Pay", "Reeses", "mnms", "kinder", "cocoa"];
var what = Math.floor(Math.random() * 10);
var word = (choice[what].toUpperCase());

var other = document.getElementById("left-text");
var gues = document.getElementById("guess");
var dots = document.getElementById("show");
var win = document.getElementById("winner");
var winner = 0;
var loser = document.getElementById("loser");
var lose = 0;

document.onkeyup = function(e) {
    var letter = e.key.toUpperCase();

    if ( start == 0 ){
        start =+ 1;
        getword();
        nextLevel(letter);
        checkletter(letter);
    } else {
        nextLevel(letter);
        checkletter(letter);
    }
}

function press() {  
    li +=1;
    document.getElementById("number").innerHTML = time;
    
    if ( time >= 1 ){
        time -= 1;
    } else {
        time = 12;
        gues.textContent = " ";
        dots.textContent = "";
        start -= 1;
        lose += 1;
    }
    loser.textContent = lose;
    win.textContent = winner;
}

function nextLevel(norm) {

    if ( (norm == "A") || (norm == "B") || (norm == "C") || (norm == "D") || (norm == "E") || (norm == "F") || (norm == "G") || (norm == "H") || (norm == "I") || (norm == "J")
        || (norm == "K") || (norm == "L") || (norm == "M") || (norm == "N") || (norm == "O") || (norm == "P") || (norm == "Q") || (norm == "R") || (norm == "S") || (norm == "T")
        || (norm == "U") || (norm == "V") || (norm == "W") || (norm == "X") || (norm == "Y") || (norm == "Z") ) {

        var userchoice = " " + norm;

        gues.textContent = userchoice;

        press(); 
    } 
}

function getword() {
    what = Math.floor(Math.random() * 10);
    word = (choice[what].toUpperCase());

    for ( var i = 0; i < word.length; i++ ) {
        var span = document.createElement("Span");
        span.setAttribute("id", i );
        span.textContent = word[i];
        dots.appendChild(span);
    }
}

function checkletter(lett) {

    console.log(word.length);
    console.log(keeptrack);

    if ( word[0] == lett ) {
        other.style.display = "block";
        other.textContent = "first spot";
        keeptrack += 1;
    } else if ( word[1] == lett ) {
        other.style.display = "block";
        other.textContent = ("second spot");
        keeptrack += 1;
    } else if ( word[2] == lett ) {
        other.style.display = "block";
        other.textContent = ("third spot");
        keeptrack += 1;
    } else if ( word[3] == lett ) {
        other.style.display = "block";
        other.textContent = ("fourth spot");
        keeptrack += 1;
    } else if ( word[4] == lett ) {
        other.style.display = "block";
        other.textContent = ("fifth spot");
        keeptrack += 1;
    } else if ( word[5] == lett ) {
        other.style.display = "block";
        other.textContent = ("sixth spot");
        keeptrack += 1;
    } else if ( word[6] == lett ) {
        other.style.display = "block";
        other.textContent = ("seventh spot");
        keeptrack += 1;
    } else if ( word[7] == lett ) {
        other.style.display = "block";
        other.textContent = ("eight spot");
        keeptrack += 1;
    } else {
        other.style.display = "block";
        other.textContent = ("No match");
    }

    // if (keeptrack = word.length) {
    //     winner += 1;
    // }

}