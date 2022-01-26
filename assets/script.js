var drumButton = document.querySelectorAll(".drum");
var numberOfDrumButtons = drumButton.length;

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("assets/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            break;
    }
}

for (let i = 0; i < numberOfDrumButtons; i++) {
    drumButton[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function (event){
    playSound(event.key);
    buttonAnnimation(event.key);
})


function buttonAnnimation(key){
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100)
}