import React from "react";

const Slides = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1: Learn Programming */}
          <div className="carousel-item active">
            <img
              src="https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg"
              className="d-block w-100 responsive-img"
              alt="Learn Programming"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Learn Programming</h3>
              <p>Step-by-step tutorials to master coding languages.</p>
            </div>
          </div>

          {/* Slide 2: Java Tutorials */}
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1663091635973-dd5b3bb9f442?q=80&w=870&auto=mat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 responsive-img"
              alt="Java Tutorials"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Java Made Easy</h3>
              <p>Comprehensive guides for object-oriented programming.</p>
            </div>
          </div>

          {/* Slide 3: Python Tutorials */}
          <div className="carousel-item">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg"
              className="d-block w-100 responsive-img"
              alt="Python Tutorials"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Python Simplified</h3>
              <p>From basics to advanced machine learning projects.</p>
            </div>
          </div>

          {/* Slide 4: Web Development */}
          <div className="carousel-item">
            <image
              src="https://t4.ftcdn.net/jpg/09/41/54/21/360_F_941542183_jY7B6j8W1AibG5B5y6or05urYeyWX0K6.jpg"
              className="d-block w-100 responsive-img"
              alt="Web Development"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Build Websites</h3>
              <p>HTML, CSS, JavaScript, and frameworks like React.</p>
            </div>
          </div>

          {/* Slide 5: Explore Coding Languages */}
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/09/85/22/34/360_F_985223499_bJkeZ1CfMWMrQ1QtzGguwxLZSjXiFfe3.jpg"
              className="d-block w-100 responsive-img"
              alt="Explore Coding Languages"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Explore Coding Languages</h3>
              <p>Dive into C++, JavaScript, and more.</p>
            </div>
          </div>

          {/* Slide 6: Get Coding Solutions */}
          <div className="carousel-item">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-d-render-of-a-coder-programmer-typing-code-on-desktop-computer-image_3854485.jpg"
              className="d-block w-100 responsive-img"
              alt="Get Coding Solutions"
            />
            <div className="carousel-caption">
              <h3 style={{ color: "#fff" }}>Get Coding Solutions</h3>
              <p>Find pre-built codes and solve real-world problems.</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default Slides;
