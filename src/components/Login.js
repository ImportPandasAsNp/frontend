import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { useState } from 'react';
import getUrl from '../constants';
import axios from 'axios';
import useLocalStorage from '../Hooks/LocalStorage';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getLocalStorage, setLocalStorage,removeLocalStorage] = useLocalStorage("token")
  const [getLocalEmail, setLocalEmail,removeLocalEmail] = useLocalStorage("email")
  const navigate = useNavigate()


  async function handleLogin(email, password) {
    const userData = {
      name:"dummy",
      genre:'dummy',
      email,
      password,
    };
  
    const backendURL = getUrl("auth/signin"); // Replace with your actual backend URL
  
    try {
      const response = await axios.post(backendURL, userData);
      const body = response.data.body
      setLocalStorage(body.token)
      setLocalEmail(userData.email)
      navigate("/home")
      console.log('Registration successful:', body.token);

    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <>
    <div className=" w-full flex flex-col gap-2 tracking-wider">
    <label className="text-md text-white">Email</label>
    <input
      className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
      placeholder="Enter your email..."
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className=" w-full flex flex-col gap-2 tracking-wider">
    <label className="text-md text-white">Password</label>
    <input
      className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
      placeholder="Enter your password..."
      type="password"
      name="word"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button className="p-4 py-1 mt-4 text-white rounded-md font-base text-center w-full bg-blue-600 hover:bg-blue-800 cursor-pointer"
  onClick={() => handleLogin(email, password)}>
    Login
  </button>
  </>
  )
}

export default Login
