import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {

    const data = useLocation();
    console.log("Data from main page", data)



return (
    <div className="imgwrapper">
        <img src={data.state.image} alt="" width={300}
        height={300}
        />
    <div className="details">
            <h4>{data.state.title}</h4>
            <h5>{data.state.catagory}</h5>
            <b>price: {data.state.price}</b>
            <p>rating: {data.state.rating.rate}</p>

            <button className="placeorder"
            onClick={() => {
                axios.post("http://localhost:8000/addProducts",
                    data.state).then(
                        (res) => {alert(res.data)}
                    ).catch();
            }}
            >
                Place Order
            </button>

    </div>
        {/* <h1>This is my ProductDetails</h1> */}

    </div>
)
}

export default ProductDetails;