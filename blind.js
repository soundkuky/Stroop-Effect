var show = document.getElementById('here');
var counter = 0;

var bouton = document.getElementById('reroll');
bouton.addEventListener('click', stroop, false);

function stroop(){
    var number = Math.floor(Math.random() * 6);
    var number2 = Math.floor(Math.random() * 5);

    if (number == 0){
        show.innerHTML = "red"

        if (number2 == 0){
            show.style.color="blue"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="green"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="black"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="yellow"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="purple"
		    show.style.fontSize="3em"
        }
    }

    else if (number == 1){
        show.innerHTML = "blue"

        if (number2 == 0){
            show.style.color="red"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="green"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="black"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="yellow"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="purple"
		    show.style.fontSize="3em"
        }
    }
    
    else if (number == 2){
        show.innerHTML = "green"

        if (number2 == 0){
            show.style.color="blue"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="red"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="black"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="yellow"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="purple"
		    show.style.fontSize="3em"
        }
    }

    else if (number == 3){
        show.innerHTML = "black"

        if (number2 == 0){
            show.style.color="blue"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="green"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="red"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="yellow"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="purple"
		    show.style.fontSize="3em"
        }
    }

    else if (number == 4){
        show.innerHTML = "yellow"

        if (number2 == 0){
            show.style.color="blue"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="green"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="black"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="red"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="purple"
		    show.style.fontSize="3em"
        }
    }

    else if (number == 5){
        show.innerHTML = "purple"

        if (number2 == 0){
            show.style.color="blue"
		    show.style.fontSize="3em"
        }

        if (number2 == 1){
            show.style.color="green"
		    show.style.fontSize="3em"
        }

        if (number2 == 2){
            show.style.color="black"
		    show.style.fontSize="3em"
        }

        if (number2 == 3){
            show.style.color="yellow"
		    show.style.fontSize="3em"
        }

        if (number2 == 4){
            show.style.color="red"
		    show.style.fontSize="3em"
        }
    }

    counter += 1
    count.innerHTML = counter
}


