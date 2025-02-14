import React, { useState } from "react";
import code from "../Images/code.mp4";
import { useLocation } from "react-router-dom";
import loginbg from "../Images/loginbg.jpg";

const Login = ({ formData }) => {
  const location = useLocation();
  const { username, email, password } = location.state || {};
  console.log({ username, email, password });

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      {/* Video Background */}
      <div
        className="video-container"
        style={{
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src={code}
          type="video/mp4"
          className="background-video"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        ></video>

        {/* Login Form */}
        <div
  className="container"
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: `linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5)
    ), url(${loginbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(1.2)",
    height: "500px",
    width: "450px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    padding: "30px",
    borderRadius: "12px",
    zIndex: 2,
    boxShadow: "0px 8px 20px rgba(0,0,0,0.5)",
    backdropFilter: "blur(10px)",
    display: "flex", // Flexbox for centering
    flexDirection: "column", // Align items vertically
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  }}
>
  <h1
    style={{
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "38px",
      color: "white",
      fontWeight: "bold",
    }}
  >
    Login
  </h1>
  <form action="/home" style={{ width: "100%" }}>
    <div className="mb-3 mt-3">
      <label
        htmlFor="email"
        className="form-label"
        style={{ fontWeight: "500", color: "white" }}
      >
        UserName:
      </label>
      <input
        type="text"
        className="form-control mb-2"
        id="email"
        placeholder="Enter username here"
        name="email"
        onChange={(e) => setName(e.target.value)}
        style={{
          borderRadius: "8px",
          padding: "10px",
          border: "1px solid rgba(0, 123, 255, 0.3)",
          color: "white",
          width: "100%",
        }}
      />
    </div>
    <div className="mb-3 mt-3">
      <label
        htmlFor="pwd"
        className="form-label"
        style={{ fontWeight: "500", color: "white" }}
      >
        Password:
      </label>
      <input
        type="password"
        className="form-control"
        id="pwd"
        placeholder="Enter password"
        name="pswd"
        onChange={(e) => setPass(e.target.value)}
        style={{
          borderRadius: "8px",
          padding: "10px",
          border: "1px solid rgba(0, 123, 255, 0.3)",
          color: "white",
          width: "100%",
        }}
      />
    </div>
    <div
      className="form-check mb-3"
      style={{ fontSize: "14px", color: "white" }}
    >
      <label className="form-check-label" style={{ color: "white" }}>
        <input
          className="form-check-input"
          type="checkbox"
          name="remember"
          style={{ marginRight: "8px", color: "white" }}
        />
        Remember me
      </label>
    </div>
    <button
      type="submit"
      className="btn btn-primary"
      style={{
        width: "100%",
        backgroundColor: "rgba(0, 123, 255, 0.9)",
        border: "none",
        borderRadius: "8px",
        padding: "12px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = "rgba(0, 123, 255, 1)")
      }
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = "rgba(0, 123, 255, 0.9)")
      }
    >
      Submit
    </button>
  </form>
</div>
      </div>
    </>
  );
};

export default Login;
