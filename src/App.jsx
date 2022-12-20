import About from "./sections/About ";
import Activity from "./sections/Activity";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Ido from "./sections/Ido";
import Nav from "./sections/Nav";
import Summary from "./sections/Summary";
import "animate.css";
import { useSelector } from "react-redux";

const App = () => {

  const tog = useSelector((state) => state.show);
  return (
    <>
      <Nav />
      <Hero />
      {!tog && (
        <div>
          <About />
          <Summary />
          <Ido />
          <Activity />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
