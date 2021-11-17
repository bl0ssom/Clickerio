let pointsEl = document.getElementById("points-el")
let finalmessageEl = document.getElementById("finalmessage-el")
let totalclicks = 1;
let superclicker1 = document.getElementById("superclicker1")
//document.getElementById("superclicker1").style.visibility = "hidden";
let buyautoEl = document.getElementById("buyauto")
//document.getElementById("buyauto").style.visibility = "visible"
let autobegin = false;
pointsEl.textContent = "Total Points: " + totalclicks
//document.getElementById("clicker2").style.visibility = "hidden"
//document.getElementById("Floor2").style.visibility = "hidden"
clicker2working = false;
clicker3working = false;
//document.getElementById("buyclicker3").style.visibility = "hidden"
testing = true;

function clicker1() {
    totalclicks = totalclicks + 100;
    pointsEl.textContent = "Total Points: " + totalclicks
}
function buyclicker2() {
    if(totalclicks >= 200) {
        totalclicks -= 200
        pointsEl.textContent = "Total Points: " + totalclicks
        //document.getElementById("clicker2").style.visibility = "visible"
        //document.getElementById("buyclicker2").style.visibility = "hidden"
        //document.getElementById("Floor2").style.visibility = "visible"
clicker2working = false;
        clicker2working = true;
    } else {
        alert("Need 200 points to buy")
    }


}
function clicker2() {
    if (clicker2working === true ) {
        totalclicks += 10;
        pointsEl.textContent = "Total Points: " + totalclicks
        finalmessageEl.textContent = "Messages: You have unlocked the level 2 clicker."
        
    } else {
        
    }
}

function Floor2() {
    if (totalclicks >= 200) {
        superclicker1.style.visibility = "visible"
        //document.getElementById("Floor2").style.visibility = "hidden"
        //document.getElementById("buyclicker3").style.visibility = "visible"
        //document.getElementById("superclicker1").style.visibility = "hidden"
    } else {
      
        alert("Need 200 points to unlock next clickers.")  
        

      }
}

function buyclicker3() {
    if (totalclicks >= 300 ) {
        totalclicks -= 300;
        pointsEl.textContent = "Total Points: " + totalclicks
        clicker3working = true;
        //document.getElementById("buyclicker3").style.visibility = "hidden"
        //document.getElementById("superclicker1").style.visibility = "visible"
    } else {
        alert("Need 300 points to use")
    }
}

function superclicker10() {
    if (clicker3working = true) {
        totalclicks += 100
        pointsEl.textContent = "Total Points: " + totalclicks;
    } else {
        
    }
}


function buyauto() {
    if (totalclicks >= 500) {
        totalclicks -= 500;
        pointsEl.textContent = "Total Points: " + totalclicks;
        buyautoEl.style.visibility = "hidden"
        autobegin = true;
        finalmessageEl.textContent = "Message: You have unlocked the auto clicker machine. It will give you 1 point every second."
    } else {
        alert("Need 500 points for auto points.")
    }
}



function autoPoints() {
    if(autobegin === true) {
        totalclicks += 1;
        pointsEl.textContent = "Total Points: " + totalclicks;
           
        
    } else  {

    }

}
let cancel = setInterval(autoPoints, 1000)


