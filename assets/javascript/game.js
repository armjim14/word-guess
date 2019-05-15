var time = 12;
var li = 0;
var start = 0

var other = document.getElementById("left-text");
var gues = document.getElementById("guess");
var dots = document.getElementById("show");
var win = document.getElementById("winner");
var winner = 0;
var loser = document.getElementById("loser");
var lose = 0;

win.textContent = winner;

document.onkeyup = function(e) {
    var letter = e.key.toUpperCase();

    var choice = ["KitKat", "Twix", "Hershey", "Snickers", "Crunch", "Pay", "Reeses", "mnms", "kinder", "cocoa"];
    var what = Math.floor(Math.random() * 10);
    var word = (choice[what].toUpperCase());

    if ( start == 0 ){
        start =+ 1;
        getword(word);
        nextLevel(letter);
        checkletter(letter, word);
    } else {
        nextLevel(letter);
        checkletter(letter, word);
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
}

function nextLevel(norm) {

    if ( (norm == "A") || (norm == "B") || (norm == "C") || (norm == "D") || (norm == "E") || (norm == "F") || (norm == "G") || (norm == "H") || (norm == "I") || (norm == "J")
        || (norm == "K") || (norm == "L") || (norm == "M") || (norm == "N") || (norm == "O") || (norm == "P") || (norm == "Q") || (norm == "R") || (norm == "S") || (norm == "T")
        || (norm == "U") || (norm == "V") || (norm == "W") || (norm == "X") || (norm == "Y") || (norm == "Z") ) {

        var userchoice = " " + norm;
        var span2 = document.createElement("span");

        span2.textContent = (userchoice);
        gues.appendChild(span2);

        press(); 
    } 
}

function getword(upword) {

    for ( var i = 0; i < upword.length; i++ ) {
        var span = document.createElement("Span");
        span.setAttribute("id", i );
        span.textContent = upword[i];
        dots.appendChild(span);
    }
}

function checkletter(lett, wood) {

    console.log(wood);
    console.log(lett);

    if ( wood[0] == lett ) {
        other.style.display = "block";
        other.textContent = "it worked";
    } else if ( wood[1] == lett ) {
        other.style.display = "block";
        other.textContent = ("it worked paret 2");
    } else {
        other.textContent = ("it does not work");
    }

}