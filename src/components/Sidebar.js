import React, { useState } from 'react';

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const MenuItems = [
      { title: "Home", src: "home" },
      { title: "Search", src: "search" },
      { title: "Apps", src: "apps" },
      { title: "Profiles", src: "profiles" },
    ];
  
    const [itemHover, setItemHover] = useState(
      Array(MenuItems.length).fill(false)
    );
  
    const imageHover = {
      filter: "grayscale(100%) brightness(1000%)",
    };
    const imageUnhover = {
      filter: "none",
    };

  return (

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`${
          open ? "w-60" : "w-20"
        } duration-300 ease-in-out h-screen bg-dark-primary relative`}
      >
        <ul className="pt-6 pl-2">
          <li className="text-white text-xl font-semibold flex items-center mb-16 gap-x-6 cursor-pointer p-2  rounded-md">
            <img src={require(`../assets/logo.png`)} className="w-12" alt="" />
            <span
              className={!open && "hidden text-xl font-semibold text-white"}
            >
              FireTV
            </span>
          </li>
          {MenuItems.map((menu, index) => (
            <li
              onMouseEnter={() => {
                const newHoverState = [...itemHover];
                newHoverState[index] = true;
                setItemHover(newHoverState);
              }}
              onMouseLeave={() => {
                const newHoverState = [...itemHover];
                newHoverState[index] = false;
                setItemHover(newHoverState);
              }}
              key={index}
              className="text-gray-300 text-xl flex items-center gap-x-4 mb-4 cursor-pointer p-2 hover:text-white rounded-md"
            >
              <img
                src={require(`../assets/${menu.src}.png`)}
                style={itemHover[index] ? imageHover : imageUnhover}
                alt=""
              />
              <span className={!open && "hidden"}>{menu.title}</span>
            </li>
          ))}
        </ul>
        <div className="text-gray-300 text-xl absolute bottom-0 flex items-center mb-16 gap-x-6 cursor-pointer p-2  rounded-md">
          <img src={require(`../assets/logout.png`)}className={!open && "hidden"}  alt="" />
          <span className={!open && "hidden text-xl font-semibold "}>
            Logout
          </span>
        </div>
      </div>
  )
}

export default Sidebar
