import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white boder-0">
        <img
          src="/assets/bg.jpeg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-0">
              SUMMER NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL PRODUCTS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
