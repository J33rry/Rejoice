import { motion } from "framer-motion";
import reel from "../assets/reel.mp4";

function Landing() {
    return (
        <div className="[&_svg]:absolute z-0">
            <video
                src={reel}
                autoPlay={true}
                loop
                muted
                style={{
                    objectFit: "cover",
                    height: "100vh",
                    width: "100vw",
                    opacity: 1,
                    zIndex: -1,
                }}
            ></video>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1 }}
                className=" w:fit z-10"
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 0,212.431 H 35.0769 V 98.6631 c 0,-39.7789 20.3287,-61.2596 52.6154,-61.2596 H 109.217 V 3.1936 H 88.4895 C 45.8391,3.1936 0,30.2433 0,95.8786 Z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 116.161,108.608 c 0,73.193 47.035,109.392 102.441,109.392 52.615,0 87.692,-29.436 94.867,-71.204 h -35.874 c -6.776,24.265 -25.909,38.983 -58.196,38.983 -34.28,0 -63.377,-19.889 -66.566,-65.635 h 160.636 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 C 314.665,51.7239 283.973,0.806864 217.406,0.011271 159.609,-0.784298 116.161,40.5858 116.161,108.608 Z M 153.63,89.9117 c 5.182,-40.9723 30.294,-57.6794 62.979,-57.6794 30.294,0 56.601,16.3093 60.986,57.6794 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 313.469,120.144 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 -5.74609,1.08665 -7.04383,17.53827 -1.196,17.503 z m 8.539,94.674 h 20.727 c 42.651,0 88.49,-27.05 88.49,-92.685 V 5.58032 H 396.148 V 119.348 c 0,39.779 -20.329,61.26 -52.615,61.26 h -21.525 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 660.864,108.608 c 0,-69.6133 -47.832,-108.596729 -102.839,-108.596729 -55.007,0 -102.839,39.381129 -102.839,108.596729 0,69.613 47.832,109.392 102.839,109.392 55.007,0 102.839,-40.177 102.839,-109.392 z m -169.405,0.398 c 0,-53.3042 30.692,-76.7737 66.566,-76.7737 35.874,0 66.567,23.4695 66.567,76.7737 0,51.314 -30.693,76.773 -66.567,76.773 -35.874,0 -66.566,-25.459 -66.566,-76.773 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="htNameclassNametp://www.w3.org/2000/svg"
            >
                <path
                    d="m 683.798,130.088 c 0,63.647 48.63,87.912 90.084,87.912 41.455,0 90.084,-24.265 90.084,-87.912 V 5.58032 H 828.889 V 122.928 c 0,46.144 -22.72,63.249 -55.007,63.249 -32.286,0 -55.007,-17.105 -55.007,-63.249 V 5.58032 h -35.077 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 891.959,212.431 h 35.077 V 5.58032 h -35.077 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 946.888,108.608 c 0,69.613 47.034,109.392 102.842,109.392 51.81,0 92.87,-31.823 96.86,-89.105 h -35.48 c -5.18,38.188 -30.29,56.884 -62.18,56.884 -36.27,0 -65.77,-25.459 -65.77,-76.773 0,-53.3042 29.9,-76.7737 65.37,-76.7737 31.49,0 57.8,12.7292 62.58,50.917 h 35.48 C 1142.6,26.6632 1100.75,0.011271 1049.33,0.011271 994.321,0.011271 946.888,39.3924 946.888,108.608 Z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
            <motion.svg
                initail={{ translateY: "0" }}
                animate={{ translateY: "-100%" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w:fit "
                viewBox="0 0 1362 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m 1163.5,108.608 c 0,73.193 47.03,109.392 102.44,109.392 52.61,0 87.69,-29.436 94.86,-71.204 h -35.87 c -6.78,24.265 -25.91,38.983 -58.2,38.983 -34.28,0 -63.37,-19.889 -66.56,-65.635 h 160.63 c 0.8,-5.967 1.2,-11.536 1.2,-17.503 C 1362,51.7239 1331.31,0.806864 1264.74,0.011271 1206.94,-0.784298 1163.5,40.5858 1163.5,108.608 Z m 37.46,-18.6963 c 5.19,-40.9723 30.3,-57.6794 62.98,-57.6794 30.3,0 56.61,16.3093 60.99,57.6794 z"
                    fill="#fffcf1"
                    id="path132"
                ></path>
            </motion.svg>
        </div>
    );
}

export default Landing;
