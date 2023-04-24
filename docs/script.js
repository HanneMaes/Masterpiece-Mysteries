const debugMode = false;

const paintingWidth = 1300;
const paintingHeight = 1021
const hiddenButtonX1 = 527;
const hiddenButtonY1 = 15;
const hiddenButtonX2 = 729;
const hiddenButtonY2 = 208;

window.onload = function () {

    // Get the artwork div element
    const artworkDiv = document.querySelector('.artwork');

    // Create a new div element for the black square
    const hiddenButton = document.createElement('div');

    // Set the style properties for the black square
    hiddenButton.style.position = 'absolute';
    hiddenButton.style.top = '0';
    hiddenButton.style.left = '0';
    hiddenButton.style.width = '70px'; // Change this value to adjust the size of the square
    hiddenButton.style.height = '70px'; // Change this value to adjust the size of the square
    hiddenButton.style.backgroundColor = 'black';

    if (debugMode) hiddenButton.style.opacity = '0.5';
    else           hiddenButton.style.opacity = '0';
    

    // Set the position of the artwork div to relative
    artworkDiv.style.position = 'relative';

    // Get the image element
    const image = document.getElementById("artworkImage");

    // Set the position of the black square relative to the image
    hiddenButton.style.left = `${(image.offsetWidth - hiddenButton.offsetWidth) * 0.4}px`;
    hiddenButton.style.top = `${(image.offsetHeight - hiddenButton.offsetHeight) * 0.03}px`;

    // Add an event listener to the black square
    hiddenButton.addEventListener('click', () => {
        console.log('found!');
    });

    // Append the black square to the artwork div
    artworkDiv.appendChild(hiddenButton);
};
