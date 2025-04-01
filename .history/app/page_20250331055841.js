'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {
  const [isdarkmode, setIsdarkmode]=useState(true)
  useEffect(()=>{
    if(isdarkmode){
      document.documentElement.classList
    }

  },[isdarkmode])
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contactme/>
    <Footer/>
    
    </>
  );
}
