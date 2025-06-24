import React, { useState } from "react";
import axios from "axios";

function Signup() {
const [name, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setpassword] = useState("");

return (
    <div>
    <div className="loginwrapper">
    <div className="loginsection">
        <h4>Welcome to Sign Up Page</h4>

        <input
        type="text"
        name=""
        id=""
        className="inputfields"
        placeholder="User Name"
        onChange={(e) => {setUserName(e.target.value)}}
        />

        <input
        type="text"
        name=""
        id=""
        className="inputfields"
        placeholder="User Email"
        onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
        type="password"
        name=""
        id=""
        className="inputfields"
        placeholder="password"
        onChange={(e) => {setpassword(e.target.value)}}
        />
        <button onClick={() => {
            axios.post("http://localhost:8000/signup", {name, email, password})
            .then(
                    (res) => {alert(res.data)})
            .catch();
        }} className="loginbtn">
        Sign Up
        </button>
            </div>
        </div>
    </div>
);
}

export default Signup;
