import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import useTitle from '../../../Hooks/useTitle';
import BookingModal from '../BookingModal/BookingModal';
import SingleCatagory from '../SingleCategoryData/SingleCatagory';

const CategoryDetails = () => {
 
  const categoriesAllData = useLoaderData();
  console.log(categoriesAllData);

  const [product,setProduct]=useState(null);
  let [changeText, setChangeText] = useState(true);
  return (
    <div className='my-20'>
      <h1 className="text-3xl mx-auto text-center font-bold mb-12 w-96">
        All Categories
      </h1>
      <div className='flex justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          
          {
            categoriesAllData?.map(data =><SingleCatagory key={data._id} data={data} setChangeText={setChangeText} changeText={changeText} setProduct={setProduct}></SingleCatagory>)
          }
          
      </div>
      
      </div>
      {
        product && 
        <BookingModal product={product} setProduct={setProduct} setChangeText={setChangeText} changeText={changeText}></BookingModal>}
    </div>
  )
}

export default CategoryDetails