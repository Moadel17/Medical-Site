import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Local/NavBar/navBar";
import { Footer } from "../Components/Local/Footer/footer";

export const OutLet = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
