import React from "react";
import Tile from "./Tile";

const Tiles = (props) => {
  const data = props.data;

  const heading = data.heading;

  const titles = data.titles;

  return (
    <div className=" w-full flex flex-col gap-3">
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="grid grid-cols-6 gap-2">
        {titles.map((title, index) => (
          <Tile index={index} title={title}/>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
