import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
