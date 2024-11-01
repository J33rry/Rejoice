import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";

function Work() {
    const words = [
        "We use the power of narrative, design &",
        " technology to transform founder's visions into",
        "remarkable brands. We focus onpremium, luxury",
        "and tech brands. We also offer two engagement",
        "models, Agency & Venture. Your vision, your",
        "choice.",
    ];
    return (
        <div>
            <div className="flex justify-between items-center p-10 text-3xl font-light tracking-wider mt-10 pb-5 whitespace-nowrap">
                <div>Tomorrow&apos;s Brands, Today &#8482;</div>
                <div>Paris/San Diego</div>
            </div>
            <div className="w-[95%] h-[.1vw] bg-zinc-400 mx-auto"></div>
            <div className="p-10 pt-5 text-7xl tracking-wider leading-15 ">
                {words.map((lines, index) => {
                    return (
                        <motion.div
                            data-scroll
                            initial={{ translateY: "50%", opacity: 0 }}
                            animate={{ translateY: "0", opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: index * 0.2,
                                cubic: [0, 1.11, 0.99, -0.02],
                            }}
                            key={index}
                            className={index === 0 ? "ml-40" : ""}
                            // className="translate-y-['-200%'] opacity-0.5 "
                        >
                            {lines}
                        </motion.div>
                    );
                })}
            </div>
            <div className="flex-row items-center justify-center mt-80">
                <div className="flex items-center justify-center text-xl font-light gap-3">
                    <h2 className="block text-center ">Agency & Venture</h2>
                    <span className="block bg-black text-white rounded-full p-2 py-0.5 px-3 capitalize font-extralight text-lg">
                        models
                    </span>
                    <BsArrowReturnLeft className="-rotate-90" />
                </div>
                <div className="block flex-row text-center text-7xl tracking-wider hover:underline underline-offset-2 decoration-2 underline mt-5">
                    <h1 className="">Explore our services</h1>
                    <h1> and engagement models</h1>
                </div>
            </div>
        </div>
    );
}

export default Work;
