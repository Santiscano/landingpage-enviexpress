import AboutUs from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { useState } from "react";
import NavbarInteractive from "../components/NavbarInteractive"
import { useEffect } from 'react';
import Home from "../components/Home";
import MiniCards from "../components/MiniCards";
import Services from "../components/Services";


const Landing = () => {
  const [viewScrollTopIcon, setViewScrollTopIcon] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 560
        ? setViewScrollTopIcon(true)
        : setViewScrollTopIcon(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[])

  return (
    <>
      { viewScrollTopIcon && (
        <a href="#" className="scrolltop" id="scroll-top">
          <i className="bx bx-chevron-up scrolltop__icon"></i>
        </a>
      )}
      <NavbarInteractive/>
      {/* <Navbar/> */}
      <main>
        <Home/>
        <MiniCards/>
        <AboutUs/>
        <Services/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default Landing
