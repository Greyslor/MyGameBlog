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