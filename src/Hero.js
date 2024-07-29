import pic2 from "./pic2.jpg";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section-left">
          <h3 className="greeting">Hi! I Am</h3>
          <span className="name">Shiv Kumar</span>
          <h1 className="role">Full Stack Developer / ML Engineer</h1>
          <h5 className="description">
            Hey! I'm Shiv Kumar, a Full Stack Developer and a Machine Learning
            Enthusiast.
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
          <img src={pic2} alt="my-pic" />
        </div>
      </div>
    </section>
  );
}
