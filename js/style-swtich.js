const styleSwitchtoggler = document.querySelector(".style-switch-toggler");
styleSwitchtoggler.addEventListener("click",()=>{
    document.querySelector(".style-switch").classList.toggle("open")
}) 

window.addEventListener("scroll", () => {
    const switchBox = document.querySelector(".style-switch");
    if (switchBox.classList.contains("open")) {
        switchBox.classList.remove("open");
    }
});

//theme colors
const alternates = document.querySelectorAll('.alternate-color');

function setActiveStyle(color) {
    alternates.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', true);
        }
    });
}

//background-colors

const dayNight = document.querySelector('.day-night');
const mainContent = document.querySelector('.main-content');
const linkedlncontent = document.querySelector('.linkedln');  // fixed selector

dayNight.addEventListener('click', () => {
    const icon = dayNight.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        mainContent.style.backgroundColor = '#151515';
        if (linkedlncontent) linkedlncontent.style.color = '#ffffff';
    } else {
        mainContent.style.backgroundColor = '#F0FFFF';
        if (linkedlncontent) linkedlncontent.style.color = '#302e4d';
    }
});

window.addEventListener('load', () => {
    const icon = dayNight.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
        mainContent.style.backgroundColor = '#151515';
        if (linkedlncontent) linkedlncontent.style.color = '#ffffff';
    } else {
        icon.classList.add('fa-moon');
        mainContent.style.backgroundColor = '#F0FFFF';
        if (linkedlncontent) linkedlncontent.style.color = '#302e4d';
    }
});



