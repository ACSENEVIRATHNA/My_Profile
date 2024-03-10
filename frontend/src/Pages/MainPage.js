import React from "react";
import BackgroundDesign from "../Components/BackgroundDesign";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Stack from "../Components/Stack";
import Contact from "../Components/Contact";
import Social from "../Components/Social";
import Education from "../Components/Education";

const MainPage = () => {
  return (
    <>
      <div className="main">
        <Social/>
        <Header/>
        <Home/>
        <About/>
        <Education/>
        <Skills/>
        <Stack/>
        <Contact/>
        <BackgroundDesign />
      </div>
    </>
  );
};

export default MainPage;
