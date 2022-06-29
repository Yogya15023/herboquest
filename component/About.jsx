import React from "react";
const About = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white boder-0">
        <img
          src="/assets/bg_about.png"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5
              style={{ color: "black" }}
              className="card-title display-3 fw-bold mb-0"
            >
              About Us
            </h5>
            <p style={{ color: "black" }} className="card-text lead fs-2">
              HERBOQUEST is an all-organic brand with an extensive skincare,
              haircare, bodycare range and essential oils.
            </p>

            <p style={{ color: "black" }} className="card-text lead fs-2">
              Our brand’s philosophy is rooted in crafting
            </p>
            <p style={{ color: "black" }} className="card-text lead fs-2">
              products that are organic, safe and offer long-term benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
