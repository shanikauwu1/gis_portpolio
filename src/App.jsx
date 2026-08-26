import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="mt-24 flex-1">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Project Details Page */}
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
