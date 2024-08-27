import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import AnimatedCursor from "react-animated-cursor"
import Home from "./components/Home";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import FadeInSection from "./components/FadeInSection"; // Adjust the import path as necessary

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
<AnimatedCursor
  color="251, 146, 60"
  innerSize={15}
  outerSize={65}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0.7}
  innerStyle={{
    position: 'fixed', // Ensure the cursor stays on top
    zIndex: 10000000, // High z-index to ensure visibility
  }}
  outerStyle={{
    mixBlendMode: 'difference', // Experiment with different modes
    position: 'fixed', // Ensure the cursor stays on top
    zIndex: 10000000, // High z-index to ensure visibility
  }}
/>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </Helmet>
      <NavBar />
      <FadeInSection>
      <Home />      
      </FadeInSection>
      <FadeInSection>
      <Resume />     
      </FadeInSection> 
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Works />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}

export default App;
