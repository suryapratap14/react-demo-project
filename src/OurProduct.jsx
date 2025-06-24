import React, { useState, useEffect } from "react"; // useEffect is important
import axios from "axios";
// want to store some data in a variable then use useState variable
import { useNavigate } from 'react-router-dom';

function OurProduct() {

    const [productList, setproductList] = useState([]); // [] => Set initial value Empty Array
    console.log("Value Stored in Varible productList", productList);

    const navigateTo = useNavigate();
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((apiData) => {
                setproductList(apiData.data)

                // console.log("data from server",apiData.data)
            }
            ).catch()
    }, []);


    return (
        <div>
            <div className="productContainer">
                {
                    productList.map((ele) => {
                        return (
                            <div className="productCart">
                                {/* <p>{ele.description}</p> */}
                                <img src={ele.image} alt="" width={100} height={100} />
                                <p>{ele.title.slice(0, 50) + "..."}</p>
                                <p>Offer Price : {ele.price}</p>

                                <span className="viewmore"
                                    onClick={() => {
                                        navigateTo("/productDetails", {
                                            state: ele,
                                        });
                                    }}
                                >View More</span>

                                <button
                                    onClick={() => {
                                        navigateTo("/productdetails", {
                                            state: ele
                                        })
                                    }}
                                    className="buynow">Buy Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default OurProduct;