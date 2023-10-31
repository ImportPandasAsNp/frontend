import axios from "axios";
import React from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import getUrl from "../constants";
import Tile from "./Tile";

const SubscribeRow = (props) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const [getLocalStorage] = useLocalStorage("token");

  const data = props.data;

  if (data === undefined) {
    return <></>;
  }

  const platform = data.platform;

  const titles = data.titles;

  if (titles === undefined||titles.length==0) {
    return <></>;
  }

  const onWatchHandler = (key, title, sliderValue) => {
    window.confirm("You watched " + title);
    let r = (Math.random() + 1).toString(36).substring(7);
    props.whenChange(r);
    const token = getLocalStorage("token");
    const backendURL = getUrl("history");
    const body = {
      movie_id: key,
      duration: sliderValue,
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
    <>
      <div className="w-full border-2 flex flex-col gap-6 bg-neutral-200 rounded-md p-4">
        <h1 className="text-4xl text-neutral-700">
          {`${data.heading}`}
        </h1>
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

          <div className="w-full flex flex-col justify-center items-center p-4">
            <img
              src={require(`../assets/${platform}cardlogo.png`)}
              alt=""
              cl
            />

            <button className="w-11/12 rounded-md  text-2xl bg-neutral-800 border-1 text-white text-center px-2 py-1 hover:bg-neutral-500 hover:text-white" onClick={()=>onSubscriptionsHandler(data.platform)}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeRow;
