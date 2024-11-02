import background from "../assets/bg-loop.webm";

function ServicesandModel() {
    return (
        <div className="flex justify-center items-center h-[150vh] w-full relative ">
            <video
                src={background}
                muted
                autoPlay
                loop
                className="flex items-center justify-center scale-[175%] absolute bottom-[50vh]"
            ></video>
        </div>
    );
}

export default ServicesandModel;
