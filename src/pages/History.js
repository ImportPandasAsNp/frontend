import axios from "axios";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import Sidebar from "../components/Sidebar";
import getUrl, { getContentTemplateFromMetadataList } from "../constants";


const History = () => {
  const [getLocalStorage,setLocalStorage,removeLocalStorage] = useLocalStorage("token")
  const [userHistory,setUserHistory] = useState({})

  const generateResponse = (heading,list)=>{
    return {
      heading:heading,
      titles:list
    }
  }

  useEffect(()=>{
    const token = getLocalStorage()

    const auth = {
      "headers":{
        "Authorization":"Bearer "+token
      }
    }

    const backendURL = getUrl("history")

    axios.get(backendURL,auth).then((resp)=>{
      let array = getContentTemplateFromMetadataList(resp.data)
      array.reverse()
      setUserHistory(generateResponse("Recommended for you",array))
    })
  },[])


  function getGenreString(genre) {
    let s = genre
      .map((g) => g.charAt(0).toUpperCase() + g.slice(1).toLowerCase())
      .join(" · ");
    return s;
  }

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="p-24 pt-10 text-2xl  gap-10  flex flex-col items-center h-screen w-full">
        <h1 className="text-white text-4xl">Watch History</h1>
        <div className="  w-7/12 bg-dark-primary flex flex-col gap-2 rounded-lg divide-y divide-slate-700 overflow-y-scroll">
          {Object.keys(userHistory).length > 0 && userHistory.titles.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between p-10 py-5"
            >
              <div className="flex flex-col gap-1">
                <h1 className="text-xl text-white">{item.name}</h1>
                <h1 className=" text-base text-neutral-300">{item.platform}</h1>
              </div>
              <div className=" text-base text-neutral-300">{`Genre: ${getGenreString(item.genre)}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
