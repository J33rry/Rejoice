import { motion } from "framer-motion";

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
            <div className="p-10 pt-5 text-7xl tracking-wider leading-15 h-[100vh] ">
                {words.map((lines, index) => {
                    return (
                        <motion.div
                            data-scroll
                            da
                            initial={{ translateY: "50%", opacity: 0 }}
                            animate={{ translateY: "0", opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                linear: "easeIn",
                            }}
                            key={index}
                            // className="translate-y-['-200%'] opacity-0.5 "
                        >
                            {lines}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Work;
