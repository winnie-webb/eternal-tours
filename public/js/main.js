const top_scroller_btn = document.querySelector(".header__content-button");
const cards_section = document.querySelector(".section-cards");

top_scroller_btn.onclick = () => {
    cards_section.scrollIntoView({behavior:"smooth"})
}