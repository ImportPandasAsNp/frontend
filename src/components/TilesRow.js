import axios from "axios";
import React from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import getUrl from "../constants";
import Tile from "./Tile";

const Tiles = (props) => {
  const [getLocalStorage, setLocalStorage, removeLocalStorage] =
    useLocalStorage("token");
  const data = props.data;

  const heading = data.heading;

  const titles = data.titles;

  if (titles === undefined) {
    return (
      <div className=" w-full flex flex-col gap-3">
        <h1 className="text-white text-2xl">{heading}</h1>
        <div className="grid grid-cols-6 gap-2"></div>
      </div>
    );
  }

  const onWatchHandler = (key, title,sliderValue) => {
    window.confirm("You watched " + title);
    let r = (Math.random() + 1).toString(36).substring(7);
    props.whenChange(r);
    const token = getLocalStorage("token");
    const backendURL = getUrl("history");
    const body = {
      movie_id: key,
      duration: sliderValue,
      day:1,
      hour:1
    };

    const auth = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios.put(backendURL, body, auth).then((response) => {
      console.log(data);
    });
  };

  const onSubscriptionsHandler = (platform) => {
    window.confirm("You subscribed to " + platform);
    let r = (Math.random() + 1).toString(36).substring(7);
    props.whenChange(r);
    const token = getLocalStorage("token");
    const backendURL = getUrl("subscriptions");
    const body = {
      platform: platform,
    };

    const auth = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios.put(backendURL, body, auth).then((response) => {
      console.log(data);
    });
  };

  if (titles.length == 0) {
    return <></>;
  }

  return (
    <div className=" w-full flex flex-col gap-3">
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="grid grid-cols-6 gap-2">
        {titles.map((title, index) => (
          <Tile
            index={index}
            title={title}
            key={title.key}
            onWatch={onWatchHandler}
            onSubscriptions={onSubscriptionsHandler}
            watchable={props.watchable}
          />
        ))}
      </div>
    </div>
  );
};

export default Tiles;
