import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="bg-[#fffcf1]">
            <Navbar />
            <Landing />
            <Work />
        </div>
    );
}

export default App;
