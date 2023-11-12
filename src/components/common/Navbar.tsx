import { useAppContext } from "../../context/AppContext";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Logo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-8 h-8 mr-2"
    >
        <rect width="100" height="100" rx="20" fill="#2C2C32" />
        <path
            d="M30 70 L50 50 L30 30"
            stroke="#61DAFB"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M70 30 L50 50 L70 70"
            stroke="#61DAFB"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <circle cx="50" cy="50" r="8" fill="#FFF" />
        <path
            d="M25 85 Q50 70 75 85"
            stroke="#3B82F6"
            strokeWidth="6"
            fill="none"
        />
    </svg>
);

const Navbar = () => {
    const { currentUser, setCurrentUser } = useAppContext();
    const usernameRef = useRef<HTMLInputElement | null>(null);

    const createNewRoom = () => {
        setCurrentUser({ ...currentUser, roomId: uuidv4() });
        toast.success("New Room Created", { duration: 750 });
        usernameRef.current?.focus();
    };

    return (
        <nav className="w-full bg-[#2C2C32] py-1">
            <div className="max-w-16xl mx-auto px-4 sm:px-6 lg:px-28">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center text-white">
                            <Logo />
                            <span className="font-normal sm:text-3xl text-2xl">
                                Pair Code
                            </span>
                        </Link>
                    </div>
                    <div className="hidden xl:flex h-full">
                        <button
                            className="px-6 py-2 text-lg font-medium text-white bg-[#0078D4]  hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078D4] transition duration-150 ease-in-out"
                            onClick={createNewRoom}
                        >
                            Create New Room
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
