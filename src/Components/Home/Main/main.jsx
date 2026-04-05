import "./main.css";
import BackGround from "../../../../public/Photos/Home Photos/doctor.png";
import { IconsMain } from "../../Local/FloatIcons/IconsFloat";
import { motion } from "framer-motion";

export const Main = () => {
  const MainLeft = (
    <div className="main-left">
      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        We Provide All Health Care Solution
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        Protect Your Health And Take Care Of Your Health
      </motion.h2>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        Read More
      </motion.button>
    </div>
  );

  const MainRight = (
    <div className="main-right">
      <img className="main-img" src={BackGround} alt="" />
    </div>
  );

  return (
    <div className="main">
      {MainLeft}
      <IconsMain />
      {MainRight}
    </div>
  );
};
