import React, { useContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Sidebar from "../components/Sidebar";
import Tiles from "../components/TilesRow";

import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import useLocalStorage from "../Hooks/LocalStorage";
import getUrl, { getContentTemplateFromMetadataList } from "../constants";
import AgeRatingContext from "../contexts/ageRatingContext";

const Search = () => {

  const [loading,setLoading] = useState(false);

  const {ageRating} = useContext(AgeRatingContext);

  const [getLocalStorage,setLocalStorage,removeLocalStorage] = useLocalStorage("token")
  const [result,setResult]= useState({})

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const [inputValue, setInputValue] = useState("");

  const [listening, setListening] = useState(false);
  const [clicked,setClicked]= useState('')

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  const generateResponse = (heading,list)=>{
    return {
      heading:heading,
      titles:list
    }
  }

  const handleSearch = async (text)=>{
    setLoading(true);
    const token = getLocalStorage()
    const backendURL = `${getUrl("search")}?query=${text}`
    const auth = {
      "headers":{
        "Authorization":"Bearer "+token
      }
    }
    const resp = await axios.post(backendURL,{"rating":ageRating},auth)
    setLoading(false);
    setResult(generateResponse("Search Results",getContentTemplateFromMetadataList(resp.data)))
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
    resetTranscript();
    setListening(true);
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
  };


  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  result.heading = null;

  return (
    <div className="flex  bg-primary">
      <Sidebar />
      <div className="p-7 text-2xl gap-10 flex flex-col items-center h-screen w-full overflow-y-scroll">
        <div className="flex  w-full h-[4rem] tracking-wider">
          {!listening ? (
            <button
              className="p-4 text-white flex flex-col text-sm   mr-4 bg-blue-700 hover:bg-blue-900 rounded-full"
              onClick={handleStartListening}
            >
              <img className="w-8" alt="" src={require("../assets/micstart.png")} />{" "}
              <p className="mt-4">Start</p>{" "}
            </button>
          ) : (
            <button
              className="p-4 text-white flex flex-col text-sm   mr-4 bg-red-600 hover:bg-red-900 rounded-full"
              onClick={handleStopListening}
            >
              <img className="w-8" alt="" src={require("../assets/micstop.png")} />{" "}
              <p className="mt-4">Stop</p>
            </button>
          )}

          <input
            className="w-10/12 bg-neutral-300 rounded-l-md px-4 text-neutral-800 focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search movies, shows and more"
          />
          <button className="w-2/12 flex justify-center items-center font-semibold text-white text-3xl bg-dark-primary rounded-r-md hover:bg-black"
          onClick={() => handleSearch(inputValue)}>
            <p>Search</p>
          </button>
        </div>
        <MoonLoader
        color={"#ffffff"}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-60"
        />
        <Tiles data={result} watchable={true} whenChange={setClicked}/>
      </div>
    </div>
  );
};

export default Search;
