import React from 'react';

const Tile = (props) => {
    const index = props.index;
    const title = props.title;
  return (
    <div key={index} className="w-full  relative">
    <img
      src={title.image}
      alt=""
    />
    <img
      src={require(`../assets/${title.platform}logo.png`)}
      alt=""
      className="absolute w-10 bottom-0 left-0"
    />
  </div>
  )
}

export default Tile
