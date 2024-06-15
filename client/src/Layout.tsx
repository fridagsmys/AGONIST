import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
import "./styles/main.scss";

export const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};
