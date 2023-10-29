import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import Sidebar from "../components/Sidebar";
import Tiles from "../components/TilesRow";
import getUrl, { getContentTemplateFromMetadataList } from "../constants";
import AgeRatingContext from "../contexts/ageRatingContext";

const Home = () => {
  const { ageRating } = useContext(AgeRatingContext);

  const [getLocalStorage, setLocalStorage, removeLocalStorage] =
    useLocalStorage("token");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const [recommended, setRecommended] = useState({});
  const [otherPlatforms, setOtherPlatforms] = useState({});
  const [similarGenre, setSimilarGenre] = useState({});
  const [similarCast, setSimilarCast] = useState({});
  const [clicked, setClicked] = useState("");

  const generateResponse = (heading, list) => {
    return {
      heading: heading,
      titles: list,
    };
  };

  useEffect(() => {
    // if(clicked!==''){
    //   sleep(2000).then(()=>{

    //   })
    // }
    const token = getLocalStorage();
    console.log(token);
    const auth = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const clearSearchUrl = getUrl("search/clear");

    axios.get(clearSearchUrl,auth).then(() => {
      console.log("Search Context Cleared");
    });

    const backendUrl = getUrl("recommend");

    axios.post(backendUrl, { rating: ageRating }, auth).then((response) => {
      const list = getContentTemplateFromMetadataList(response.data);
      setRecommended(generateResponse("Recommended for You", list));
      console.log(list);
    });

    axios
      .post(backendUrl + "/otherplatforms", { rating: ageRating }, auth)
      .then((response) => {
        const list = getContentTemplateFromMetadataList(response.data);
        setOtherPlatforms(generateResponse("Watch on other platforms", list));
      });

    axios
      .post(
        backendUrl + "/mostfrequent" + "/genre",
        { rating: ageRating },
        auth
      )
      .then((response) => {
        const list = getContentTemplateFromMetadataList(response.data.data);
        setSimilarGenre(
          generateResponse("More from " + response.data.key, list)
        );
      });

    axios
      .post(backendUrl + "/mostfrequent" + "/cast", { rating: ageRating }, auth)
      .then((response) => {
        const list = getContentTemplateFromMetadataList(response.data.data);
        setSimilarCast(
          generateResponse("More from " + response.data.key, list)
        );
      });
  }, []);

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="p-7 text-2xl font-semibold gap-10 flex flex-col items-center h-screen w-full overflow-y-scroll">
        {<Tiles data={recommended} watchable={true} whenChange={setClicked} />}
        {
          <Tiles
            data={otherPlatforms}
            watchable={false}
            whenChange={setClicked}
          />
        }
        <Tiles data={similarGenre} watchable={true} whenChange={setClicked} />
        <Tiles data={similarCast} watchable={true} whenChange={setClicked} />
        {/* <Tiles data={fromActor}/> */}
      </div>
    </div>
  );
};

export default Home;
