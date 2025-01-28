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

