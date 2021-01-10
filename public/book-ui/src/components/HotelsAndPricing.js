import React,{useState,useRef,useEffect} from "react";
function HotelsAndPricing() {
const [price,setPrice] = useState(0);
const [hotel,setHotel] = useState("Select Hotel");
const selectedHotelElement = useRef();
const selectedGroupElement = useRef();
const [hotelsJSON,setHotelsJSON] = useState([]);
useEffect(() => {
fetch("/hotels")
.then(res => res.json())
.then(res => setHotelsJSON(res))
},[])

const urlParsed = new URLSearchParams(window.location.search);
const queryHotel =  urlParsed.get("hotel");

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
    const selectedGroup = selectedGroupElement.current.value;

    const isHotelSelectedValid = selectedHotel !== "Select Hotel";
    const isGroupSelectedValid = selectedGroup === "1 - 4" || selectedGroup === "5 - 9";

    const areOptionsValid = isHotelSelectedValid && isGroupSelectedValid;


    if ( areOptionsValid ){
        hotelsJSON.map(hotel => {
            if(selectedHotel === hotel.name){
            if (selectedGroup === "1 - 4") setPrice(hotel.smallPrice);
                else if (selectedGroup === "5 - 9") setPrice(hotel.largePrice);
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
        <select className="hotels-pricing__select" ref={selectedGroupElement} onChange={controlPricing}>
            <option>Select Group Of Persons</option>
            <option>1 - 4</option>
            <option>5 - 9</option>
            <option>Please Contact Us For Groups Over 10</option>
        </select>
        </div>
        <h2>Price ${price}</h2>

    </section>
)
}
export default HotelsAndPricing;


