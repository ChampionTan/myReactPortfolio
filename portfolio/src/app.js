import React from 'react';
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";



function App() {
  return (
    <main>
      <Homepage />
      <Navbar />
      <Projects />
      <Contact />
    </main>
  )
    
};
export default App;
