import React, { useContext } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import errorImg from '../../../Assests/error.jpg';

const ErrorPage = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();
    const navigate=useNavigate();

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
          navigate('/login');
        })
        .catch(error => console.error(error))
      }
    return (
        <div className='flex justify-center'>
            <div className='my-20'>
            <p className="text-red-500 text-2xl font-semibold text-center mb-5">Sorry, an unexpected error has occurred</p>
            <p className="text-red-600 text-2xl font-semibold text-center mb-5">{error.statusText || error.message}</p>
            <img src={errorImg} alt="" />
            <p className="text-3xl mt-8 text-center">Please <button onClick={handleLogOut}>Log Out</button> and log back in</p>
        </div>
        </div>
        
      )
}

export default ErrorPage