import Details from "../components/Details";
import "../css/AboutMe.css";
import pic3 from "../pic3-copy.jpg";
export default function AboutMe({ currentTab, setCurrentTab }) {
  return (
    <section id={"about-me"} className="about-me">
      <div className="container">
        <div className="about-me-left">
          <img src={pic3} className="pic3" alt="About Me" />
        </div>
        <div className="about-me-right">
          <h2>About Me</h2>
          <p className="about-me-description">
            I’m Shiv Kumar, a Computer Science student at FAST NUCES Karachi.
            I’m passionate about web development, machine learning, and deep
            learning. I’m curious and enjoy solving new problems. I love
            exploring new technologies and finding ways to make a difference.
            I’m always happy to connect and talk about tech or new projects.
          </p>
          <div className="about-me-details">
            <a
              href=""
              className={`skills btn ${currentTab === "Skills" && "active"}`}
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
        </div>
      </div>
    </section>
  );
}
