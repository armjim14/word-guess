var time = 10;
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
var img = document.getElementById("imgmid");
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

    img.setAttribute("src", "assets/images/chocolate.jpg");
    document.getElementById("wordlen").textContent = " " + word.length;

    for ( var i = 0; i < word.length; i++ ) {
        var span = document.createElement("Span");
        span.setAttribute("id", i );
        span.textContent = "-";
        dots.appendChild(span);
    }
}

function checkletter(lett) {

    if ( word[0] == lett ) {
        other.textContent = "first spot";
        document.getElementById(0).style.display = "inline";
        document.getElementById(0).textContent = word[0];
        keeptrack += 1;
    } else if ( word[1] == lett ) {
        other.textContent = ("second spot");
        document.getElementById(1).style.display = "inline";
        document.getElementById(1).textContent = word[1];
        keeptrack += 1;
    } else if ( word[2] == lett ) {
        other.textContent = ("third spot");
        document.getElementById(2).style.display = "inline";
        document.getElementById(2).textContent = word[2];
        keeptrack += 1;
    } else if ( word[3] == lett ) {
        other.textContent = ("fourth spot");
        document.getElementById(3).style.display = "inline";
        document.getElementById(3).textContent = word[3];
        keeptrack += 1;
    } else if ( word[4] == lett ) {
        other.textContent = ("fifth spot");
        document.getElementById(4).style.display = "inline";
        document.getElementById(4).textContent = word[4];
        keeptrack += 1;
    } else if ( word[5] == lett ) {
        other.textContent = ("sixth spot");
        document.getElementById(5).style.display = "inline";
        document.getElementById(5).textContent = word[5];
        keeptrack += 1;
    } else if ( word[6] == lett ) {
        other.textContent = ("seventh spot");
        document.getElementById(6).style.display = "inline";
        document.getElementById(6).textContent = word[6];
        keeptrack += 1;
    } else if ( word[7] == lett ) {
        other.textContent = ("eight spot");
        document.getElementById(7).style.display = "inline";
        document.getElementById(7).textContent = word[7];
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
    rtime = 0;
    arr = [];
    keeptrack = 0; 
    start -= 1;
    time = 10;
    winner += 1;
    gues.textContent = "";
    dots.textContent = "";
    other.textContent = "You won!, The word was " + word + " press space to play again";
    win.textContent = winner;
    changeimage();
}

function youlost() {
    rtime = 0;
    arr = [];
    keeptrack = 0;
    start -= 1;
    time = 10;
    lose += 1;
    gues.textContent = "";
    dots.textContent = "";
    other.textContent = "Sorry you lost, The word was " + word + " press space to play again";
    loser.textContent = lose;
    changeimage();
}

function changeimage(){
    if (what == 0){
        img.setAttribute("src", "assets/images/img0.jpg");
    } else if (what == 1) {
        img.setAttribute("src", "assets/images/img1.jpg");
    } else if (what == 2) {
        img.setAttribute("src", "assets/images/img2.jpg");
    } else if (what == 3) {
        img.setAttribute("src", "assets/images/img3.jpg");
    } else if (what == 4) {
        img.setAttribute("src", "assets/images/img4.jpg");
    } else if (what == 5) {
        img.setAttribute("src", "assets/images/img5.jpg");
    } else if (what == 6) {
        img.setAttribute("src", "assets/images/img6.png");
    } else if (what == 7) {
        img.setAttribute("src", "assets/images/img7.jpg");
    } else if (what == 8) {
        img.setAttribute("src", "assets/images/img8.jpg");
    } else if (what == 9) {
        img.setAttribute("src", "assets/images/img9.jpg");
    } else {
        null;
    }
}