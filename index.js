let linkContainer = document.querySelector('.nav-list');
let links = linkContainer.getElementsByClassName('nav-link');
let navClose = document.querySelector('.menu-close')
let navOpen = document.querySelector('.menu-open');
let body = document.querySelector('body')


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('nav-active')
    current[0].className = current[0].className.replace(' nav-active', '')
    this.className += ' nav-active'
  })
}

navOpen.addEventListener('click', ()=> {
  console.log('clicked');
  linkContainer.classList.add('nav-open');
  navOpen.style.opacity = 0;
  body.style.position = 'fixed';
})

navClose.addEventListener('click', () => {
  console.log('clicked')
  linkContainer.classList.remove('nav-open')
  navOpen.style.opacity = 1;
  body.style.position = 'static'
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElement = document.querySelectorAll('section')
hiddenElement.forEach((el) => observer.observe(el))