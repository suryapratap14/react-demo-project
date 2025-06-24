import React, { useState } from "react"; // Import file
import axios from "axios";
// import { response } from "express";


function Login() // add js function
{
    const [designation, setDesignation] = useState("SDE-1");

    console.log("initial designation", designation);

    const [UserName, setUserName] = useState("");

    const [password, setpassword] = useState("");

    return (
        <div className="loginwrapper">

            <div className="loginsection">

                <h4>Welcome to Login Page</h4>


                <input type="text" name="" id="" className="inputfields" placeholder="UserName"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <input type="password" name="" id="" className="inputfields" placeholder="password"
                    onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                />
                <button onClick={() => {
                    axios.post("http://localhost:8000/login", {
                        email: UserName,
                        password: password,
                    }).then((response)=>{
                        if(response.data === "Success"){
                            alert("valid")
                            window.location.href="/product"
                        }
                        else {
                            alert(response?.data)
                        }
                    }).catch();
                }}
                    className="loginbtn"
                >Login</button>

            </div>
        </div>
    );
}
// onClick == event listner

export default Login;
