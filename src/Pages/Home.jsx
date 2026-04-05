import { AboutUS } from "../Components/Home/About US/aboutUs";
import { Book } from "../Components/Home/Book/book";
import { Main } from "../Components/Home/Main/main";
import { Footer } from "../Components/Local/Footer/footer";
import { NavBar } from "../Components/Local/NavBar/navBar";

export const Home = () => {
  return (
    <div>
      <Main />
      <AboutUS />
      <Book />
    </div>
  );
};
