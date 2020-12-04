function allowDropThis(i) {
    i.preventDefault();
}



function dragThis(i) {
    i.dataTransfer.setData("box", i.target.id);
}



function dropThis(i) {
    i.preventDefault();
    var data = i.dataTransfer.getData("box");
    i.target.appendChild(document.getElementById(data));
}




