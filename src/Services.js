import "./Services.css";
import "./App.css";
import Service from "./Service.js";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="services-header">My Services</h2>
        <div className="all-services">
          <Service serviceIcon={""} serviceName={""} serviceDescription={""} />
          <Service serviceIcon={""} serviceName={""} serviceDescription={""} />
          <Service serviceIcon={""} serviceName={""} serviceDescription={""} />
        </div>
      </div>
    </section>
  );
}
export default Services;
