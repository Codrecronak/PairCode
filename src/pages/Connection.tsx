import { useNavigate } from "react-router-dom";

function Connection() {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <ConnectionError />
    </div>
  );
}

const ConnectionError = () => {
  const navigate = useNavigate();
  const reloadPage = () => {
    window.location.reload();
  };

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
      <>
          <span className="whitespace-break-spaces text-lg font-medium text-slate-300">
              Oops! Something went wrong. Please try again
          </span>
          <div className="flex flex-wrap justify-center gap-4">
              <button
                  className="mr-4 rounded-md bg-[#0078D4] hover:bg-blue-600 px-8 py-2 font-semibold text-white"
                  onClick={reloadPage}
              >
                  Try Again
              </button>
              <button
                  className="rounded-md bg-[#0078D4] hover:bg-blue-600 px-8 py-2 font-semibold text-white"
                  onClick={gotoHomePage}
              >
                  Go to Home
              </button>
          </div>
      </>
  );
};

export default Connection;
