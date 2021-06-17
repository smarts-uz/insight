const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// ---------------------------------------------

const navLink = document.querySelectorAll('.nav__link');

function linkActive() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkActive));

// ---------------------------------------------

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ---------------------------------------------

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY !== 0) header.classList.add('active-header'); else header.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)

// ---------------------------------------------

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ---------------------------------------------

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

// ---------------------------------------------

const sr = ScrollReveal({
    distance: '40px',
    duration: 1000,
    reset: true,
});


sr.reveal(`.home__data, 
           .home__img, 
           .l-header`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.programs__content, 
           .course__data, 
           .section-title, 
           .tariffs__content,
           .forms-title`, {
    origin: 'top',
    interval: 100
})

sr.reveal(`.share__img, .speakers__content, .form_name`, {
    origin: 'left'
})

sr.reveal(`.share__data, .speakers__img, .form_number`, {
    origin: 'right'
})

const ScriptURL = ''
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(ScriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for connection us...!"))
        .catch(error => console.error('Error!', error.message))
})







