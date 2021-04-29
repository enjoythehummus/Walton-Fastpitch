const sponsorTile = document.getElementById('sponsorTile')

const sponsorImages = [
    'images/sponsors/ansley_real_estate.jpg',
    'images/sponsors/has_foundation.jpg',
    'images/sponsors/hummel_landscape_supply.jpg',
    'images/sponsors/learning_experience.jpg',
    'images/sponsors/platinum_circle_technologies.jpg',
    'images/sponsors/sanitizer_llc.jpg'
];

const sponsorLinks = [
    'https://ansleyre.com/',
    'http://hasfoundation.org/',
    'https://www.hummellandscapes.com/',
    'https://thelearningexperience.com/',
    'https://www.plattechnologies.com/',
    'https://www.usasanitizerllc.com/'
];

var i = 0;
var timeout = setTimeout(right, 2000);

function right() {
    i = (i + 1) % sponsorImages.length;

    clearTimeout(timeout);
    changeImage();
}

function changeImage() {
    sponsorTile.innerHTML = '';
    sponsorTile.innerHTML += '<a href=' + sponsorLinks[i] + '> <img src=' + sponsorImages[i] + '> </a>';
    timeout = setTimeout(right, 2000);
}

changeImage();