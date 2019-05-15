var time = 12;
var start = 0
var keeptrack = 0;
var rtime = 0;

var choice = ["Mars", "Twix", "Patchi", "Dove", "York", "Cadbury", "Mounds", "Bounty", "kinder", "Chunky"];
var what = Math.floor(Math.random() * 10);
var word = (choice[what].toUpperCase());

var arr = [];

var other = document.getElementById("left-text");
var gues = document.getElementById("guess");
var dots = document.getElementById("show");
var num = document.getElementById("number");

var win = document.getElementById("winner");
var winner = 0;
var loser = document.getElementById("loser");
var lose = 0;

document.onkeyup = function(e) {
    var letter = e.key.toUpperCase();

    console.log(word);

    other.textContent = "";
    loser.textContent = lose;
    win.textContent = winner;
    num.textContent = time;

    if ( start == 0 ){
        start =+ 1;
        getword();
    } else if ( (letter == arr[0]) || (letter == arr[1]) || (letter == arr[2]) || (letter == arr[3]) || (letter == arr[4]) || (letter == arr[5]) || (letter == arr[6]) 
    || (letter == arr[7]) || (letter == arr[8]) || (letter == arr[9]) || (letter == arr[10]) || (letter == arr[11]) || (letter == arr[12]) ) {
        other.textContent = "that " + letter + " is already selected";
    } else {
        
        if ( (letter == "A") || (letter == "B") || (letter == "C") || (letter == "D") || (letter == "E") || (letter == "F") || (letter == "G") || (letter == "H") 
        || (letter == "I") || (letter == "J") || (letter == "K") || (letter == "L") || (letter == "M") || (letter == "N") || (letter == "O") || (letter == "P") 
        || (letter == "Q") || (letter == "R") || (letter == "S") || (letter == "T") || (letter == "U") || (letter == "V") || (letter == "W") 
        || (letter == "X") || (letter == "Y") || (letter== "Z") ) {

            arr[rtime] = letter;

            var userchoice = " " + letter;
            var newspan = document.createElement("span");
            newspan.textContent = userchoice;
            gues.appendChild(newspan); 

            rtime += 1;

            checkletter(letter);

        }
    }
}

function getword() {
    what = Math.floor(Math.random() * 10);
    word = (choice[what].toUpperCase());

    for ( var i = 0; i < word.length; i++ ) {
        var span = document.createElement("Span");
        span.setAttribute("id", i );
        span.textContent = word[i];
        document.getElementById(Number).style.display = "none";
        dots.appendChild(span);
    }
}

function checkletter(lett) {

    if ( word[0] == lett ) {
        other.textContent = "first spot";
        keeptrack += 1;
    } else if ( word[1] == lett ) {
        other.textContent = ("second spot");
        keeptrack += 1;
    } else if ( word[2] == lett ) {
        other.textContent = ("third spot");
        keeptrack += 1;
    } else if ( word[3] == lett ) {
        other.textContent = ("fourth spot");
        keeptrack += 1;
    } else if ( word[4] == lett ) {
        other.textContent = ("fifth spot");
        keeptrack += 1;
    } else if ( word[5] == lett ) {
        other.textContent = ("sixth spot");
        keeptrack += 1;
    } else if ( word[6] == lett ) {
        other.textContent = ("seventh spot");
        keeptrack += 1;
    } else if ( word[7] == lett ) {
        other.textContent = ("eight spot");
        keeptrack += 1;
    } else {
        time -= 1;
        num.textContent = time;
    }

    if (keeptrack == word.length) {
        youwon();
    } else if (time <= 0) {
        youlost();
    } else {
        null;
    }

}

function youwon() {
    arr = [];
    keeptrack = 0; 
    start -= 1;
    time = 12;
    winner += 1;
    gues.textContent = "";
    dots.textContent = "";
    other.textContent = "You won!, The word was " + word + " press space to play again";
    win.textContent = winner;
}

function youlost() {
    arr = [];
    keeptrack = 0;
    start -= 1;
    time = 12;
    lose += 1;
    gues.textContent = "";
    dots.textContent = "";
    other.textContent = "Sorry you lost, The word was " + word + " press space to play again";
    loser.textContent = lose;
}