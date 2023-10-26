import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AgeRatingContext from "../contexts/ageRatingContext";
import useLocalStorage from "../Hooks/LocalStorage";

const Profiles = () => {

  const { ageRating, setAgeRating } = useContext(AgeRatingContext);
  const [selectedRating, setSelectedRating] = useState(ageRating);
  const [getLocalEmail, setLocalEmail,removeLocalEmail] = useLocalStorage("email")

  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setSelectedRating(newRating);
   
  };

  const onRatingSaveHandler = ()=>{
    setAgeRating(selectedRating);
  }

  console.log(ageRating);

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="p-24 text-2xl  gap-10  flex flex-col items-center h-screen w-full">
        <div className="  w-7/12 bg-dark-primary flex flex-col gap-2 rounded-lg divide-y divide-slate-700">
          <div className="flex flex-col  p-10 py-5 ">
            {/* <h1 className="font-semibold text-white text-5xl">
              Adnan Khurshid
            </h1> */}
            <h3 className="text-md text-neutral-400">
              {getLocalEmail()}
            </h3>
          </div>
          <div className="flex flex-row justify-between p-10 py-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-white">Set Content Rating</h1>
              <h1 className=" text-base text-neutral-300">
                You will see content rated up to
              </h1>
            </div>
            <div className="flex flex-row w-3/12 gap-3 items-center justify-center">
            <select
                className="rounded-md h-10 cursor-pointer"
                name="rating"
                id="rating"
                value={selectedRating}
                onChange={handleRatingChange}
              >
                <option className="bg-gray-700 text-white" value="A">
                  A
                </option>
                <option className="bg-gray-700 text-white" value="U/A">
                  U/A
                </option>
                <option className="bg-gray-700 text-white" value="U">
                  U
                </option>
              </select>
              <button onClick={onRatingSaveHandler} className="p-4 py-1 text-white rounded-md text-center bg-blue-600 hover:bg-blue-800 cursor-pointer">
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between p-10 py-5">
            
            <Link  to={`/history`}>
            <button className="p-4 py-1 text-white rounded-md font-normal text-center bg-blue-600 hover:bg-blue-800 cursor-pointer">
            Watch History &#11111;
            </button>
            </Link>
          </div>
          <div className="flex flex-row justify-between p-10 py-5">
        
            
            <button className="p-4 py-1 text-white rounded-md font-base text-center bg-blue-600 hover:bg-blue-800 cursor-pointer">
            <Link to={`/`}>Logout</Link>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
