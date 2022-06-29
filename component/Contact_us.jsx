import React from "react";
const Contact_us = () => {
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
              Contact Us
            </h5>
            <p style={{ color: "black" }} className="card-text lead fs-2">
              {" "}
              mobile No: 9560915909{" "}
            </p>
            <a class="btn" href="mailto:herboquest@gmail.com">
              Mail Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact_us;
