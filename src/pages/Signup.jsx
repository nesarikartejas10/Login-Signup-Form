import React, { useState } from "react";
import main from "../assets/main.jpg";

import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(userDetail);

  const navigate = useNavigate();

  const handleInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Please Enter Detail!");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup Successfully !");
      navigate("/login");
    }
  };

  return (
    <div className="main-page">
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <p>Sign Up</p>
        </div>
        <div className="account">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name..."
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password..."
            onChange={handleInput}
          />
          <p>
            Already have an account ? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
        <button>SignUp</button>
      </form>
      <div>
        <img src={main} alt="image" />
      </div>
    </div>
  );
};

export default Signup;
