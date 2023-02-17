import React from 'react';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./components/pages/Portfolio";



function App() {
  return (
    <main>
      <Navigation />
      <About />
      <Contact />
      <Portfolio />
      <Contact />
    </main>
  )
    
};
export default App;
