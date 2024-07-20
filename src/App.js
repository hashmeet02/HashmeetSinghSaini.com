import Navbar from "./components/NavBar";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <Home />
      <Skills />
      <Works/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
