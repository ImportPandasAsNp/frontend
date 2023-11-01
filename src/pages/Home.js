import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import Sidebar from "../components/Sidebar";
import SubscribeRow from "../components/SubscribeRow";
import Tiles from "../components/TilesRow";
import getUrl, { getContentTemplateFromMetadataList } from "../constants";
import AgeRatingContext from "../contexts/ageRatingContext";

const Home = () => {
  const [subscribeSuggestions,setSubscribeSuggestions] = useState({})
  //   const subscribeSuggestions = {
  //   platform: "hotstar",
  //   genre: "sci-fi",
  //   titles: [
  //     {
  //       name: "Seinfeld",
  //       image:
  //         "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //       platform: "netflix",
  //       genre: ["comedy"],
  //       description:
  //         "Jerry Seinfeld and his friends navigate New York's ups and downs in this iconic 'nothing'-based sitcom.",
  //     },
  //     {
  //       name: "Rick and Morty",
  //       image:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //       platform: "netflix",
  //       genre: ["comedy", "scifi"],
  //       description:
  //         "Join the eccentric scientist Rick Sanchez and his good-hearted but easily influenced grandson, Morty, in a series of wild interdimensional adventures.",
  //     },
  //     {
  //       name: "Better Call Saul",
  //       image:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //       platform: "netflix",
  //       genre: ["drama", "thriller", "crime"],
  //       description:
  //         "Explore the origin story of the infamous lawyer Saul Goodman in this prequel to Breaking Bad, navigating the complex world of law and morality.",
  //     },
  //     {
  //       name: "Suits",
  //       image:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //       platform: "netflix",
  //       genre: ["drama", "crime", "comedy"],
  //       description:
  //         "Experience the high-stakes legal world through the eyes of Mike Ross, a brilliant but unconventional legal prodigy, and his mentor Harvey Specter.",
  //     },
  //     {
  //       name: "Breaking Bad",
  //       image:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //       platform: "netflix",
  //       genre: ["drama", "thriller", "crime"],
  //       description:
  //         "Follow Walter White, a desperate high school chemistry teacher turned ruthless methamphetamine kingpin, in this gripping crime drama.",
  //     },
  //   ],
  // };

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

  const generateHeading = (heading,platform,titles)=>{
    return {
      heading:heading,
      platform:platform,
      titles:titles
    }
  }

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

    axios.get(clearSearchUrl, auth).then(() => {
      console.log("Search Context Cleared");
    });

    const backendUrl = getUrl("recommend");

    let promiseList = []

    promiseList.push(axios.post(backendUrl, { rating: ageRating }, auth))
    promiseList.push(axios.post(backendUrl + "/otherplatforms", { rating: ageRating }, auth))
    promiseList.push(axios.post(backendUrl + "/mostfrequent" + "/genre",{ rating: ageRating },auth))
    promiseList.push(axios.post(backendUrl + "/mostfrequent" + "/cast", { rating: ageRating }, auth))

    Promise.all(promiseList).then((responses)=>{
      let list = getContentTemplateFromMetadataList(responses[0].data);
      setRecommended(generateResponse("Recommended for You", list));


      list = getContentTemplateFromMetadataList(responses[1].data[0]);
      setOtherPlatforms(generateResponse("Watch on other platforms", list));

      let bestOtherPlatform = responses[1].data[1]
      console.log(bestOtherPlatform)
      if(bestOtherPlatform!="None"){
        let sliderData = []

        list.map((elem)=>{
          if(elem.platform==bestOtherPlatform){
            sliderData.push(elem)
          }
        })
        sliderData = sliderData.slice(0,Math.min(sliderData.length,5))
        setSubscribeSuggestions(generateHeading(`Based on your preferences you should subscribe to ${bestOtherPlatform}`,bestOtherPlatform,sliderData))
      }


      list = getContentTemplateFromMetadataList(responses[2].data.data);
      setSimilarGenre(generateResponse("More from " + responses[2].data.key, list));

      list = getContentTemplateFromMetadataList(responses[3].data.data);
      setSimilarCast(generateResponse("More from " + responses[3].data.key, list));
    })
  }, []);

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="p-7 text-2xl font-semibold gap-10 flex flex-col items-center h-screen w-full overflow-y-scroll">
        <SubscribeRow data={subscribeSuggestions} watchable={false} whenChange={setClicked} />
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
