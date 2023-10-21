import React, { useContext, useEffect, useState } from "react";
import subsContext from "../contexts/subsContext";


const Tile = (props) => {
  const [hover, setHover] = useState(false);

  const index = props.index;
  const title = props.title;
  const key = title.key

  const a = useContext(subsContext);

  const subs = a.subs;

  const addSub = a.addSub;

  useEffect(() => {
    setPlayable(subs.includes(title.platform)); // Update playable when subs context changes
  }, [subs, title.platform]);

  const addSubHandler = (sub)=>{

    setPlayable(true);
    addSub(sub);

  }

  const [playable,setPlayable] = useState(subs.includes(title.platform));

  function getGenreString(genre){

    let s = genre.map(g => g.charAt(0).toUpperCase() + g.slice(1).toLowerCase()).join(' · ');
    return s;
  }

  return (
    <div
      key={index}
      className="w-full  relative cursor-pointer"
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
    >
      <img src={title.image} alt="" />
      <img
        src={require(`../assets/${title.platform}cardlogo.png`)}
        alt=""
        className="absolute w-10 bottom-0 left-0"
      />
      <div
        alt=""
        className={`absolute top-0 left-0 z-10  flex flex-col gap-1 bg-gray-700 duration-300 ease-in-out shadow-2xl shadow-black/[0.7] ${
          !hover ? "scale-0" : "scale-125"
        }`}
      >
        <img src={title.image} alt="" />
        <h1 className="text-white px-1">{title.name}</h1>
        <p className="text-xs font-thin text-neutral-300 px-2">
          {getGenreString(title.genre)}
        </p>
        {playable ? 
         <div className="flex flex-row items-center gap-1 px-2">
        <button className="text-xs bg-white border-1 rounded-sm text-black w-4/12 text-center px-2 py-1 hover:bg-neutral-500 hover:text-white">Play</button>
        <div className="text-xs font-normal text-neutral-300 px-1 w-6/12  flex items-center gap-2" >on <span><img alt="" className="w-5" src={require(`../assets/${title.platform}cardlogo.png`)}/></span> <p>{title.platform[0].toUpperCase() +
        title.platform.slice(1)}</p></div>
        </div> : 
        <div className="flex flex-row items-center gap-1 px-2">
<button className="text-xs bg-white border-1 rounded-sm text-black w-full text-center px-2 py-1 hover:bg-neutral-500 hover:text-white flex items-center gap-2" onClick={() => addSubHandler(title.platform)}>Subscribe to <span><img alt="" className="w-5" src={require(`../assets/${title.platform}cardlogo.png`)}/></span>{title.platform[0].toUpperCase() +
        title.platform.slice(1)}</button>
        </div>

        
        }

        <div className="flex flex-row items-center gap-1 px-2">
        <button className="text-xs bg-white border-1 rounded-sm text-black w-full text-center px-2 py-1 hover:bg-neutral-500 hover:text-white flex items-center gap-2" onClick={()=>props.onWatch(key)}>Watch</button>
        </div>
       
        <div className="text-xs text-white font-normal p-2">
          {title.description}
        </div>
      </div>
    </div>
  );
};

export default Tile;
