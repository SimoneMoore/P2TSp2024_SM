import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"
import About from "../Pages/About"
import NotFound from "../Pages/NotFound"

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container");
    if (navigationContainer) {
      navigationContainer.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
