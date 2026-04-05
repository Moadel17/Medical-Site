import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { doctorsData } from "./box";
import "./team.css";
import { IconsFooter, IconsMain } from "../Local/FloatIcons/IconsFloat";

const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
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
);

const Teams = () => {
  return (
    <div className="app">
      {/* Hero */}
      <section className="hero">
        <IconsMain />
        <div className="hero-text">
          <h2>We care about your health</h2>
          <p>
            The best medical team with the latest equipment and modern
            technologies
          </p>
          <button>Book your appointment now</button>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="doctors-section">
        <IconsFooter />
        <h2>Our Doctor Team</h2>
        <div className="doctors-grid">
          {doctorsData.map((doc, idx) => (
            <DoctorCard doctor={doc} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
