import "../css/Services.css";
// import "./App.css";
import Service from "../components/Service.js";
import webDevIconWhite from "../web-dev-icon-white.png";
import machineLearningIcon from "../machine-learning-icon.png";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="services-header">My Services</h2>
        <div className="all-services">
          <Service
            serviceIcon={webDevIconWhite}
            serviceName={"MERN Stack Development"}
            serviceDescription={
              "As a MERN Stack developer, I specialize in creating dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I offer end-to-end development services, including responsive design, performance optimization, and seamless integration of APIs. My goal is to deliver custom solutions tailored to your needs."
            }
          />
          <Service
            serviceIcon={machineLearningIcon}
            serviceName={"Machine Learning / Deep Learning"}
            serviceDescription={
              "I build and customize basic ML and DL models tailored to your needs. I offer end-to-end services, including model development, deployment, and integration, to help you gain actionable insights and drive automation."
            }
          />
          {/* <Service serviceIcon={""} serviceName={""} serviceDescription={""} /> */}
        </div>
      </div>
    </section>
  );
}
export default Services;
