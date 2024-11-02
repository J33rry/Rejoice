import About from "./components/About";
import Cards from "./components/Cards";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ServicesandModel from "./components/ServicesandModel";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="bg-[#fffcf1]">
            <Navbar />
            <Landing />
            <Work />
            <Cards />
            <ServicesandModel />
            <About />
        </div>
    );
}

export default App;
