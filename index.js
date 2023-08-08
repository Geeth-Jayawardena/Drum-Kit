// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("Clicked")
// }

// document.querySelector("button").addEventListener("click", function () {
//     alert("Clicked")
// });


// document.querySelectorAll("button")[0].addEventListener("click", function () {
//     alert("Clicked")
// });

var numberOfDrumButton = document.querySelectorAll(".drum").length;

// Check click button
for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        keySoundMaker(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}


//Check keyboard input and call sound make function
document.addEventListener("keypress", function (event) {
    keySoundMaker(event.key);
    buttonAnimation(event.key);
});

//Sound maker
function keySoundMaker(key) {

    var audio;

    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3")
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3")
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3")
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3")
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3")
            break;

        default:
            break;
    }

    audio.play();
}

//Animation Method
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    // Set new class
    activeButton.classList.add("pressed");

    // After 100ms remove new class
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)

}



// function add(numb1, numb2) {
//     return numb1 + numb2;
// }
// function subtract(numb1, numb2) {
//     return numb1 - numb2;
// }
// function multiply(numb1, numb2) {
//     return numb1 * numb2;
// }
// function divided(numb1, numb2) {
//     return numb1 / numb2;
// }

// function calculator(numb1, numb2, operator) {
//     return operator(numb1, numb2);
//  }



// Call back function understand
// function anotherAddEventListner(typeOfEvent, callback) {

//     var eventThatHappen = {
//         eventType : "keyPress",
//         key : "p",
//         durationOfKeyPress : 2
//     }

//     if (eventThatHappen.eventType === typeOfEvent) {
//         callback(eventThatHappen);
//     }
// }

// anotherAddEventListner("keyPress", function(event){
//     alert(event.key)
// });
