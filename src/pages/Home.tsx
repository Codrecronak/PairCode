import Navbar from "../components/common/Navbar";
import JoinForm from "../components/forms/JoinForm";
import pairPng from "../assets/pair.png";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center  gap-16 bg-[#2C2C32]">
                <div className="min-w-full h-full flex flex-col items-center justify-evenly my-4 sm:flex-row sm:pt-0">
                    <div className="pl-3vw w-full sm:w-1/2">
                        <JoinForm />
                    </div>
                    <div className="flex w-full animate-move justify-center sm:w-1/2 sm:p-1/4">
                        <img
                            className="2xl:w-[900px] w-[500px] sm:w-[600px] mr-36"
                            src={pairPng}
                            alt="pair"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
