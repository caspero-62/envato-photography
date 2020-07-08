const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// set up text to print, each item in array is new line
const aText =["We craft beautiful experiences that are worth sharing"];

let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines
     
let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents letiable
let iRow; // initialise current row
     
function typewriter() {

    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("container__text");
     
    while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    }
    
    
typewriter();

const scrollTrigger = () => {
    let elements = document.getElementsByClassName('work');
    for (element of elements) {
        let pos = element.getBoundingClientRect().top;
        if (pos < window.innerHeight) {
            element.classList.add('transition');
        } else {
            null
        }
    }
}

window.addEventListener('scroll', scrollTrigger);    

$(window).on('load', function() {
    $(window).scrollTop(0);
});
    