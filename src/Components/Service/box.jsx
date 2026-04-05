import { AiFillMedicineBox } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa";
import { FaBedPulse, FaPrescriptionBottleMedical } from "react-icons/fa6";
import { GiLoveInjection } from "react-icons/gi";
import { LuAmbulance } from "react-icons/lu";

export const serv = [
  {
    id: 1,
    icon: <FaStethoscope />,
    name: "Diagnostics",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
  {
    id: 2,
    icon: <AiFillMedicineBox />,
    name: "Surgery",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
  {
    id: 3,
    icon: <FaPrescriptionBottleMedical />,
    name: "Treatment",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
  {
    id: 4,
    icon: <LuAmbulance />,
    name: "Emergency",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
  {
    id: 5,
    icon: <FaBedPulse />,
    name: "Qualified Doctors",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
  {
    id: 6,
    icon: <GiLoveInjection />,
    name: "Vaccine",
    description: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
  },
];

export const Info = [
  {
    id: 1,
    count: 120,
    label: "Years With You",
    description:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },

  {
    id: 2,
    count: 400,
    label: "Awards",
    description:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    id: 3,
    count: 250,
    label: "Doctors",
    description:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    id: 4,
    count: 800,
    label: "Satisfied Client",
    description:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
];

export const News = [
  {
    id: 1,
    img: "../../../public/Photos/News Photos/1.jpg",
    profile: "../../../public/Photos/Team Photos/member1.jpg",
    name: "Mohamed Ali",
    date: "18 May 2022",
    label: "In the hospital there are special surgeon",
  },
  {
    id: 2,
    img: "../../../public/Photos/News Photos/2.jpg",
    profile: "../../../public/Photos/Team Photos/member2.jpg",
    name: "Esraa Dawood",
    date: "1 June 2021",
    label: "Dental care for woman are very important",
  },
  {
    id: 3,
    img: "../../../public/Photos/News Photos/3.jpg",
    profile: "../../../public/Photos/Team Photos/member3.jpg",
    name: "Hassan Rady",
    date: "7 July 2022",
    label: "Health will be a thing of past",
  },
];
