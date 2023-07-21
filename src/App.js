import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home className="scroll" />
        <About className="scroll" />
        <Resume className="scroll" />
        <Portfolio className="scroll" />
        <Testimonials className="scroll" />
        <Blog className="scroll" />
        <Contact className="scroll" />
      </main>
    </>
  );
};

export default App;
