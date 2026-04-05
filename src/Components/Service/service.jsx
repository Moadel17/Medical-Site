import React from "react";
import { serv, Info, News } from "./box";
import "./service.css";
import { img, p } from "framer-motion/client";
import { IconsFooter, IconsMain } from "../Local/FloatIcons/IconsFloat";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

export const Service = () => {
  const Serv = (
    <div className="serv">
      {serv.map((item) => (
        <div key={item.id} className="card">
          <span>{item.icon}</span>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <button>View More</button>
        </div>
      ))}
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

  const news = (
    <div className="news">
      <p className="label-head">Latest News</p>
      <h2>Our Latest News</h2>
      <div className="cards">
        {News.map((item) => (
          <div className="card">
            <img src={item.img} alt="" />
            <div className="profile">
              <div className="img">
                <img src={item.profile} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="date">
                <FaRegCalendarAlt />
                <p>{item.date}</p>
              </div>
            </div>
            <h5>{item.label}</h5>
            <button>
              Read More
              <span>
                <RiArrowRightSLine />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="service">
      <p className="label-head">Latest News</p>
      <h2 className="service-title">Our Services</h2>
      {Serv}
      <IconsMain /> {info}
      {news}
      {/* <IconsFooter /> */}
    </div>
  );
};
