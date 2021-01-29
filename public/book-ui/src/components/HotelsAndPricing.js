import React,{useState,useRef,useEffect} from "react";
function HotelsAndPricing(props) {
const {price,setPrice} = props;
const urlParsed = new URLSearchParams(window.location.search);
const queryHotel =  urlParsed.get("hotel");
const queryPlace = urlParsed.get("place");

const [hotel,setHotel] = useState(`Select Your Hotel`);
const selectedHotelElement = useRef();
const checkedInput1_4 = useRef();
const checkedInput5_9 = useRef();
const [hotelsJSON,setHotelsJSON] = useState([]);


useEffect(() => {
fetch("/hotels")
.then(res => res.json())
.then(res => {
    let filterHotels;
    if(queryPlace){
    setHotel(`Select Hotel ${queryPlace}`);

    switch (queryPlace){
        case "montego bay" : 
        filterHotels = hotel => hotel.place === "montego bay";
        break;

        case "negril" : 
        filterHotels = hotel => hotel.place === "negril" ;
        break;

        case "ocho rios" : 
        filterHotels = hotel => hotel.place === "ocho rios" ;
        break;

        case "falmoth" : 
        filterHotels = hotel => hotel.place === "falmoth" ;
        break;

        case "lucea" : 
        filterHotels = hotel => hotel.place === "lucea" ;
        break;
    }

}
    else {
        filterHotels = hotel => hotel;
    }
    const filter = res.filter(hotel => filterHotels(hotel));
    setHotelsJSON(filter);
})
},[])



function checkQueryForHotel () {
    hotelsJSON.map(hotel => {
        if(queryHotel === hotel.name){
        setHotel(hotel.name)
        return hotel;
        }
    })
}

useEffect(checkQueryForHotel,[hotelsJSON,queryHotel])

function controlPricing() {

    const selectedHotel = selectedHotelElement.current.value;
    const input1_4 = checkedInput1_4.current.checked;
    const input5_9 = checkedInput5_9.current.checked;
    const isHotelSelectedValid = !selectedHotel.includes("Select");
    const isGroupSelectedValid = input1_4 || input5_9;

    const areOptionsValid = isHotelSelectedValid && isGroupSelectedValid;


    if ( areOptionsValid ){
        hotelsJSON.map(hotel => {
        if(selectedHotel === hotel.name){
            if (input1_4) setPrice(hotel.smallPrice);
            else if (input5_9) setPrice(hotel.smallPrice * 1.5);
            else setPrice(0)
            return hotel;
            }
          
        })
    }
    else setPrice(0);
}
return (
    <section className="section-hotels-pricing">
        <div className="hotels-pricing">
        <select className="hotels-pricing__select" ref={selectedHotelElement} onChange={controlPricing}>
            <option>{hotel}</option>
            {hotelsJSON.map((hotel,index) => <option key={index}>{hotel.name}</option>)}
        </select>
        <div className="hotels-pricing__group">
            <h3>Select Group Of Persons</h3>
            <div className="hotels-pricing__group__options">
            <input onChange = {controlPricing} ref={checkedInput1_4} id="1_4__option" type="radio" name="group-selection" />
            <label for="1_4__option">1 - 4</label>
            </div>

            <div className="hotels-pricing__group__options">
            <input onChange = {controlPricing} ref={checkedInput5_9}  id="5_9__option" type="radio" name="group-selection"/>
            <label for="5_9__option">5 - 9</label>
            </div>

        </div>
        </div>
        <h2>Price ${price}</h2>

    </section>
)
}
export default HotelsAndPricing;


