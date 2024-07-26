import "./App.css";
import profilePic from "./profile-pic.png";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3-copy.jpg";
import { useState } from "react";
import Details from "./Details";
import Service from "./Service.js";

function App() {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <div className="App">
      <header id="header">
        <div className="container">
          <nav className="navbar">
            <div className="nav-elements">
              <div className="left">
                <a href="#" className="nav-element">
                  Home
                </a>
                <a href="#about-me" className="nav-element">
                  About Me
                </a>
                <a href="#services" className="nav-element">
                  Services
                </a>
              </div>

              <div className="profile-wrapper">
                <img src={profilePic} className="profile-pic" alt="Profile" />
              </div>
              <div className="right">
                <a href="#projects" className="nav-element">
                  Projects
                </a>
                <a href="#achievements" className="nav-element">
                  Achievements
                </a>
                <a href="#contact" className="nav-element">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
        <section className="hero-section">
          <div className="container">
            <div className="hero-section-left">
              <h3 className="greeting">Hi! I Am</h3>
              <span className="name">Shiv Kumar</span>
              <h1 className="role">Full Stack Developer / ML Engineer</h1>
              <h5 className="description">
                Hey! I'm Shiv Kumar, a Full Stack Developer and a Machine
                Learning Enthusiast.
              </h5>
              <div className="btns">
                <a href="#contact" className="hire-me-btn">
                  Hire Me
                </a>
                <a href="#projects" className="projects-btn">
                  Projects
                </a>
              </div>
            </div>
            <div className="hero-section-right">
              <img src={pic2} />
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id={"about-me"} className="about-me">
          <div className="container">
            <div className="about-me-left">
              <img src={pic3} className="pic3" alt="About Me" />
            </div>
            <div className="about-me-right">
              <h1>About Me</h1>
              <p className="about-me-description">
                I’m Shiv Kumar, a Computer Science student at FAST NUCES
                Karachi. I’m passionate about web development, machine learning,
                and deep learning. I’m curious and enjoy solving new problems. I
                love exploring new technologies and finding ways to make a
                difference. I’m always happy to connect and talk about tech or
                new projects.
              </p>
              <div className="about-me-details">
                <a
                  href=""
                  className={`skills btn ${
                    currentTab === "Skills" && "active"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTab("Skills");
                  }}
                >
                  Skills
                </a>
                <a
                  href="#"
                  className={`education btn ${
                    currentTab === "Education" && "active"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTab("Education");
                  }}
                >
                  Education
                </a>
                <a
                  href="#"
                  className={`experience btn ${
                    currentTab === "Experience" && "active"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTab("Experience");
                  }}
                >
                  Experience
                </a>
              </div>
              <Details currentTab={currentTab} />
              <Service />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
