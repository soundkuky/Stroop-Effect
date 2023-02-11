var show = document.getElementById('here');
var count = document.getElementById("count");
var counter = 0;

var bouton = document.getElementById('reroll');
bouton.addEventListener('click', stroop, false);

function stroop(){
    var number = Math.floor(Math.random() * 6);
   
    if (number == 0){
        show.innerHTML = "red"
        show.style.color="red"
		show.style.fontSize="3em"
    }
    else if (number == 1){
        show.innerHTML = "blue"
        show.style.color="blue"
		show.style.fontSize="3em"
    }
    
    else if (number == 2){
        show.innerHTML = "green"
        show.style.color="green"
		show.style.fontSize="3em"
    }

    else if (number == 3){
        show.innerHTML = "black"
        show.style.color="black"
		show.style.fontSize="3em"
    }

    else if (number == 4){
        show.innerHTML = "yellow"
        show.style.color="yellow"
		show.style.fontSize="3em"
    }

    else if (number == 5){
        show.innerHTML = "purple"
        show.style.color="purple"
		show.style.fontSize="3em"
    }

    counter += 1
    count.innerHTML = counter
}


