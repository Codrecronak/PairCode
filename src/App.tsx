import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";
import Toast from "./components/toast/Toast";
// import Footer from "./pages/Footer";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/code/:roomId" element={<Editor />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
          <Toast />
      </>
  );
}

export default App;
