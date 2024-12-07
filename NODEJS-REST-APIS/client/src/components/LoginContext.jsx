import { createContext, useState } from "react";

let Logincontext=createContext()
let LoginProvider=({children})=>{
    let [login,setLogin]=useState(false)

    return (
        <Logincontext.Provider value={{login,setLogin}}>
            {children}
        </Logincontext.Provider>
    )
}

export {Logincontext,LoginProvider}