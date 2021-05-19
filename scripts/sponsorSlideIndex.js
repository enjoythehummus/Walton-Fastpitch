// Sponsor Carousel

const sponsorTile = document.getElementById('sponsor-tile-index');

const sponsorImages = [
    './images/sponsors/ansley_real_estate.jpg',
    './images/sponsors/has_foundation.jpg',
    './images/sponsors/hummel_landscape_supply.jpg',
    './images/sponsors/learning_experience.jpg',
    './images/sponsors/platinum_circle_technologies.jpg',
    './images/sponsors/sanitizer_llc.jpg'
];

const sponsorLinks = [
    'https://ansleyre.com/',
    'http://hasfoundation.org/',
    'https://www.hummellandscapes.com/',
    'https://thelearningexperience.com/',
    'https://www.plattechnologies.com/',
    'https://www.usasanitizerllc.com/'
];

var i = Math.floor(Math.random() * sponsorLinks.length);
var timeout = setTimeout(right, 4000);

function right() {
    i = (i + 1) % sponsorImages.length;

    clearTimeout(timeout);
    changeImage();
}

function changeImage() {
    sponsorTile.innerHTML = '<p>Our sponsors: </p>';
    sponsorTile.innerHTML += '<a href=' + sponsorLinks[i] + '> <img src=' + sponsorImages[i] + '> </a>';
    timeout = setTimeout(right, 4000);
}

changeImage();