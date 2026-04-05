import { BsFillTelephoneFill } from "react-icons/bs";
import { IconsFooter } from "../FloatIcons/IconsFloat";
import { Links, Serv } from "./box";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  const data = (
    <div className="data">
      <img src="/Photos/Home Photos/logo.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        neque incidunt dicta nihil.
      </p>
      <div className="contact">
        <span>
          <BsFillTelephoneFill />
        </span>
        <div className="text">
          <p>Contact Us</p>
          <p>+011 3639 2195</p>
        </div>
      </div>
    </div>
  );

  const links = (
    <div className="links">
      <h3>Quick Links</h3>
      <div className="link">
        {Links.map((link) => (
          <Link key={link.id} to={`/${link.link}`}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );

  const service = (
    <div className="service">
      <h3>Services</h3>
      <div className="link">
        {Serv.map((serv) => (
          <Link key={serv.id} to={`/${serv.link}`}>
            {serv.name}
          </Link>
        ))}
      </div>
    </div>
  );

  const social = (
    <div className="social">
      <span className="face">
        <FaFacebookF />
      </span>
      <span className="twit">
        <FaTwitter />
      </span>
      {/* <span className="insta">
        <FaInstagram />
      </span> */}
      <span className="linked">
        <FaLinkedin />
      </span>
    </div>
  );

  return (
    <div className="footer">
      {data}
      {links}
      {service}
      {social}
      {/* <IconsFooter /> */}
      <p className="copy-right">
        Copyright © 2026 Design & Developed by <span>Mohamed Adel</span>
      </p>
    </div>
  );
};
