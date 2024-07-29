import profilePic from "../profile-pic.png";
export default function NavBar() {
  return (
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
  );
}
