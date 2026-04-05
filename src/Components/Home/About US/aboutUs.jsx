import { IconsMain } from "../../Local/FloatIcons/IconsFloat";
import { cards, images } from "./about-box";
import { motion } from "framer-motion";
import "./aboutUs.css";
import { useContext } from "react";
import { Window } from "../../../Context/windowWidth";

export const AboutUS = () => {
  const isWindow = useContext(Window);

  const left = (
    <div className="about-left">
      {images.map((img) => (
        <motion.img
          initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}
          src={img.img}
          key={img.id}
          className={img.style}
          alt=""
        />
      ))}
      <motion.h4
        initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}>
        <span>20</span> Year Experience
      </motion.h4>
    </div>
  );

  const right = (
    <div className="about-right">
      <motion.span
        initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}>
        About Us
      </motion.span>
      <motion.h2
        initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}>
        The Great Place Of Medical Hospital Center
      </motion.h2>
      <motion.p
        initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}>
        We provide the special tips and advice’s of heath care treatment and
        high level of best technology involve in the our hospital.
      </motion.p>
      <div className="cards">
        {cards.map((card) => (
          <motion.div
            initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
            className={`card card-${card.id}`}
            key={card.id}>
            <p className={card.style}>{card.icon}</p>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        Read More
      </motion.button>
    </div>
  );

  return (
    <div className="about-us">
      {left}
      <IconsMain />
      {right}
    </div>
  );
};
