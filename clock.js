var show = document.getElementById('here');
var counter = 0;

var bouton = document.getElementById('reroll');
bouton.addEventListener('click', stroop, false);

function stroop(){
    var number = Math.floor(Math.random() * 30);
    show.innerHTML = "<img src='clock\\"+number+".png'>"

    counter += 1
    count.innerHTML = counter
}


