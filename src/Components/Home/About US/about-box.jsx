import { FaMedkit } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { GiLoveInjection } from "react-icons/gi";
import { LuAmbulance } from "react-icons/lu";
import one from "../../../assets/Photos/Home Photos/section-about-1.jpg";
import two from "../../../assets/Photos/Home Photos/section-about-2.jpg";
import three from "../../../assets/Photos/Home Photos/section-about-3.jpg";

export const images = [
  {
    id: 1,
    img: two,
    style: "two",
  },
  {
    id: 2,
    img: one,
    style: "one",
  },
  {
    id: 3,
    img: three,
    style: "three",
  },
];

export const cards = [
  {
    id: 1,
    icon: <LuAmbulance />,
    text: "Emergency Help",
    style: "one icon",
  },
  {
    id: 2,
    icon: <FaBedPulse />,
    text: "Qualified Doctors",
    style: "two icon",
  },
  {
    id: 3,
    icon: <FaMedkit />,
    text: "Best Professionals",
    style: "three icon",
  },
  {
    id: 4,
    icon: <GiLoveInjection />,
    text: "Medical Treatment",
    style: "four icon",
  },
];
