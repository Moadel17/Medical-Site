import { createContext, useEffect, useState } from "react";

export const Window = createContext();

export const WindowWidth = ({ children }) => {
  const [isWindow, setIsWindow] = useState(window.innerWidth);

  useEffect(() => {
    function width() {
      setIsWindow(window.innerWidth);
    }

    window.addEventListener("resize", width);
    return () => window.removeEventListener("resize", width);
  }, []);

  return <Window.Provider value={{ isWindow }}>{children}</Window.Provider>;
};
