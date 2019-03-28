var imgArray = ["de_gea.jpeg", "shaw.jpeg", "lindelof.jpeg", "bailly.jpeg", "young.jpeg", "martial.jpeg",
 "herrera.jpeg", "pogba.jpeg", "pereira.jpeg", "lingard.jpeg", "lukaku.jpeg", "rashford.jpeg"];

for(var i = 0; i < 12; i++){
    document.getElementById(i).addEventListener("click", handleClick, false);
    document.getElementById(i).addEventListener("mouseover", handleOver, false);
    document.getElementById(i).addEventListener("mouseout", handleOut, false);
    document.getElementById(i).style.filter = "grayscale(50%)";
}

function handleClick(){
    var bigDiv = document.getElementById("img-big")
    bigDiv.innerHTML = "";

    var image = document.createElement("img");
    image.className = "clicked-image"
    image.src = imgArray[event.target.id];

    var next = document.createElement("button")
    next.innerText = "Next";
    next.addEventListener("click", handleNext, false);

    var prev = document.createElement("button")
    prev.innerText = "Previous";
    prev.addEventListener("click", handlePrev, false);

    var close = document.createElement("button")
    close.innerText = "Close";
    close.addEventListener("click", handleClose, false);

    bigDiv.append(image);
    bigDiv.append(next);
    bigDiv.append(prev);
    bigDiv.append(close);

}

function handleOver(){
    document.getElementById(event.target.id).style.filter = "grayscale(0%)";
}

function handleOut(){
    document.getElementById(event.target.id).style.filter = "grayscale(50%)";
}

function handlePrev(){
    var index = (event.target.id);
    console.log(index);
}

function handleNext(){
    var index = event.target.id;
    console.log(index);
}

function handleClose(){
    document.getElementById("img-big").innerHTML = "";
}