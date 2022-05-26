
function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === "left") {
        // console.log("moving left");
        imgObjStyle.left = (leftVal - 30) + "px";
    } else if(direction === "up") {
        // console.log("moving up");
        imgObjStyle.top = (topVal - 30) + "px";
    } else if(direction === "right") {
        // console.log("moving right");
        imgObjStyle.left = (leftVal + 30) + "px";
    } else if(direction === "down") {
        // console.log("moving down");
        imgObjStyle.top = (topVal + 30) + "px";
    }
}

function rotateImage(direction) {
    if(direction === "right") {
        rotation += 30;
        rotation %= 360;
        document.getElementById("myImage").style.transform = "rotate("+rotation+"deg)";
    }
    else if(direction === "left") {
        rotation -= 30;
        rotation %= 360;
        document.getElementById("myImage").style.transform = "rotate("+rotation+"deg)";
    }
}

function init() {
    // select the image from the DOM
    imgObj = document.getElementById('myImage');
    // alter CSS style properties
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    imgObj.style.transform = "initial";
    imgObj.style.zIndex = "-1";
}

//retrieving the container for the buttons
var container = document.getElementsByClassName('button-container');

//registering an event listener to activate on key presses
window.addEventListener('keypress', function(event) {
    const key = event.key;
    if(key == "w") { //if w is pressed move up
        moveImage('up');
    }
    else if(key == "a") { //if a is pressed move left
        moveImage('left');
    }
    else if(key == "d") { //if d is pressed move right
        moveImage('right');
    }
    else if(key == "s") { //if s is pressed move down
        moveImage('down');
    }
    else if(key == "r") {
        init();
    }
    else if(key == "e") {
        rotateImage("right");
    }
    else if(key == "q") {
        rotateImage("left");
    }
});

var rotation = 0;
var newElement = document.createElement('button');
newElement.id = "Reset";
newElement.onclick = init;
newElement.textContent = "Reset the Position";
document.getElementsByTagName('button')[3].insertAdjacentElement("afterend", newElement);

window.onload = init;