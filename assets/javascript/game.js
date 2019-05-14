var time = 12;
var li = 0;
var arr = [];
var choice = ["KitKat", "Twix", "Hershey", "Snickers", "Crunch", "Pay", "Reeses", "mnms", "kinder", "cocoa"];
var what = Math.floor(Math.random() * 10);
var last = (choice[what].toUpperCase());
console.log(last);

document.onkeyup = function(e) {
    var userchoice = " " + e.key;
    arr[li] = userchoice;

    var gues = document.getElementById("guess");
    gues.innerHTML = arr;

    simple();
}

function simple() {
    li +=1
    press();
}

function press() {  
        time -= 1;
        document.getElementById("number").innerHTML = this.time;
}