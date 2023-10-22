import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/LocalStorage';
import Sidebar from '../components/Sidebar';
import Tiles from "../components/TilesRow";
import getUrl, { getContentTemplateFromMetadataList } from '../constants';
import AgeRatingContext from '../contexts/ageRatingContext';
const dummyImgUrl = "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVXBb2OIJF5kpOGVZ5TNjIydKyVReN6qd6UC2BJGpHfU1KGl1eaCApGzqcdP6LzCYI1Vt2P8UYL2d7FTP4of0zggLAC7i8TlmTI.webp?r=841"


const Home = () => {

    const {ageRating} = useContext(AgeRatingContext);

    const [getLocalStorage,setLocalStorage,removeLocalStorage]=useLocalStorage("token")

    const [recommended,setRecommended] = useState({})
    const [similarGenre, setSimilarGenre] = useState({})
    const [similarCast, setSimilarCast] = useState({})

    const generateResponse = (heading,list)=>{
      return {
        heading:heading,
        titles:list
      }
    }

    useEffect(()=>{
      const token = getLocalStorage()
      console.log(token)
      const auth = {
          "headers":{
          "Authorization":"Bearer " + token
        }
      }


      const backendUrl = getUrl("recommend")

      axios.post(backendUrl,{"rating":ageRating},auth).then((
        (response)=>{
          const list = getContentTemplateFromMetadataList(response.data)
          setRecommended(generateResponse("Recommended for You", list))
        }
      ))

      axios.post(backendUrl+"/mostfrequent"+"/genre",{"rating":ageRating},auth).then(
        (response)=>{
          const list = getContentTemplateFromMetadataList(response.data.data)
          setSimilarGenre(generateResponse("More from "+response.data.key,list))
        }
      )

      axios.post(backendUrl+"/mostfrequent"+"/cast",{"rating":ageRating},auth).then(
        (response)=>{
          const list = getContentTemplateFromMetadataList(response.data.data)
          setSimilarCast(generateResponse("More from "+response.data.key,list))
        }
      )
    },[])

    
      const becauseYouLiked = {
        heading:"Because you liked Shrek The Third",
        titles : recommended.titles
      }
      const fromDirector = {
        heading:"From your favorite director",
        titles : recommended.titles
      }
      const fromActor = {
        heading:"From your favorite actor",
        titles : recommended.titles
      }
    
      return (
        <div className="flex bg-primary">
          <Sidebar />
          <div className="p-7 text-2xl font-semibold gap-10 flex flex-col items-center h-screen w-full overflow-y-scroll">
            
           {<Tiles data={recommended}/>}
           <Tiles data={similarGenre}/>
           <Tiles data={similarCast}/>
           {/* <Tiles data={fromActor}/> */}
          </div>
        </div>
      );
}

export default Home
