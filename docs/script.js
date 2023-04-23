paintingWidth = 1300;
paintingHeight = 1021

hiddenButtonX1 = 527;
hiddenButtonY1 = 15;
hiddenButtonX2 = 729;
hiddenButtonY2 = 208;

window.onload = function () {

    // Get the artwork div element
    const artworkDiv = document.querySelector('.artwork');

    // Create a new div element for the black square
    const hiddenButton = document.createElement('div');

    // Set the style properties for the black square
    hiddenButton.style.position = 'absolute';
    hiddenButton.style.top = '0';
    hiddenButton.style.left = '0';
    hiddenButton.style.width = '100px'; // Change this value to adjust the size of the square
    hiddenButton.style.height = '100px'; // Change this value to adjust the size of the square
    hiddenButton.style.backgroundColor = 'black';
    // hiddenButton.style.opacity = '0'; // Add some transparency to make the image visible
    hiddenButton.style.opacity = '0.5'; // Add some transparency to make the image visible

    // Set the position of the artwork div to relative
    artworkDiv.style.position = 'relative';

    // Get the image element
    const image = document.getElementById("artworkImage");

    // Set the position of the black square relative to the image
    hiddenButton.style.left = `${(image.offsetWidth - hiddenButton.offsetWidth) * 1}px`;
    hiddenButton.style.top = `${(image.offsetHeight - hiddenButton.offsetHeight) * 1}px`;

    // Add an event listener to the black square
    hiddenButton.addEventListener('click', () => {
        console.log('found!');
    });

    // Append the black square to the artwork div
    artworkDiv.appendChild(hiddenButton);
};
