import { HiMiniArrowUturnDown } from "react-icons/hi2";
import img1 from "../assets/1.avif";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.avif";
import logo1 from "../assets/logo1.avif";
import logo2 from "../assets/logo.svg";
import logo3 from "../assets/oura.svg";
import video_1 from "../assets/video-1.mp4";
import video_2 from "../assets/video-2.mp4";
import video_3 from "../assets/video-3.mp4";
import { motion } from "framer-motion";

// const reveal = {
//     hidden: { opacity: 0, y: 20 },
//     show: (index) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.2,
//             delay: index * 0.1,
//         },
//     }),
// };
function Cards() {
    return (
        <div className="p-10 mt-40">
            <div className="flex justify-between items-center text-3xl font-light tracking-wider">
                <div>Transforming visions into brands.</div>
                <button className="flex gap-4 hover:underline underline-offset-4 decoration-2">
                    <HiMiniArrowUturnDown className="-rotate-90" />
                    See the work
                </button>
            </div>
            <div className="flex gap-5 mt-5 ">
                <div className="relative shadow-sm shadow-zinc-400 ">
                    <img src={img1} alt="" className="-z-10 " />
                    {/* <div className="absolute bottom-0 text-white">yoo</div> */}
                    <img
                        src={logo1}
                        alt=""
                        className="absolute bottom-20 scale-50 z-20"
                    />
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        muted
                        autoPlay
                        loop
                        src={video_1}
                        className="absolute top-0 z-10 opacity-0"
                    ></motion.video>
                </div>
                <div className="relative shadow-sm shadow-zinc-400">
                    <img src={img2} alt="" className="-z-99 " />
                    {/* <div className="absolute bottom-0 text-white">yoo</div> */}
                    <img
                        src={logo3}
                        alt=""
                        className="absolute bottom-[12vh] scale-150 left-[40%] z-20"
                    />
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        muted
                        autoPlay
                        loop
                        src={video_2}
                        className="absolute top-0 z-10 opacity-0"
                    ></motion.video>
                </div>
                <div className="relative shadow-sm shadow-zinc-400">
                    <img src={img3} alt="" className="-z-99 " />
                    {/* <div className="absolute bottom-0 text-white">yoo</div> */}
                    <img
                        src={logo2}
                        alt=""
                        className="absolute bottom-[12vh] scale-150 left-[40%] z-20"
                    />
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        muted
                        autoPlay
                        loop
                        src={video_3}
                        className="absolute top-0 z-10 opacity-0"
                    ></motion.video>
                </div>
            </div>
        </div>
    );
}

export default Cards;
