import { useState } from "react";
import SubsContext from "./subsContext";


const SubsState = (props)=>{

    const s = ["hello",];

    const [subs,setSubs] = useState(s)

    const addSub = (platform)=>{
        setSubs([...subs, platform]);
    }

    return (
        <SubsContext.Provider value={{subs,addSub}}>
            {props.children}
        </SubsContext.Provider>
    )
}

export default SubsState;