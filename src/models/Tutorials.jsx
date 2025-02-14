import React from "react";
import "./Tutorials.css";
import tut from "../Images/tut.jpg"
const Tutorials = () => {
  return (
    <>
   <div
         className="background"
         style={{
           backgroundImage: `url(${tut})`, // Use the imported bg image here
           backgroundSize: "cover",
           backgroundPosition: "center",
           height: "100%",
           width: "100%",
           filter:" brightness(80%)",
           color: "black", // Change text color to black
         }}
       >



        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "25px",
          }}
        >
          Start Your{" "}
          <span
            style={{
              backgroundColor: " #ff2121b8",
              color: "white",
              /* border: 2px solid; */

              borderRadius: "8px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Coding
          </span>{" "}
          Journey for Free
        </h1>
        <div className="first" style={{ display: "flex", margin: "0px 30px" }}>
          <div
            className="card"
            style={{ width: "3000px", color: "white", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/HcOc7P5BMi4?si=jO1_XsY1t3ZEy3__"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                HTML Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of HTML and start creating web pages! Learn to
                structure content with headings, images, links, and more in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/HcOc7P5BMi4"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/ESnrn1kAD4E?si=Zv5jvmGjLki2t1E4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                CSS Tutorials for Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of CSS and start styling your web pages! Learn
                to design layouts, colors, and more in this beginner-friendly
                guide.
              </p>
              <a
                href="https://youtu.be/ESnrn1kAD4E"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/W6NZfCO5SIk?si=jbJeW7NQTYXy4on1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                JavaScript Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of JavaScript and start building dynamic web
                pages! Learn to create interactive content with this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/W6NZfCO5SIk"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          className="tutorials"
          style={{ display: "flex", margin: "0px 30px" }}
        >
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/eIrMbAQSU34?si=8gTFWdCGmOH-1-ke"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Java Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of Java and start building powerful
                applications! Learn programming concepts and syntax in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/eIrMbAQSU34"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/e7sAf4SbS_g?si=f0zClJKqzG_COTqm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                C++ Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of C++ and start creating efficient programs!
                Learn core concepts and syntax in this beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/e7sAf4SbS_g"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/L5sZ6WgOnj0?si=AqBsa2xryUcPiGnw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Python Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of Python and start building versatile
                applications! Learn programming concepts and syntax in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/L5sZ6WgOnj0"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div
          className="tutorials"
          style={{ display: "flex", margin: "0px 30px" }}
        >
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/BLl32FvcdVM?si=l8IcwuEt0ixxK6N3"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Node.js Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of Node.js and start building fast, scalable
                server-side applications! Learn core concepts in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/BLl32FvcdVM"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/0riHps91AzE?si=lNkZVFQW5A4VYlyt"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                React.js Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of React.js and start creating interactive web
                applications! Learn components and state management in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/0riHps91AzE"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "3000px", marginRight: "30px" }}
          >
            <div className="card-body">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/SuLiu5AK9Ps?si=Y7iBZAAiqGWkl1i3"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
              <h5
                className="card-title"
                style={{
                  width: "3000px",
                  color: "white",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                C# Tutorials For Begginers
              </h5>
              <p
                className="card-text"
                style={{
                  color: "white",

                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Master the basics of C# and start developing robust
                applications! Learn programming concepts and syntax in this
                beginner-friendly guide.
              </p>
              <a
                href="https://youtu.be/SuLiu5AK9Ps"
                className="btn btn-primary"
                aria-label="Learn more about the tutorial"
                style={{ backgroundColor: "#3337a7", color: "white" }}
              >
                Check it out !
              </a>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
      
    </>
  );
};

export default Tutorials;
