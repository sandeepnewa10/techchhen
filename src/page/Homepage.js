import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Service from '../components/Service'
import Slider from '../components/Slider'
import FeatureOne from '../components/FeatureOne'
import Product from '../components/Product'
import Team from '../components/Team'


const Homepage = () => {
  return (
    <>
      <Header />
      <Slider/>
      <About />
      <Service/>
      <FeatureOne/>
      <Product/>
      <Team/>
    </>
  )
}

export default Homepage