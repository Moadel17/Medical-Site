import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { OutLet } from "./Pages/OutLet";
import { Team } from "./Pages/TeamPage";
import { LogIN } from "./Components/Sign/Login/login";
import { SignUP } from "./Components/Sign/register/register";
import { Services } from "./Pages/Services";
import { ABoutUS } from "./Pages/AboutPage";

function App() {
  const [scroll, setScroll] = useState(0);

  function get() {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", get);
    return () => window.removeEventListener("scroll", get());
  }, []);

  return (
    <div className="box">
      <Routes>
        <Route element={<OutLet />}>
          <Route path="/log-in" element={<LogIN />} />
          <Route path="/sign-up" element={<SignUP />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<ABoutUS />} />
        </Route>
      </Routes>
      {scroll > 150 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="to-top">
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
