
const scrollFunctionality = (() => {
    const top_scroller_btn = document.querySelector(".header__content-button");
    const hotels_section = document.querySelector(".hotels");
    
    top_scroller_btn.onclick = () => {
        hotels_section.scrollIntoView({behavior:"smooth"})
    }    
})

const hotelHideAndShowFuntionality = ( () => {

    const hotelsContainer = document.querySelectorAll(".hotels__hotel");
    const hotelsDescription = document.querySelectorAll(".hotels__hotel__description");
    const rightArrows = document.querySelectorAll(".right-arrow");
    
    hotelsContainer.forEach((hotelContainer,index) => {
        // rightArrow[index].style.clipPath = "polygon(49% 92%, 10% 36%, 89% 35%)"
        hotelContainer.addEventListener("click",() => {
            
            hotelContainer.classList.toggle("hotels-height");
            hotelsDescription[index].classList.toggle("hotels-hide-description");

            rightArrows[index].classList.toggle("down-arrow");
            
        })
            
    })
})
scrollFunctionality();
hotelHideAndShowFuntionality();