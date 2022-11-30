import React from 'react'
import AllCategories from '../AllCategories/AllCategories'
import Features from '../Features/Features'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
    <div className='mx-5'>
        <Slider></Slider>
        <AllCategories></AllCategories>
        <Features></Features>
    </div>
  )
}

export default Home