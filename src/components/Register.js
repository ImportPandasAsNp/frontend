import React,{useState} from "react";
import getUrl from "../constants";
import axios from 'axios'

import { constants } from "buffer";

async function handleRegistration(name, email, password, genre) {
  const userData = {
    name,
    email,
    password,
    genre
  };

  const backendURL = getUrl("auth/signup"); // Replace with your actual backend URL

  try {
    const response = await axios.post(backendURL, userData);

    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genre,setGenre] = useState('');

  return (
    <>
      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Username</label>
        <input
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your username..."
          type="username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Email</label>
        <input
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your email..."
          type="email"
          name="email"
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

      <div className=" w-full flex flex-col gap-2 tracking-wider">
        <label className="text-md text-white">Preferred Genre</label>
        <select
          className="w-full  h-10  bg-gray-700 rounded-md px-4 text-white text-base focus:outline-none"
          placeholder="Enter your password..."
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="science fiction">Science Fiction</option>
            <option value="documentary">Documentary</option>
        </select>
      </div>
      <button className="p-4 py-1 mt-4 text-white rounded-md font-base text-center w-full bg-blue-600 hover:bg-blue-800 cursor-pointer
      " onClick={() => handleRegistration(name, email, password,genre)}>
        Register
      </button>
    </>
  );
};

export default Register;
