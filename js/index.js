const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

const main = document.querySelector('main-content');
const contactBlock = document.querySelector('contact');
const footerBar = document.querySelector('footer');

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//cta block
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const butt = document.querySelector('button');
butt.textContent = siteContent['cta']['button'];

//nav text
const navText = document.querySelectorAll('nav a');
console.log(navText);
navText.forEach(ele => (ele.style.color = 'green'));
navText[0].textContent = siteContent.nav['nav-item-1'];
navText[1].textContent = siteContent.nav['nav-item-2'];
navText[2].textContent = siteContent.nav['nav-item-3'];
navText[3].textContent = siteContent.nav['nav-item-4'];
navText[4].textContent = siteContent.nav['nav-item-5'];
navText[5].textContent = siteContent.nav['nav-item-6'];

const navBar_a = document.querySelector('nav');
const newNavF = document.createElement('a');
newNavF.setAttribute('href', 'http://lambdaschool.com');
newNavF.textContent = 'Me First';
newNavF = navBar_a.prepend(newNavF);

const navBar_b = document.querySelector('nav');
// const newNavL = documenet.createElement('a');
// newNavL.setAttribute('href', 'http://lambdaschool.com');
newNavL.textContent = 'Me Last';
navBar_b.appendChild(newNavL);

//nav bar
// const navBar = document.querySelector('nav');
// navBar.style.color = 'green';
// console.log(navBar);
// navBar.style.display = 'flex';
// navBar.style.justifyContent = 'space-between';

//main text Headers
const mainTextHead = document.getElementsByTagName('h4');
mainTextHead[0].textContent = siteContent['main-content']['features-h4'];
mainTextHead[1].textContent = siteContent['main-content']['about-h4'];
mainTextHead[2].textContent = siteContent['main-content']['services-h4'];
mainTextHead[3].textContent = siteContent['main-content']['product-h4'];
mainTextHead[4].textContent = siteContent['main-content']['vision-h4'];
mainTextHead[5].textContent = siteContent.contact['contact-h4'];
// console.log(mainTextHead);
//main text body
const mainTextBod = document.getElementsByTagName('p');
mainTextBod[0].textContent = siteContent['main-content']['features-content'];
mainTextBod[1].textContent = siteContent['main-content']['about-content'];
mainTextBod[2].textContent = siteContent['main-content']['services-content'];
mainTextBod[3].textContent = siteContent['main-content']['product-content'];
mainTextBod[4].textContent = siteContent['main-content']['vision-content'];
mainTextBod[5].textContent = siteContent.contact.address;
mainTextBod[6].textContent = siteContent.contact.phone;
mainTextBod[7].textContent = siteContent.contact.email;
mainTextBod[8].textContent = siteContent.footer.copyright;

//contact
const cMe = document.querySelector('.contact');
cMe.textContent;
// console.log(cMe);

//main styles
// const mainCon = document.querySelector('.main-content');
// mainCon.style.margin = '75px 0 35px 0';
// mainCon.style.padding = '35px 0';
// mainCon.style.fontSize = '16px';
// mainCon.style.lineHeight = '18px';

// const topCon = document.querySelector('.top-content');
// topCon.style.display = 'flex';
// topCon.style.justifyContent = 'space-around';
// console.log(topCon);

// const bottCon = document.querySelector('.bottom-content');
// bottCon.style.display = 'flex';
// bottCon.style.justifyContent = 'space-around';

// console.log(bottCon);
