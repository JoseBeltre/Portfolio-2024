//Just variables
const navbar = document.querySelector('nav');
const menuCheckbox = document.querySelector('nav input');
const links = document.querySelectorAll('nav div ul li a');

//To avoid problems with vh on mobile
const setHeightHome = () => {
    document.getElementById("home").style.height = window.innerHeight + "px";
}
setHeightHome();

//To style de navbar when users scroll down on desktop
window.addEventListener('scroll', () => {
     navbar.classList.toggle('at-top', window.scrollY > 0 && window.innerWidth > 640);
})

//To close navbar each time users click on a link on mobile devices
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 640) {
            menuCheckbox.checked = false;
        }
    })
});

//Array with all the elements to animate
let toAnimate = document.querySelectorAll('.to-animate');


//Creating an Intersection Observer instance
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //Applying the class "animate" id the element is on the screen 
            entry.target.classList.add('animate');
            
        }
    })
});

//Using the observer
toAnimate.forEach(e => {
    observer.observe(e);
});

