
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

function init() {
    // select the image from the DOM
    imgObj = document.getElementById('myImage');
    // alter CSS style properties
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    // alter imgObj
    moveImage('right');
}

var container = document.getElementsByClassName('button-container');

container[0].addEventListener('keypress', function(event) {
    const key = event.key;
    if(key == "w") {
        moveImage('up');
    }
    else if(key == "a") {
        moveImage('left');
    }
    else if(key == "d") {
        moveImage('right');
    }
    else if(key == "s") {
        moveImage('down');
    }
});

window.onload = init;