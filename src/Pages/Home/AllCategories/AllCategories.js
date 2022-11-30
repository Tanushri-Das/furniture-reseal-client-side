import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct/AddProduct";



const AllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((categories) => setAllCategories(categories));
  }, []);
  return (
    <div className="my-20">
      {/* <h1 className="text-3xl mx-auto text-center font-bold mb-12 w-96">
        All Categories
      </h1> */}
 
      <div className="lg:flex justify-center items-center ml-16">
        {allCategories.map((category) => (
          
          <button className="btn btn-primary mb-6 lg:block w-80 mr-6" key={category._id}>
            <Link to={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </button>
        ))}
      </div>
      
    </div>
    
  );
};

export default AllCategories;
