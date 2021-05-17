// Sponsor Carousel

const sponsorTile = document.getElementById('sponsor-tile');

const sponsorImages = [
    '/images/sponsors/ansley_real_estate.jpg',
    '/images/sponsors/has_foundation.jpg',
    '/images/sponsors/hummel_landscape_supply.jpg',
    '/images/sponsors/learning_experience.jpg',
    '/images/sponsors/platinum_circle_technologies.jpg',
    '/images/sponsors/sanitizer_llc.jpg'
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


// Cookies for page location

function getCookie(cName) {
    var name = cName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie() {
    var user = getCookie("username");
    if(user != "" && user != null) {
        // start webpage at header element
    } else {
        setCookie("username", randomCookie(), )
    }
}

function randomCookie() {
  return (Math.random() * 100) * (Math.random() * 10) + (Math.random() * 100);
}


// Pin nav to top, extend, show walton fast pitch and logo  left side
const body = document.querySelector('body');
const nav = document.querySelector('.nav-bar');
const navOffsetTop = nav.navOffsetTop;

function fixNav() {
  if(window.scrollY >= navOffsetTop) {
      body.classList.add('fixed-nav');
      body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
      body.classList.remove('fixed-nav');
      body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav)