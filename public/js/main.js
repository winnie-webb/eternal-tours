
const scrollFunctionality = ( () => {
    const top_scroller_btn = document.querySelector(".header__content-button");
    const cards_section = document.querySelector(".section-cards");
    
    top_scroller_btn.onclick = () => {
        cards_section.scrollIntoView({behavior:"smooth"})
    }
})


const initSwiper = ( () => {
    const mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        speed : 1000,
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
           530 :{
            slidesPerGroup : 2,
            slidesPerView : 2
           } ,
           970 : {
            slidesPerGroup : 3,
            slidesPerView : 3
           }
        }
    })
    return;


    
})
initSwiper();