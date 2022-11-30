import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../Assests/login.webp";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const { login ,providerLogin} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail,setLoginUserEmail] = useState('');
  const [token]=useToken(loginUserEmail)
  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.path || "/";

  if(token){
    navigate(from,{replace:true});
  }
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from,{replace:true});
        setLoginUserEmail(data.email);
        
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  const handleGoogleSignIn = ()=>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      setLoginUserEmail(user.email);
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <div>
        <figure>
          <img src={loginImg} alt="" />
        </figure>
      </div>
      <div className="h-[800px] flex justify-center items-center">
        <div
          className="w-96 p-7"
          style={{
            "box-shadow": " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
            "border-radius": "18px",
          }}
        >
          <h2 className="text-4xl text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-primary w-full mt-5"
              value="LOGIN"
            />
            <div>
              {loginError && (
                <p className="text-error mt-2 font-bold">{loginError}</p>
              )}
            </div>
          </form>
          <p className="text-sm font-bold mt-3">
            New to this website ?
            <Link className="text-secondary" to="/signup">
              Please Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full text-white">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
