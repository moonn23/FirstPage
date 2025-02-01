function show() {
    document.getElementById("result").style.display="block";
}
function nonShow() {
    document.getElementById("result").style.display="none";
}

function message() {
    document.getElementById("output").innerHTML="Enter the Name Button to show the result";
}

function disMessage() {
    document.getElementById("output").innerHTML="";
}

function update(previewPic) {
    const bp=document.querySelector("#biggerPicture");
    bp.style.backgroundImage = "url(" + previewPic.src + ")";
    bp.innerHTML="";
}

function undo() {
    const bp=document.querySelector("#biggerPicture");
    bp.style.backgroundImage = "url('')";
    bp.innerHTML="Hover over an image to display here!";
}

function setImage() {
    const currentImages = document.querySelectorAll(".preview")
    for (let i=0; i < currentImages.length; i++) {
        console.log("Image"+i)
        currentImages[i].setAttribute("tabindex","0")
    }
}
function focusFunction() {
    document.getElementById("input").style.background="yellow";
}

function blurFunction() {
    document.getElementById("input").style.background="red";
}

function enterName() {
    const input = document.getElementById("input");
    const name=input.value;
    let result="7 days to die";
    if(name==result) window.alert("You are true! This game is 7 days to die!");
    else window.alert(name+": is the false result");
}


function loadPicture4() {
    options = ["sw2.jpg", "sw2.jpg", "sw4.jpg", "bw2.jpg", "bw3.jpg", "bw4.jpg", "bo2.jpg", "bo3.jpg", "bo4.jpg"];
    randomImg = "images/" + options[Math.floor(Math.random()*options.length)];
    img = document.getElementById("picture4");
    img.setAttribute("src", randomImg);
    img.setAttribute("alt","");
}



