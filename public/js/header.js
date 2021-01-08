const toggleNavbar = 
() => {
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".header__nav__links");
burger.onclick = () => {
    navbar.classList.toggle("navbar-toggle")
}
}

export default toggleNavbar;