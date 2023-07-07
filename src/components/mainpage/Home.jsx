import React from 'react'
import Categories from './Categories'
import { SlideCard } from "./SlideCard"
import Slider from './Slider'
import "./Home.css"
 export const Home = () => {
  return (
    <>
    <section className='home'>
      <div className="container d_flex">
        <Slider></Slider>
      </div>
    </section>
    </>
  )

}
