const chatbox = document.querySelector('.chatbox')
const active = document.getElementById('img1')
// setInterval(function () {
//     $('.puffIn .magictime').toggleClass('puffOut');
// }, 50);
function toggle() {
    // Audio on Click
    var audio = new Audio("Beep.mp3");
    audio.play();

    // Display Or Hide Chatbox
    if (chatbox.style.display == "none") {
        chatbox.style.display = "block";
        active.classList.add('animate');
    }
    else {
        active.classList.remove('animate')
        chatbox.style.display = "none";
    }

}

