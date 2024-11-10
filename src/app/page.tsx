'use client';
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
// import Image from "next/image";
import Skills from "@/components/Skills";
import AOS from 'aos'
import "aos/dist/aos.css"
import {useEffect} from "react";

export default function Home(){
  useEffect (() =>{
    AOS.init({
     easing:"ease-out-back",
     duration: 1200,
     delay :100,
     mirror:true,
     anchorPlacement: "bottom-bottom",
     offset :160, 
    });
    AOS.refresh();
  },[]);
  
  return(
    <main>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <About/>
    </main>
  );
}