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
    image.className = "clicked-image";
    image.id = event.target.id;
    image.src = imgArray[event.target.id];

    var prev = document.createElement("button")
    prev.innerText = "Previous";
    prev.id = "prev";
    prev.addEventListener("click", handlePrev, false);

    var next = document.createElement("button")
    next.innerText = "Next";
    next.id = "next";
    next.addEventListener("click", handleNext, false);

    var close = document.createElement("button")
    close.innerText = "Close";
    close.id = "close";
    close.addEventListener("click", handleClose, false);

    bigDiv.append(image);
    bigDiv.append(prev);
    bigDiv.append(next);
    bigDiv.append(close);

    document.getElementById("content").style.opacity ="0.25";
}

function handleOver(){
    document.getElementById(event.target.id).style.filter = "grayscale(0%)";
}

function handleOut(){
    document.getElementById(event.target.id).style.filter = "grayscale(50%)";
}

function handlePrev(){
    var index = (parseInt(document.getElementsByClassName("clicked-image")[0].id) - 1 + 12)%12;

    var bigDiv = document.getElementById("img-big")
    bigDiv.innerHTML = "";

    var image = document.createElement("img");
    image.className = "clicked-image";
    image.id = index;
    image.src = imgArray[index];

    var prev = document.createElement("button")
    prev.innerText = "Previous";
    prev.id = "prev";
    prev.addEventListener("click", handlePrev, false);

    var next = document.createElement("button")
    next.innerText = "Next";
    next.id = "next";
    next.addEventListener("click", handleNext, false);

    var close = document.createElement("button")
    close.innerText = "Close";
    close.id = "close";
    close.addEventListener("click", handleClose, false);

    bigDiv.append(image);
    bigDiv.append(prev);
    bigDiv.append(next);
    bigDiv.append(close);
}

function handleNext(){
    var index = (parseInt(document.getElementsByClassName("clicked-image")[0].id) - 1 + 12)%12;

    var bigDiv = document.getElementById("img-big")
    bigDiv.innerHTML = "";

    var image = document.createElement("img");
    image.className = "clicked-image";
    image.id = index;
    image.src = imgArray[index];

    var prev = document.createElement("button")
    prev.innerText = "Previous";
    prev.id = "prev";
    prev.addEventListener("click", handlePrev, false);

    var next = document.createElement("button")
    next.innerText = "Next";
    next.id = "next";
    next.addEventListener("click", handleNext, false);

    var close = document.createElement("button")
    close.innerText = "Close";
    close.id = "close";
    close.addEventListener("click", handleClose, false);

    bigDiv.append(image);
    bigDiv.append(prev);
    bigDiv.append(next);
    bigDiv.append(close);
}

function handleClose(){
    document.getElementById("img-big").innerHTML = "";
    document.getElementById("content").style.opacity ="1.0";
}