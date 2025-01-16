import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import newbg from "../Images/newbg.mp4";
import img from "../Images/sign.jpg";
import "../Signin.css";
const Sign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const videoref = useRef(null);

  useEffect(() => {
    if (videoref.current) {
      videoref.current.playbackRate = 0.5;
    }
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      email: email,
      password: password,
    };
    console.log(formData);
    navigate("/login", { state: formData });
  };

  return (
    <div className="video-container" style={{ position: "relative" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={newbg}
        type="video/mp4"
        className="background-video"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      ></video>
      <div
        className="container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the form
          backgroundImage: `linear-gradient(
          to bottom right,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.5)
        ), url(${img})`, // Add a gradient overlay
          backgroundSize: "cover", // Make the image cover the entire container
          backgroundPosition: "center", // Center the image
          filter: "brightness(1.2)", // Increase brightness (default is 1)
          height: "500px", // Slightly taller for aesthetic spacing
          width: "450px",
          border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
          color: "white",
          fontSize: "larger",
          fontWeight: "600",
          padding: "30px",
          borderRadius: "12px", // More rounded corners
          zIndex: 2,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.5)", // Deeper shadow
          backdropFilter: "blur(10px)", // Glassmorphism effect
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "5px" , color:"white" }}>Sign-in Form</h1>
        <form action="/login" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3" style={{ color: "white" }}>
            <label htmlFor="username" className="form-label"
            style={{color:"white"}}
            >
              UserName:
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="username"
              placeholder="Enter username here"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />

            <label htmlFor="email" className="form-label"
            style={{color:"white"}}>
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pwd" className="form-label"
            style={{color:"white"}}
            >
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              backgroundColor: "rgba(0, 123, 255, 0.8)",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 123, 255, 1)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgba(0, 123, 255, 0.8)")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>




  );
};

export default Sign;
