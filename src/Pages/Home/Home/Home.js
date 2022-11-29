import React from 'react'
import AllCategories from '../AllCategories/AllCategories'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
    <div className='mx-5'>
        <Slider></Slider>
        <AllCategories></AllCategories>
    </div>
  )
}

export default Home