import "./App.css";
import profilePic from "./profile-pic.png";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

function App() {
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
                <a href="#" className="nav-element">
                  About Me
                </a>
                <a href="#" className="nav-element">
                  Services
                </a>
              </div>

              <div className="profile-wrapper">
                <img src={profilePic} className="profile-pic" alt="Profile" />
              </div>
              <div className="right">
                <a href="#" className="nav-element">
                  Projects
                </a>
                <a href="#" className="nav-element">
                  Achievements
                </a>
                <a href="#" className="nav-element">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
        <section className="hero-section">
          <div className="container">
            <div className="hero-section-left">
              <h3 className="greeting">Hi I am</h3>
              <span className="name">Shiv Kumar</span>
              <h1 className="role">Full Stack Developer / ML Engineer</h1>
              <h5 className="description">
                I'm Shiv Kumar, a computer science student at FAST University
                Karachi. I have a strong passion for machine learning, deep
                learning, computer vision, and web development. Through my
                academic journey and personal projects, I continuously strive to
                enhance my skills and contribute to innovative technological
                solutions.
              </h5>
            </div>
            <div className="hero-section-right">
              <img src={pic2} />
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="about-me">
          <div className="container">
            <div className="about-me-left">
              <img src={pic3} className="pic3" />
            </div>
            <div className="about-me-right"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
