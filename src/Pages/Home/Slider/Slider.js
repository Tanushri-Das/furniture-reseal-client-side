import React from 'react';

import img1 from '../../../Assests/banner1.jpg';
import img2 from '../../../Assests/banner2.jpg';
import img3 from '../../../Assests/banner3.jpg';

import SliderItem from './SliderItem';

const sliderData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
  ]
const Slider = () => {
    return (
        <div className="carousel w-full py-6">
          {
              sliderData.map(slide => <SliderItem key = {slide.id}
                slide = {slide}>
                
              </SliderItem>)
          }
         
         
        </div>
      );
}

export default Slider