import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "../context/Provider";

export const PageLayout = () => {
  return (
    <Provider>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
