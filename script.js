const chatbox = document.querySelector('.chatbox')
const animate = document.getElementById('animateButton')

function toggle() {

    // Audio on Click
    // var audio = new Audio("Beep.mp3");
    var audio = new Audio("bubble.mp3");
    // var audio = new Audio("water.mp3");
    audio.play();

    // Display Or Hide Chatbox

    // $('.puffIn').toggleClass('puffOut');
    if (chatbox.style.display == "none") {
        chatbox.style.display = "block";
        animate.classList.add('animate');
    }
    else {
        animate.classList.remove('animate')
        chatbox.style.display = "none";
    }

}

// Typing feature on keypress
const demo = document.getElementById('demo')
$(document).ready(function () {
    $("input").keydown(function () {
        console.log('pressed down')
        demo.innerHTML = "Typing..."
        demo.style.display = "block"

    });
});

$(document).ready(function () {
    $("input").keyup(function () {
        console.log('pressed up')
        demo.innerHTML = ""
        demo.style.display = "none"
        // demo.classList.add = "user"
    });
});

