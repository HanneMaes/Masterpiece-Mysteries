////////////////////////////////////////////////////////////////////////////////
// SETTINGS
////////////////////////////////////////////////////////////////////////////////

const debugMode = false;

const data = [
    { id1: 100, id2: 200, "tag with spaces": 300 },
    { id1: 100, id2: 200, "tag with spaces": 300}
]

////////////////////////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
/*
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
    artworkDiv.appendChild(hiddenButton); */

    var artist = "Vincent van Gogh";
    var artwork = "Bedroom in Arles";
    var image = "Vincent van Gogh/Bedroom in Arles.png";
    var detail = "Vincent van Gogh/01.png";

    createPage(image, detail, artist, artwork);
};

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function createPage(img, det, arti, artw) {
    document.getElementsByTagName('body')[0].innerHTML = `
        <!-- detail -->
        <div class="panel detail" data-aos="fade-down" data-aos-delay="1000">
            <div>
                ` + artw + `<br>
                <small>` + arti + `</small>
            </div>
            <img src="images/` + det + `">
            <div></div>
        </div>
        
        <!-- artwork -->
        <div class="panel artwork"  data-aos="fade-up">
            <img id="artworkImage" src="images/` + img + `">
    </div>
    `; 
}