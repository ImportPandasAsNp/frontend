import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {

    const [login,setLogin] = useState(true);


  return (
    <div className="flex bg-primary">
      <div className="p-10 text-2xl  gap-10  flex flex-col items-center h-screen w-full">
        <div className="  w-4/12 bg-dark-primary flex flex-col gap-6 rounded-lg items-center  p-8 ">
          <h1 className="text-white text-4xl mb-2 font-semibold flex flex-row gap-2 justify-center items-center">
            {login ? "Login to" : "Register on"} &nbsp;
            <span>
              <img
                src={require("../assets/logo.png")}
                alt=""
                className="h-10"
              ></img>
            </span>
            FireTV
          </h1>
          <div className="grid grid-cols-2 w-full gap-8 ">
            <button onClick={()=>{setLogin(true)}} className={`p-4 py-1  ${ login? "text-white bg-blue-600 hover:bg-blue-800" : "text-blue-600 bg-white hover:bg-neutral-300"} rounded-md font-base text-center w-full  cursor-pointer`}>
              Login
            </button>
            <button onClick={()=>{setLogin(false)}} className={`p-4 py-1  ${ !login? "text-white bg-blue-600 hover:bg-blue-800" : "text-blue-600 bg-white hover:bg-neutral-300"} rounded-md font-base text-center w-full  cursor-pointer`}>
              Register
            </button>
          </div>
        { login ? <Login/> : <Register/>}
         
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
