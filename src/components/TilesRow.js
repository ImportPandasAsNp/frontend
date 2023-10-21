import React, { useLayoutEffect } from "react";
import Tile from "./Tile";
import { useEffect,useState } from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import getUrl from "../constants";
import axios from "axios";

const Tiles = (props) => {
  const [getLocalStorage,setLocalStorage,removeLocalStorage] = useLocalStorage("token")
  const data = props.data;

  const heading = data.heading;

  const titles = data.titles;

  if(titles===undefined){
    return (
      <div className=" w-full flex flex-col gap-3">
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="grid grid-cols-6 gap-2">
      </div>
    </div>
    )
  }

  const onWatchHandler = (key)=>{
    const token = getLocalStorage("token")
    const backendURL = getUrl("history")
    const body = {
      "movie_id":key,
      "duration":"1"
    }

    const auth = {
      "headers":{
        "Authorization":"Bearer "+token
      }
    }

    axios.put(backendURL,body,auth).then((response)=>{
      console.log(data)
    })
  }

  return (
    <div className=" w-full flex flex-col gap-3">
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="grid grid-cols-6 gap-2">
        {titles.map((title, index) => (
          <Tile index={index} title={title} key={title.key} onWatch={onWatchHandler}/>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
