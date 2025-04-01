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
    if(localStorage.theme ==="dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsdarkmode(true)
    }else{
      setIsdarkmode(false)
    }

  },[])
  useEffect(()=>{
    if(isdarkmode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''

    }

  },[isdarkmode])
  return (
    <>
    <Navbar isdarkmode/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contactme/>
    <Footer/>
    
    </>
  );
}
