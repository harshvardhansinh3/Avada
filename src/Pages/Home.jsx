import React from 'react'
import { Navbar } from './Navbar'
import {Header} from './Header'
import { Cards } from './Cards'
import { FAQ } from './FAQ'
import { Footer } from './Footer'
import  { useRef } from "react";





export const Home = () => {

const beginnerRef = useRef(null);


const scrollToSection = (ref)=>{
  ref.current?.scrollIntoView({ Behavior:'smooth'});
};

  return (
    <div>


        <Navbar scrollToSection={scrollToSection} refs={{beginnerRef}}/>
        <Header refs={{beginnerRef}}/>
        <Cards/>
        <FAQ/>
        <Footer/>




    </div>
  )
}
