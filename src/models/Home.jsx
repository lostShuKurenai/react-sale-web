import React from "react";
import Footer from "../components/Footer";
import Slides from "../components/Slides";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate("/java");
  };

  const onButClick = () => [navigate("/tutorials")];

  const heroStyle = {
    backgroundImage: `url('path-to-your-background-image.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "50px 0",
    color: "#fff",
    textAlign: "center",
    marginRight: "140px",
    justifyContent: "space-evenly",
  };

  const sectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    marginLeft: "50px",
    marginRight: "120px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const serviceCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
    textAlign: "left",
  };

  const testimonialStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
    fontStyle: "italic",
  };

  return (
    <>
      <Slides />
      {/* Hero Section */}
      <div
  className="container"
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}
>
  {/* Hero Section */}
  <section
    className="hero"
    style={{
      flex: "1 1 48%",
      backgroundImage: `url('path-to-your-background-image.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "50px",
      textAlign: "center",
      color: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="hero-content">
      <h1>Welcome to Future's Code – Shape the Future with Technology</h1>
      <p>
        Empowering the next generation of tech innovators through education,
        coding, and resources.
      </p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onHandleClick}
      >
        Start Your Journey
      </button>
    </div>
  </section>

  {/* About Section */}
  <section
    className="about"
    style={{
      flex: "1 1 48%",
      backgroundColor: "#f9f9f9",
      padding: "50px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      background: "Black",
    }}
  >
    <h2>Who We Are</h2>
    <p style={{ lineHeight: "1.6", fontSize: "18px" }}>
      At <strong>Future's Code</strong>, we believe the future is driven by innovation and technology.
      Our mission is to inspire and educate the next generation of coders, engineers, and innovators by
      providing the tools and resources to excel in the ever-evolving tech world. Whether you're just
      starting or advancing your career, we're here to support your growth through hands-on projects,
      tutorials, and expert insights.
    </p>
  </section>
</div>


      <div className="container2" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
  {/* Features Section */}
  <section className="features" style={{ ...sectionStyle, flex: "1 1 48%" }}>
    <h2>Why Choose Us?</h2>
    <ul>
      <li>
        Comprehensive Learning Paths: Structured courses that guide you from beginner to expert.
      </li>
      <li>Real-world Projects: Build meaningful projects to showcase your skills.</li>
      <li>Interactive Tutorials: Learn through engaging and easy-to-follow tutorials.</li>
      <li>Expert Insights: Stay updated with the latest trends and technologies in the coding world.</li>
      <li>Community Support: Join a vibrant community of like-minded learners and professionals.</li>
    </ul>
  </section>

  {/* Services Section */}
  <section className="services" style={{ ...sectionStyle, flex: "1 1 48%" }}>
    <h2>Our Services</h2>
    <div className="service-card" style={serviceCardStyle}>
      <h3>Coding Tutorials</h3>
      <p>
        Free and premium tutorials covering various programming languages (Java, Python, JavaScript, etc.)
      </p>
    </div>
    <div className="service-card" style={serviceCardStyle}>
      <h3>Project Guidance</h3>
      <p>
        Work on real-world projects and get feedback from industry professionals.
      </p>
    </div>
    <div className="service-card" style={serviceCardStyle}>
      <h3>Career Advice</h3>
      <p>Get career insights and tips from experienced tech leaders.</p>
    </div>
    <div className="service-card" style={serviceCardStyle}>
      <h3>Tech News</h3>
      <p>
        Stay informed with the latest updates in the tech world through blogs and newsletters.
      </p>
    </div>
  </section>
</div>

<div
  className="last"
  style={{
    display: "flex",
    flexWrap: "wrap",
    marginTop: "50px",
    marginBottom: "50px",
    gap: "20px",
  }}
>
  {/* Testimonials Section */}
  <section className="testimonials" style={{ ...sectionStyle, flex: "1 1 48%" }}>
    <h2>What Our Users Say</h2>
    <div className="testimonial" style={testimonialStyle}>
      <p>
        "Future's Code gave me the knowledge and confidence to start my career in tech!" – John D., Software Engineer
      </p>
    </div>
    <div className="testimonial" style={testimonialStyle}>
      <p>
        "The tutorials are clear, concise, and practical. I could apply what I learned immediately." – Emily R., Data Analyst
      </p>
    </div>
    <div className="testimonial" style={testimonialStyle}>
      <p>
        "I love the community! It's a great place to learn, share, and grow." – Marcus T., Web Developer
      </p>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="cta" style={{ ...sectionStyle, flex: "1 1 48%" }}>
    <h2>Ready to Start Coding?</h2>
    <p>
      Join <strong>Future's Code</strong> today and start building your future in tech. Whether you’re learning your first
      lines of code or refining your skills, we have something for everyone.
    </p>
    <button style={buttonStyle} onClick={onButClick}>
      Get Started
    </button>
  </section>
</div>

    </>
  );
};

export default Home;
