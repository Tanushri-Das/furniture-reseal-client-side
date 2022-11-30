import React from 'react'
import useTitle from '../../../Hooks/useTitle'
import AllCategories from '../AllCategories/AllCategories'
import Features from '../Features/Features'
import Slider from '../Slider/Slider'

const Home = () => {
  useTitle('home')
  return (
    <div className='mx-5'>
        <Slider></Slider>
        <AllCategories></AllCategories>
        <Features></Features>
    </div>
  )
}

export default Home