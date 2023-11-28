let mainmenu = document.getElementById('mainmenu')
let menuCategories = document.getElementById('menu-categories')

menuCategories.style.display = 'none'

function hide()
{
    menuCategories.style.display = 'block'
    mainmenu.style.display = 'none'
}

function show()
{
    menuCategories.style.display = 'none'
    mainmenu.style.display = 'block'
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(offset) {
    showSlide(currentSlide + offset);
}

showSlide(currentSlide);
