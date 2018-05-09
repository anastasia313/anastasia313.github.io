
var logo = document.getElementsByClassName("logo")[0];
var firstColor = [1,20,50];
var secondColor = [80,10,249];
var firstTimerId = null;
var secondTimerId = null;
var firstIndex = 0;
var secondIndex = 2;

function secondCounter(index) {
    if(firstColor[index] <= 6) {
        secondTimerId = setInterval(function() {
            if(secondColor[index] <= 248){
                secondColor[index]++;
                var styleForBackground = "background-image: linear-gradient(270deg, rgb(";
                styleForBackground += firstColor[0] + ", " + firstColor[1] + ", " + firstColor[2] + "), rgb(" + secondColor[0] + ", " + secondColor[1] + ", " + secondColor[2] + "));";
                logo.style = styleForBackground;

            } else {
                clearInterval(secondTimerId);
                secondTimerId = null;
            }
        }, 100);
    }
    else {
        secondTimerId = setInterval(function() {
            if(secondColor[index] >= 7){
                secondColor[index]--;
                var styleForBackground = "background-image: linear-gradient(270deg, rgb(";
                styleForBackground += firstColor[0] + ", " + firstColor[1] + ", " + firstColor[2] + "), rgb(" + secondColor[0] + ", " + secondColor[1] + ", " + secondColor[2] + "));";
                logo.style = styleForBackground;

            } else {
                clearInterval(secondTimerId);
                secondTimerId = null;
            }
        }, 100);
    }
}

function firstCounter(index){
    if(firstColor[index] <= 6) {
        firstTimerId = setInterval(function() {
            if(firstColor[index] <= 248){
                firstColor[index]++;
                let styleForBackground = "background-image: linear-gradient(270deg, rgb(";
                styleForBackground += firstColor[0] + ", " + firstColor[1] + ", " + firstColor[2] + "), rgb(" + secondColor[0] + ", " + secondColor[1] + ", " + secondColor[2] + "));";
                logo.style = styleForBackground;

            } else {
                clearInterval(firstTimerId);
                firstTimerId = null;
            }
        }, 100);
    }
    else {
        firstTimerId = setInterval(function() {
            if(firstColor[index] >= 7){
                firstColor[index]--;
                let styleForBackground = "background-image: linear-gradient(270deg, rgb(";
                styleForBackground += firstColor[0] + ", " + firstColor[1] + ", " + firstColor[2] + "), rgb(" + secondColor[0] + ", " + secondColor[1] + ", " + secondColor[2] + "));";
                logo.style = styleForBackground;

            } else {
                clearInterval(firstTimerId);
                firstTimerId = null;
            }
        }, 100);
    }
}

setInterval(function() {
    if(firstTimerId === null){
        firstCounter(firstIndex);
        firstIndex++;
    }
    if(secondTimerId === null) {
        secondCounter(secondIndex);
        secondIndex--;
    }
    if(firstIndex > 2) {
        firstIndex = 0;
    }
    if(secondIndex < 0) {
        secondIndex = 2;
    }
}, 1);




logo.addEventListener("mouseenter", submit);
function submit(){
    firstColor[0] = Math.floor(Math.random() * 249);  secondColor[0] = Math.floor(Math.random() * 249);
    firstColor[1] = Math.floor(Math.random() * 249);  secondColor[1] = Math.floor(Math.random() * 249);
    firstColor[2] = Math.floor(Math.random() * 249);  secondColor[2] = Math.floor(Math.random() * 249);
    let styleForBackground = "background-image: linear-gradient(270deg, rgb(";
    styleForBackground += firstColor[0] + ", "  + firstColor[1] + ", " + firstColor[2] + "), rgb(" + secondColor[0] + ", " + secondColor[1] + ", " + secondColor[2]+ "));";
        logo.style = styleForBackground;
}


startCounter();
