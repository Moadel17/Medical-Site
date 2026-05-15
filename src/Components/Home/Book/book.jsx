import LottieModule from "lottie-react";
import FormLottie from "../../../assets/Animations/Form.json";
import { Inputs } from "./box";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import "./book.css";
import { Window } from "../../../Context/windowWidth";

export const Book = () => {
  const [form, setForm] = useState({});
  const Lottie = LottieModule.default;
  const isWindow = useContext(Window);

  const Form = (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 1 }}
      className="form">
      <label>Book Appointment</label>
      {Inputs.map((ele) => (
        <input
          key={ele.id}
          type={ele.type}
          placeholder={ele.placeholder}
          value={form[ele.name] || ""}
          onChange={(e) => setForm({ ...form, [ele.name]: e.target.value })}
        />
      ))}
      <button>Appointment Now</button>
    </motion.form>
  );

  const Animation = (
    <motion.div
      initial={{ x: isWindow.isWindow > 865 ? 0 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 1 }}
      className="lottie">
      <Lottie className="animation" animationData={FormLottie} loop={true} />
    </motion.div>
  );

  return (
    <div className="book-now" id="Book">
      {Form} {Animation}
    </div>
  );
};
