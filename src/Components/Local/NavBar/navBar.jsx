import { Link } from "react-router-dom";
import Logo from "../../../../public/Photos/Home Photos/logo.png";
import { navBtns } from "./navBar-BOX";
import { useContext, useRef, useState } from "react";
import { Window } from "../../../Context/windowWidth";
import { FaBars, FaSearch } from "react-icons/fa";
import "./navBar.css";

export const NavBar = () => {
  const isWindow = useContext(Window);
  const [input, setInput] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openBars, setOpenBars] = useState(false);
  const inputRef = useRef(null);

  const nav = (
    <div className="nav">
      {/* Image */}
      <img src={Logo} id="logo" alt="" />

      {/* Labels */}
      <div className="labels">
        {navBtns.map((ele) => (
          <Link
            style={{ display: openSearch ? "none" : "block" }}
            to={ele.href}
            key={ele.id}>
            {ele.label}
          </Link>
        ))}

        <div className="search">
          <input
            type="text"
            placeholder="Enter Medicine"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ display: openSearch ? "block" : "none" }}
          />
          <FaSearch onClick={() => setOpenSearch((prev) => !prev)} />
        </div>
      </div>

      {/* Logs */}
      <div className="logs">
        <Link to="/log-in">Log In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>

      <div
        className="bars-icon"
        onClick={() => {
          (setOpenBars((prev) => !prev), inputRef.current.focus());
        }}>
        <FaBars />
      </div>
    </div>
  );

  const bars = (
    <div className={`bars ${openBars ? "" : "hide"}`}>
      <div className="bars-search">
        <FaSearch />
        <input ref={inputRef} type="text" placeholder="Enter Medicine Name" />
      </div>
      {navBtns.map((ele) => (
        <Link
          onClick={() => setOpenBars((prev) => !prev)}
          to={ele.href}
          key={ele.id}>
          {ele.label}
        </Link>
      ))}
      <Link to="">Log In</Link>
    </div>
  );

  return (
    <div className="contaner">
      {nav} {bars}
    </div>
  );
};
