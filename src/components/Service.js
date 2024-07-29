function Service({ serviceIcon, serviceName, serviceDescription }) {
  return (
    <div className="service">
      <h2 className="service-name">{serviceName}</h2>
      <img
        className="service-image"
        src={serviceIcon}
        width="30%"
        height="auto"
        alt="Mern Stack Development Icon"
      />
      <p className="service-description">{serviceDescription}</p>
      <div className="flex-center">
        <a className="contact-btn" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Service;
