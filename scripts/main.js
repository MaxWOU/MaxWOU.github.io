$('.menu .item').tab();


var what_page = document.getElementById('homepage');

var captionLength = 0;
var caption = '';

$(document).ready(function () {
    setInterval('cursorAnimation()', 600);
    captionEl = $('#caption');

    //if the page is homepage it'll show my First Name
    if (what_page != null)
    {
        caption = "Maksim Stoyanov";
    } else // else show Projects
    {
        caption = "Projects";
    }
   
    type();
});


function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) {
        setTimeout('type()', 220);
    } else {
        captionLength = 0;
        caption = '';
    }
}


function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


