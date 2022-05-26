
function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === "left") {
        imgObjStyle.left = (leftVal - 30) + "px";
        console.log("moving left")
    } else if(direction === "up") {
        console.log("moving right")
        imgObjStyle.top = (topVal - 30) + "px";
    } else if(direction === "right") {
        console.log("moving right")
        imgObjStyle.left = (leftVal + 30) + "px";
    } else if(direction === "down") {
        console.log("moving down")
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
    imgObj.style.top = '0px';
    // alter imgObj
    moveImage('right');
    moveImage("right")
}


window.onload = init;