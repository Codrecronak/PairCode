import Navbar from "../components/common/Navbar";
import JoinForm from "../components/forms/JoinForm";
import pairPng from "../assets/pair.png";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#2C2C32]">
            <Navbar />
            {/*  */}
            <div className="w-full bg-[#25252B] text-[#A7A7AA] py-2 px-4 sm:px-6 lg:px-28 text-center text-lg tracking-wide">
                <p className="max-w-4xl mx-auto">
                    Initial requests may take up to a minute to process. Learn
                    more about{" "}
                    <a
                        href="https://render.com/docs/free#free-web-services"
                        className="text-[#0098F8] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Render's Free Tier
                    </a>
                </p>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="min-w-full h-full flex flex-col items-center justify-evenly my-4 sm:flex-row sm:pt-0">
                    <div className="w-full max-w-[400px] lg:w-1/2 lg:pl-[3vw] lg:pr-[3vw] mb-8 lg:mb-0">
                        <JoinForm />
                    </div>
                    <div className="hidden lg:flex lg:animate-move lg:justify-center lg:w-1/2 lg:p-1/4">
                        <img
                            className="w-[400px] xl:w-[600px] 2xl:w-[900px] xl:mr-36 lg:ml-48"
                            src={pairPng}
                            alt="pair"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
