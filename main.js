
var terminal = document.getElementById('terminal');
var editor = new MatrixEditor(terminal);

var audio = [
    new Audio('./assets/media/keypress1.mp3'),
    new Audio('./assets/media/keypress2.mp3'),
    new Audio('./assets/media/keypress3.mp3'),
    new Audio('./assets/media/keypress4.mp3'),
], i = 0;

function keyDownAudio() {
    audio[(i += parseInt(Math.random() * 3)) % 4].cloneNode(true).play();
}

var children = Array.prototype.slice.apply(document.getElementById('terminal').children);

terminal.addEventListener("keydown", keyDownAudio);

for (var j = 0; j < children.length; j++) {
    setTimeout(function (k) {
        children[k].setAttribute('class', 'typewriter');
        keyDownAudio();
    }.bind(null, j), j * 50);
    children[j].setAttribute('class', 'awaiting');
}

function start() {
    var banner = document.getElementById('banner');
    banner.parentElement.removeChild(banner);
    requestFullScreen(document.body);
}


function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function requestFullScreen(elem) {
    if (elem.requestFullScreen) {
        elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

