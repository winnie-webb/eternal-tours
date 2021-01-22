import toggleNavbar from "./header.js";
const scrollFunctionality = (() => {
    const checkPricingsBtns = document.querySelectorAll(".card-pricings-btn");
    const hotelsSection = document.querySelector(".right-arrow");
    const hotels = document.querySelectorAll(".hotels__hotel");
    function scrollToHotels(){
        hotelsSection.scrollIntoView({behavior:"smooth"})
    }
    for(let i = 0; i < 3; i++){
        setTimeout(() => hotels[i].click(), 1000)
    }

    checkPricingsBtns.forEach(btn => {
        btn.addEventListener('click',() => {
            setTimeout(() => hotels[0].click(), 1000)
            setTimeout(() => hotels[0].click(), 2000)
            scrollToHotels()
        } )
    })
})

const hotelHideAndShowFuntionality = ( () => {

    const hotelsContainer = document.querySelectorAll(".hotels__hotel");
    const hotelsDescription = document.querySelectorAll(".hotels__hotel__description");
    const rightArrows = document.querySelectorAll(".right-arrow");

    hotelsContainer.forEach((hotelContainer,index) => {
        hotelContainer.addEventListener("click",e => {
            hotelContainer.classList.toggle("hotels-height");
            hotelsDescription[index].classList.toggle("hotels-hide-description");
            // Stop Propagation for the content inside the cards 
            hotelsDescription[index].addEventListener("click",e =>{
                e.stopPropagation()
            } )
            rightArrows[index].classList.toggle("down-arrow");
        })
            
    })
})

scrollFunctionality();
hotelHideAndShowFuntionality();
toggleNavbar();