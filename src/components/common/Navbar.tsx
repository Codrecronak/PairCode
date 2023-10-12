import { Link } from "react-router-dom";

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
    return (
        <nav className="w-full bg-[#2C2C32] pt-4">
            <div className="max-w-16xl mx-auto px-4 sm:px-6 lg:px-28">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center text-white">
                            <Logo />
                            <span className="font-normal text-3xl">
                                Pair Code
                            </span>
                        </Link>
                    </div>
                    {/* <div className="hidden md:block">
                        <div className="ml-4 flex items-center">
                            <span className="font-normal text-lg text-white">
                                Build with 💙 by{" "}
                                <a
                                    href="https://adysfolio.vercel.app"
                                    className="text-sky-600 hover:text-sky-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Aditya Jindal
                                </a>
                            </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
