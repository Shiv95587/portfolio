import "../css/Contact.css";
// importter from "../components/Footer.js";
import gitHub from "../github-icon.png";
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact-header">Contact Me</h2>
        <div className="contact-details">
          <div className="contact-details-left">
            <form action="/submit" method="post">
              <div class="form-name-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div class="form-email-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="form-message-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container footer">
        <div className="line">Hi</div>
        <div className="contact-links">
          <img src={gitHub} alt="df" width={"20px"} height={"auto"} />
        </div>
        <div className="line">Hi</div>
      </div>
    </section>
  );
}
