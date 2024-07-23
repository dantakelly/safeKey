const theData = [
 'k', 'V', '9', 'd', 'o', ' ', 'G', 'L', '!', '3', 'm', 'Z', '@', 's', 
  'j', '^', '8', 'A', 'g', '>', 'l', 'u', '/', '5', 'x', '|', 'C', 'r', 
  '0', 'f', 'n', 'T', 'Q', '}', '4', ',', 'b', 'h', 'B', 'j', '(', 'z', 
  'U', 'K', 'a', 'W', 'X', '7', ';', 't', 'y', 'R', '{', '6', 'c', 'p', 
  'd', '!', 'e', 'N', 'O', '[', '2', '!', 'F', 'i', '1', 'y', ':', 'Q', 
  'e', 'o', 'p', '(', '~', 'V', 'I', '8', 'Z', 'g', 'D', 'w', 'M', 'r', 
  '\\', 'a', 'k', 't', '>', 'C', '5', 'S', 'A', '/', ' ', 'H', '6', 'R'
];

const theOutputValue = document.querySelector(".data-shows-here")
// 
function getRandomCharacterValues(length) {
    return Array.from({ length: length },
        () => theData[Math.floor(Math.random() * theData.length)]).join('');
}

// When you load the webpage, you will be suggested a 20 character random string
theOutputValue.innerHTML = getRandomCharacterValues(40);
// 

function theValue() { 
    const click10 = document.querySelector(".G10-button")
    const click20 = document.querySelector(".G20-button")
    const click30 = document.querySelector(".G30-button")
    const click40 = document.querySelector(".G40-button")
    const click50 = document.querySelector(".G50-button")
    const reload50 = document.querySelector(".reloadIcon")

    click10.addEventListener("click", () => {
        theOutputValue.innerHTML = getRandomCharacterValues(10);
    });

    click20.addEventListener("click", () => {
        theOutputValue.innerHTML = getRandomCharacterValues(20);
    });

    click30.addEventListener("click", () => {
        theOutputValue.innerHTML = getRandomCharacterValues(30);
    });

    click40.addEventListener("click", () => {
        theOutputValue.innerHTML = getRandomCharacterValues(40);
    });

    // click50.addEventListener("click", () => {
    //     theOutputValue.innerHTML = getRandomCharacterValues(50);
    // });

    reload50.addEventListener("click", () => {
        theOutputValue.innerHTML = getRandomCharacterValues(40);
    });
}
theValue();

// Clipboard to copy
clipBoardIcon = document.querySelector(".clipboardICON")

clipBoardIcon.addEventListener("click", () => { 
    const contentToCopy = theOutputValue.textContent; //textContent is a js element that allows you to copy text in a container, etc...

    navigator.clipboard.writeText(contentToCopy)
        .then(() => {
            alert('Content copied to clipboard');
        })
        .catch(err => {
            alert(err);
        });
})
// 


// copyright year
const getYear = new Date()
const theYear = getYear.getFullYear();

const getYearHTML = document.querySelector(".year")
getYearHTML.innerHTML = theYear; 
// 