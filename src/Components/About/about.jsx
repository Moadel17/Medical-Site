import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AboutUS } from "../Home/About US/aboutUs";
import { doctorsData } from "./box";
import "./about.css";
import { Info } from "../Service/box";

export const About = () => {
  const bestTeam = (
    <div className="doctor-section">
      <h2>Meet Best Doctors</h2>
      <div className="doctors-grid">
        {doctorsData.map((doctor) => (
          <div className="doctor-card col-12 col-md-6 col-lg-3">
            <div className="img-box">
              <img src={doctor.photo} alt={doctor.name} />
            </div>
            <div className="overlay">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <div className="social-icons">
                <a href={doctor.social.facebook}>
                  <FaFacebookF />
                </a>
                <a href={doctor.social.twitter}>
                  <FaTwitter />
                </a>
                <a href={doctor.social.instagram}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const info = (
    <div className="info">
      {Info.map((item) => (
        <div className="card" key={item.id}>
          <h4>
            {item.count}
            <span>{item.label}</span>
          </h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="ABOUT">
      <h2 className="service-title">About US</h2>
      <AboutUS />
      {info}
      {bestTeam}
    </div>
  );
};
