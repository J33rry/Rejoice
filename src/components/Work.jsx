import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
const reveal = {
    hidden: { opacity: 0, y: 20 },
    show: () => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: 0.1,
        },
    }),
};
const lines = {
    hidden: { opacity: 0, width: 0 },
    show: {
        opacity: 1,
        width: "95%",
        transition: {
            duration: 0.5,
            // delay: 0.5,
        },
    },
};

function Work() {
    const line5 = [
        "models,",
        "Agency",
        "&",
        "Venture.",
        "Your",
        "vision,",
        "your",
    ];
    const line4 = [
        "and",
        " tech",
        "brands.",
        "We",
        "also",
        "offer",
        "two",
        "engagement",
    ];
    const line3 = [
        "remarkable",
        "brands.",
        "We",
        "focus",
        "onpremium,",
        "luxury",
    ];
    const line2 = [
        " technology",
        "to",
        "transform",
        " founder's",
        "visions",
        "into",
    ];
    const line1 = [
        "We",
        "use",
        "the",
        " power",
        "of",
        "narrative,",
        "design",
        "&",
    ];
    const line6 = ["choice."];
    return (
        <div>
            <div className="flex justify-between items-center p-10 text-3xl font-light tracking-wider mt-10 pb-5 whitespace-nowrap">
                <div>Tomorrow&apos;s Brands, Today &#8482;</div>
                <div>Paris/San Diego</div>
            </div>
            <motion.div
                variants={lines}
                initial="hidden"
                whileInView="show"
                className="w-[95%] h-[.1vw] bg-zinc-400 mx-auto"
            ></motion.div>
            <div className="p-10 pt-5 text-[4vw] tracking-wider leading-[5vw] ">
                <div className="flex gap-4">
                    {line1.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    {line2.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    {line3.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    {line4.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    {line5.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4">
                    {line6.map((word, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                custom={index}
                            >
                                {word}
                            </motion.div>
                        );
                    })}
                </div>
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
                    <motion.h1
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                    >
                        Explore our services
                    </motion.h1>
                    <motion.h1
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                    >
                        and engagement models
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

export default Work;
