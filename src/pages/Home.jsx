import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="home">
      <h2>Welcome Home Page !</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
