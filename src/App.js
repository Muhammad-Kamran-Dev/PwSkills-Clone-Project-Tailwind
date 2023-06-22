import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkSection from "./components/LinkSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentSection from "./components/StudentSection";
import Achievement from "./components/Achievement";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <LinkSection />
      <Routes>
        <Route
          path="/"
          element={[<Hero />, <StudentSection />, <Achievement />]}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
