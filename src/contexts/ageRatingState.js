import { useState } from "react";

import AgeRatingContext from "./ageRatingContext";

const AgeRatingState= (props)=>{

    const [ageRating,setAgeRating] = useState("A");



    return(
        <AgeRatingContext.Provider value={{ageRating,setAgeRating}}>
            {props.children}
        </AgeRatingContext.Provider>
    )
}

// const useMyAgeContext = () => {
//     const contextValue = useContext(AgeRatingContext);
//     if (contextValue === undefined) {
//       throw new Error('useMyContext must be used within a MyProvider');
//     }
//     return contextValue;
//   };
  

export default AgeRatingState
